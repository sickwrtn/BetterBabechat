import { chatroom } from "./core/chatroom";
import { babe_api_class } from "./tools/sdk";
import { getCookie } from "./tools/functions";
import * as env from "./.env/env";

//Gemini api key 스토리지 초기설정
if (localStorage.getItem(env.local_Gemini_api_key) == null){
    localStorage.setItem(env.local_Gemini_api_key,JSON.stringify({
        key : "AIzaSyD5p_Oiva9nIq7e23rk-Zt7vGpDdfkaDVc",
        model : "gemini-2.0-flash",
        limit: 20,
        select: null,
        prompt: null
    }))
}

var l = [1,2,3,4,5,6,7,8,9];
console.log(l[length]);

window.onload = ()=>{
    var lastest = "";
    setInterval(()=>{
        if (document.URL != lastest){
            if (document.URL.includes("character") && document.URL.split("/").length > 6){
                chatroom();
            }
            console.log(`${lastest} -> ${document.URL}`);
        }
        lastest = document.URL;
    })
}