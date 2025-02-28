import * as interfaces from "./interface/interfaces";
import { chatroom } from "./core/chatroom";
import { myCharacter } from "./core/myCharacter";

export function main(dropdown: interfaces.dropdown_class){
    var lastest = "";
    setInterval(()=>{
        if (document.URL != lastest){
            //what the fuck?
            if (document.URL.includes("character") && document.URL.split("/").length > 6 && !document.URL.includes("edit") && !document.URL.includes("profile")){
                chatroom();
            }
            if (document.URL.includes("character") && document.URL.includes("my")){
                myCharacter(dropdown);
            }
            console.log(`${lastest} -> ${document.URL}`);
        }
        lastest = document.URL;
    })
}