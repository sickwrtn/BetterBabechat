import { parent } from "../tools/functions";
import { ChatBar } from "../class/class";

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

export function chatroom(){
    const chatbar = document.getElementsByTagName("textarea").item(0);
    if(chatbar != null){
        //textarea real-time apply
        let lastest = [chatbar.className,chatbar.value];
        setInterval(()=>{
            if (lastest[0] != chatbar.className){
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
}