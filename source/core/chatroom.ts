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
        //단축키 이벤트
        window.addEventListener("keydown", (e) => keysPressed(e,chatbar,text), false);
        window.addEventListener("keyup", (e)=>keysReleased(e), false);
        //단축버튼 추가
        const buttons = parent(chatbar,2).childNodes.item(2) as HTMLDivElement;
        const new_button = buttons.childNodes.item(0).cloneNode(true) as HTMLButtonElement;
        const text = new ChatBar(buttons,new_button);
        text.setPlus(() => {
            text.add(String(text.button.length - 1),(button)=>{
                chatbar.value += text.button[(text.button.length - 1) - Number(button.id)][1];
            },chatbar.value);
        })
        text.setMinus(() => {
            text.pop();
        })
    }
}