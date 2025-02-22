import { getCharacterId, getRoomId, parent, sleep } from "../tools/functions";
import { ChatBar } from "../class/class";
import * as env from "../.env/env";
import { debug } from "../tools/debug";
import * as request from "../tools/requests";
import { babe_api_class } from "../tools/sdk";

const babe = new babe_api_class();

var keys = [];

function keysPressed(e,chatbar: HTMLTextAreaElement,list: ChatBar) {
    keys[e.keyCode] = true;
    for (let i = 0; i < 58; i++) {
            if (keys[17] && keys[49 + i]) {
            chatbar.value += list.button[(list.button.length - 2) - i][1];
            e.preventDefault();	 // prevent default browser behavior
        }
    }
}

function keysReleased(e) {
    keys[e.keyCode] = false;
}

function MemoryAfterburner_Modal(){
    const v = document.createElement('div');
    v.innerHTML = env.MemoryAfterburner_modalHtml;
    const MemoryAfterburner_Modal = v.childNodes.item(0);
    const tabs = MemoryAfterburner_Modal.childNodes[0].childNodes[0].childNodes.item(0) as HTMLDivElement;
    const select_prompt = tabs.childNodes[1].childNodes[0].childNodes[1].childNodes.item(0) as HTMLSelectElement;
    const apiKey_textarea = tabs.childNodes[1].childNodes.item(1) as HTMLTextAreaElement;
    const model_textarea = tabs.childNodes[2].childNodes.item(1) as HTMLTextAreaElement;
    const turn_limit = tabs.childNodes[3].childNodes.item(1) as HTMLTextAreaElement;
    const close = tabs.childNodes[4].childNodes.item(0) as HTMLButtonElement;
    const x = tabs.childNodes[0].childNodes.item(1) as HTMLElement;
    const start = tabs.childNodes[4].childNodes.item(1) as HTMLButtonElement;
    x.addEventListener('click',()=>MemoryAfterburner_Modal.remove());
    close.addEventListener('click',()=>MemoryAfterburner_Modal.remove());
    if (JSON.parse(localStorage.getItem(env.local_Gemini_api_key)).key != null) {
        apiKey_textarea.value = JSON.parse(localStorage.getItem(env.local_Gemini_api_key)).key;
    }
    if (JSON.parse(localStorage.getItem(env.local_Gemini_api_key)).model != null) {
        model_textarea.value = JSON.parse(localStorage.getItem(env.local_Gemini_api_key)).model;
    }
    if (JSON.parse(localStorage.getItem(env.local_Gemini_api_key)).limit != null) {
        turn_limit.value = JSON.parse(localStorage.getItem(env.local_Gemini_api_key)).limit;
    }
    if (JSON.parse(localStorage.getItem(env.local_Gemini_api_key)).select != null) {
        var sel2 = select_prompt.options;
        for (let i=0; i<sel2.length; i++) {
            if (sel2[i].value == JSON.parse(localStorage.getItem(env.local_Gemini_api_key)).select) sel2[i].selected = true;
        }
    }
    start.addEventListener('click',()=>{
        //limit 판단
        if (Number(turn_limit.value) > 50 || Number(turn_limit.value) < 0){
            alert("limit는 0 이상 50 이하여야 합니다.");
            return true;
        }
        alert("시간이 많이 소요되니 당황하시지말고 기다려 주세요... (확인을 누르셔야 진행됩니다.)");
        //현재 상태 로컬스토리지 저장
        if (select_prompt.value == "3"){
            localStorage.setItem(env.local_Gemini_api_key,JSON.stringify({
                key : apiKey_textarea.value,
                model : model_textarea.value,
                limit : turn_limit.value,
                select : select_prompt.value,
                prompt : null
            }));
        }
        else{
            localStorage.setItem(env.local_Gemini_api_key,JSON.stringify({
                key : apiKey_textarea.value,
                model : model_textarea.value,
                limit : turn_limit.value,
                select : select_prompt.value,
                prompt : null
            }));
        }
        debug(`limited ${turn_limit.value}`);
        //채팅내역 + 페르소나 불러오기
        var chatlog = babe.getChatroom(getCharacterId(),getRoomId()).getMessages();
            try{
                var usernmae = babe.getActivePersona().nickname;
            }
            catch{
                alert("대표프로필을 설정해주세요");
                return true;
            }
            debug("character_profiles",4);
            //select 박스 설정
            if (select_prompt.value == "0"){
                var promptTemp: any = env.one_by_one_character_prompt;                      
                debug("selected 1 : 1 캐릭터챗");
            }
            else if (select_prompt.value == "1"){
                var promptTemp: any = env.simulation_prompt;
                debug("selected 시뮬레이션");
            }
            else if (select_prompt.value == "2"){
                var promptTemp: any = env.focus_on_important_cases_prompt;
                debug("selected 주요사건 위주");
            }
            //gemini에게 보낼 json
            var lastContent = {
                content: []
            } 
            for (const element of chatlog.messages.slice(0,Number(turn_limit.value) * 2)) {
                if (element.role == "user"){
                    lastContent.content[lastContent.content.length] = {
                        message: element.content,
                        role: "user",
                        username: usernmae
                    }
                }
                else if (element.role == "assistant"){
                    lastContent.content[lastContent.content.length] = {
                        message: element.content,
                        role: "assistant"
                    }
                }
            }
            debug("chatlog",4);
            //프롬 추가
            if (select_prompt.value != "3"){
                promptTemp.chat_log = lastContent.content;
                var gemini_text = JSON.stringify(promptTemp);
            }
            else{
                var gemini_text = promptTemp + `[대화내역]\n${JSON.stringify(lastContent)}`;
            }
            //제미니 전송
            var result = request.out_postAfetch(env.gemini_api_url + `/v1beta/models/${model_textarea.value}:generateContent?key=${apiKey_textarea.value}`,{
                contents: {
                    parts : [
                        {text: gemini_text}
                    ]
                }
            }).candidates[0].content.parts[0].text;
            debug("gemini compeleted");
            //뤼튼 메시지 전송은 sendLimit자 이상 보낼시 too large request 에러가 발생해서 예외처리
            if (result.length > env.sendLimit){
                if(!confirm("요약본이 너무 깁니다. 요약본을 나눠서 전송하겠습니다. 진행하시겠습니까?")){
                    return true;
                }
                var dp = Math.ceil(result.length / env.sendLimit);
                for (let index = 0; index < dp; index++) {
                    if (index != dp-1){
                        let room = babe.getChatroom(getCharacterId(),getRoomId());
                        room.send("","free",0);
                        sleep(1000);
                        console.log(room.getMessages());
                        babe.getMessage(room.getMessages().messages[0]).set(result.substring(env.sendLimit * index,env.sendLimit * (index + 1)))
                    }
                    else{
                        let room = babe.getChatroom(getCharacterId(),getRoomId());
                        room.send("","free",0);
                        sleep(1000);
                        console.log(room.getMessages());
                        babe.getMessage(room.getMessages().messages[0]).set(result.substring(env.sendLimit * index));
                    }
                    if(!confirm(`메시지를 나눠서 보내는중... (${index + 1}/${dp})`)){
                        return true;
                    }
                }
                debug("result DP",4);
            }
            else{
                let room = babe.getChatroom(getCharacterId(),getRoomId());
                room.send("","free",0);
                sleep(1000);
                console.log(room.getMessages());
                babe.getMessage(room.getMessages().messages[0]).set(result);
            }
            debug("wrtn.ai message sended");
            debug("Afterburning completed");
            alert("Afterburning complete!");
            //새로고침
            document.location.reload();
            debug("AfterMemory_func",0);
    })
    document.body.appendChild(v.childNodes.item(0));
}

