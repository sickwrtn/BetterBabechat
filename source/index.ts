import { chatroom } from "./core/chatroom";

var lastest = "";
setInterval(()=>{
    if (document.URL != lastest){
        if (document.URL.includes("character") && document.URL.includes("chat")){
            chatroom();
        }
        console.log(`${lastest} -> ${document.URL}`);
    }
    lastest = document.URL;
})