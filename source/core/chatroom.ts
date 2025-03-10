import { ChatOnload, ChatReload, getCharacterId, getRoomId, parent, sleep } from "../tools/functions";
import { ChatBar_class } from "../class/class";
import * as env from "../.env/env";
import { debug } from "../tools/debug";
import * as request from "../tools/requests";
import { babe_api_class } from "../tools/sdk";
import * as interfaces from "../interface/interfaces";

const babe = new babe_api_class();

var keys = [];

//리롤중인지 기록
var isReload: boolean = false;

//단축키
function keysPressed(e,chatbar: HTMLTextAreaElement,list: ChatBar_class) {
    keys[e.keyCode] = true;
    for (let i = 0; i < 58; i++) {
        if (keys[17] && keys[49 + i]) {
            if (list.button[(list.button.length - 2) - i][1] != undefined){
                chatbar.value += list.button[(list.button.length - 2) - i][1];
                e.preventDefault();	 // prevent default browser behavior
            }
        }
    }
}

function keysReleased(e) {
    keys[e.keyCode] = false;
}

//메모리 애프터버너
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

//단축버튼 추가
function sumButton(chatbar: HTMLTextAreaElement){
    //textarea real-time apply
    let lastest = [chatbar.className,chatbar.value];
    //수정 필요
    let ifchangedclass = setInterval(()=>{
        if (document.URL.includes('character') && document.URL.split("/").length > 6){
            if (lastest[0] != chatbar.className){
                if (lastest[1] == "" && chatbar.value.length == 1){
                }
                else if (chatbar.value == "" && lastest[1].length == 1){
                }
                else{
                    chatbar.value = lastest[1];
                }
            }
            lastest = [chatbar.className,chatbar.value];
        }
        else{
            debug("ifchangedclass",6);
            clearInterval(ifchangedclass);
        }
    })
    //단축키 이벤트
    window.addEventListener("keydown", (e) => keysPressed(e,chatbar,text), false);
    window.addEventListener("keyup", (e)=>keysReleased(e), false);
    //단축버튼 추가
    const buttons = parent(chatbar,2).childNodes.item(2) as HTMLDivElement;
    buttons.style.cssText = `position: absolute; bottom: 110%; border: 1px solid; border-radius: 20px; border-color: rgba(221,221,221,0.8); padding-right: 5px;`
    const new_button = buttons.childNodes.item(0).cloneNode(true) as HTMLButtonElement;
    const text = new ChatBar_class(buttons,new_button);
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

function ReloadOnclick(ReloadList,chats,chatroom){
    isReload = true;
    //리롤 버튼 누른후 리롤이 완료될때 event 실행
    ChatReload(()=>{
        isReload = false;
        /*
        리롤전 답변을 html 통짜로 저장후 기록 해둠 (내용포함) 
        그 후 기존 이벤트 리스너가 들어있는 bottom 만 남겨놓고 전부 삭제
        */
        ReloadList[ReloadList.length] = [chats.item(chats.length - 3).cloneNode(true),chatroom.getMessages().messages[0]];
        let now = chats.item(chats.length - 3) as HTMLElement;
        let buttonTabs = now.getElementsByClassName(env.ChatBottomClass).item(1);
        buttonTabs.childNodes.item(2).addEventListener('click',()=>{
            ReloadOnclick(ReloadList,chats,chatroom);
        })
        for (let index = 0; index < ReloadList.length; index++) {
            let button = buttonTabs.childNodes.item(2).cloneNode(true)
            button.textContent = `${index + 1}`;
            button.addEventListener('click',()=>{
                debug("reload button",3);
                babe.getMessage(chatroom.getMessages().messages[0]).set(ReloadList[index][1].content);
                for (const i of Array.from(now.childNodes[0].childNodes).slice(0,now.childNodes[0].childNodes.length - 1)) {
                    i.remove();
                }
                for (const i of Array.from(ReloadList[index][0].cloneNode(true).childNodes[0].childNodes).slice(0,ReloadList[index][0].childNodes[0].childNodes.length - 1).reverse()){
                    (now.childNodes.item(0) as HTMLDivElement).insertAdjacentElement("afterbegin",(i as Element));
                }
                now.childNodes[0].childNodes[now.childNodes[0].childNodes.length - 1].childNodes.item(0).remove();
                (now.childNodes[0].childNodes.item(now.childNodes[0].childNodes.length - 1) as HTMLDivElement).insertAdjacentElement("afterbegin",(ReloadList[index][0].cloneNode(true).childNodes[0].childNodes[ReloadList[index][0].childNodes[0].childNodes.length - 1].childNodes.item(0) as Element));
            })
            buttonTabs.appendChild(button);
        }
    })
}

function onload(chats): boolean{
    //현재 채팅방을 가져오기
    const chatroom = babe.getChatroom(getCharacterId(),getRoomId());
    if (chatroom == undefined) return true;
    //비교할 리롤 목록 리스트
    var ReloadList: Array<[Node,interfaces.message]> = [];
    //현재 focus 된 채팅 가져오기
    let chat = chats.item(chats.length - 3) as HTMLElement;
    //리롤 리스트에 focus 된 채팅 리롤 목록에 저장
    ReloadList[ReloadList.length] = [chat.cloneNode(true),chatroom.getMessages().messages[0]];
    //focus 된 채팅의 리롤 버튼에 Event 추가
    if (chat.getElementsByClassName(env.ChatBottomClass).item(1) != null){
        chat.getElementsByClassName(env.ChatBottomClass).item(1).childNodes.item(2).addEventListener('click',()=>{
            ReloadOnclick(ReloadList,chats,chatroom);
        });
        return true;
    }
    else {
        return false;
    }
}

export function ChatReceived(chats,event){
    /* 
    단계적으로 check를 증가 시키며 리롤 과정을 추적 리롤 중일경우 작동 X
    */
    let url = document.URL;
    let lastest = 0;
    let check = 0;
    let checkReceived = setInterval(()=>{
        if (document.URL != url){
            debug("checkReceived",6);
            clearInterval(checkReceived);
        }
        if (lastest != 0){
            if(lastest != chats.length && check == 0 && isReload == false){
                check++;
            }
            else if(lastest != chats.length && check == 1 && isReload == false){
                event(chats);
                check = 0;
            }
            else if(lastest > chats.length){
                check = 0;
            }
        }
        lastest = chats.length;
    })
}
export function chatroom(chatroomMenus: interfaces.chatroomMenu_class): void{
    //채팅방의 채팅바 선택
    const chatbar = document.getElementsByTagName("textarea").item(0) as HTMLTextAreaElement;
    if(chatbar != null){
        // 다양한 문제로 단축키 기능 제거
        /*
        //기존 버튼이 없을시
        if (parent(chatbar,2).childNodes.item(2).childNodes.length < 4){
            //단축버튼 기능
            sumButton(chatbar);
        }
        */
        //채팅 로드가 완료 되었을시
        ChatOnload((chats)=>{
            if (babe.getChatroom(getCharacterId(),getRoomId()) != undefined){
                let checkOnload = setInterval(()=>{
                    if (onload(chats)){
                        debug("checkOnload inital",6);
                        clearInterval(checkOnload);
                    }
                })
            }
            ChatReceived(chats,()=>{
                let checkOnload = setInterval(()=>{
                    if (onload(chats)){
                        debug("checkOnload Received",6);
                        clearInterval(checkOnload);
                    }
                })
            })
        });
    }
    let apply_chatMenu = setInterval(()=>{
        if (document.URL.includes('character') && document.URL.split("/").length > 6){
            const ChatSaveMenu = document.getElementById(env.ChatSaveMenuId) as HTMLDivElement;
            if (ChatSaveMenu != null){
                console.log("event");
                //챗룸 메뉴 추가 및 적용
                chatroomMenus.addMenu(env.MemoryAfterburner_name,env.MemoryAfterburner_frontHtml, MemoryAfterburner_Modal);
                chatroomMenus.apply(ChatSaveMenu);
            }
        }
        else {
            debug("apply_chatMenu",6);
            clearInterval(apply_chatMenu);
        }
    })
}