export function chatroom(){
    const chatbar = document.getElementsByTagName("textarea").item(0);
    if(chatbar != null){
        //textarea real-time apply
        let lastest = [chatbar.className,chatbar.value];
        setInterval(()=>{
            if (lastest[0] != chatbar.className && lastest[1] != "" && chatbar.value != ""){
                chatbar.value = lastest[1];
            }
            lastest = [chatbar.className,chatbar.value];
        })
        //단축키 이벤트
        window.addEventListener("keydown", (e) => keysPressed(e,chatbar,text), false);
        window.addEventListener("keyup", (e)=>keysReleased(e), false);
        //단축버튼 추가
        const buttons = parent(chatbar,2).childNodes.item(2) as HTMLDivElement;
        const new_button = buttons.childNodes.item(0).cloneNode(true) as HTMLButtonElement;
        const text = new ChatBar(buttons,new_button);
        text.setPlus(() => {
            if (chatbar.value == "") return alert("단축내용을 지정해주세요");
            text.add(String(text.button.length - 1),(button)=>{
                chatbar.value += text.button[(text.button.length - 1) - Number(button.id)][1];
                chatbar.textContent = chatbar.value;
            },chatbar.value);
        })
        text.setMinus(() => {
            if (text.button.length == 2) return alert("삭제할 단축버튼이 없습니다.");
            text.pop();
        })
    }
    setInterval(()=>{
        if (document.URL.includes('character') && document.URL.includes('chat')){
            const ChatSaveMenu = document.getElementsByClassName(env.ChatSaveMenuClass).item(0) as HTMLDivElement;
            if (ChatSaveMenu != null){
                const MemoryAfterburnerMenu = ChatSaveMenu.childNodes.item(0).cloneNode(true) as HTMLButtonElement;
                if (ChatSaveMenu.childNodes.length == 2){
                    MemoryAfterburnerMenu.innerHTML = env.MemoryAfterburner_frontHtml + "기억력 보강";
                    MemoryAfterburnerMenu.addEventListener('click',MemoryAfterburner_Modal)
                    ChatSaveMenu.appendChild(MemoryAfterburnerMenu);
                }
            }
        }
    })
}