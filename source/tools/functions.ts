import {debug} from "./debug";
import * as env from "../.env/env";
import * as interfaces from "../interface/interfaces";

export function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}

//쿠키 가져오는 함수
export function getCookie(name): string | undefined {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function getCharacterId(): string{
    return document.URL.split("/")[6];
}

export function getRoomId(): string{
    try{
        return document.URL.split("/")[7].split("?")[1].split("=")[1];
    }
    catch{
        return "0";
    }
}

export function ChatOnload(event: interfaces.ChatOnloadEvent): void{
    var t = setInterval(()=>{
        let c = document.getElementById(env.MessageAreaId).childNodes.item(0);
        if (Number((c.childNodes.item(c.childNodes.length - 1) as HTMLDivElement).getAttribute("data-index")) == c.childNodes.length - 1){
            event(c.childNodes);
            clearInterval(t);
        }
    })
}

export function ChatOnloadNoStop(event: interfaces.ChatOnloadEvent): void{
    var t = setInterval(()=>{
        let c = document.getElementById(env.MessageAreaId).childNodes.item(0);
        if (Number((c.childNodes.item(c.childNodes.length - 1) as HTMLDivElement).getAttribute("data-index")) == c.childNodes.length - 1){
            event(c.childNodes,t);
        }
    });
}

export function ChatReload(event){
    let a = 0;
    ChatOnloadNoStop((chat,t)=>{
        if( a == 0){
            if (chat.item(chat.length - 3).childNodes[0].childNodes.length == 1){
                a++;
            }
        }
        if (a == 1){
            if (chat.item(chat.length - 3).childNodes[0].childNodes.length > 1){
                a++;
            }
        }
        if (a == 2){
            event();
            clearInterval(t);
        }
    })
}

// 클립보드의 텍스트를 가져오기
export function getClipboardTextModern(): Promise<string>{
    debug("getClipboardTextModern",0);
    return navigator.clipboard.readText(); // 붙여넣기
}

// 텍스트를 클립보드에 복사하기
export function copyToClipboard(text): void{
    navigator.clipboard.writeText(text); // 복사하기
    debug("copyToClipboard",0);
}


export function parent(element: any,index: number): HTMLElement{
    let result = element; 
    for (let i = 0; i < index; i++) {
        result = result.parentNode;
    }
    return result;
}