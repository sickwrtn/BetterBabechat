import * as env from "../.env/env";
import { debug } from "../tools/debug";
import { copyToClipboard, getClipboardTextModern, getParams } from "../tools/functions";
import { babe_api_class } from "../tools/sdk";
import * as interfaces from "../interface/interfaces"
const babe = new babe_api_class();
export function myCharacter(dropdown: interfaces.dropdown_class){
    var characterList: Array<boolean> = []
    let dropdown_inter = setInterval(()=>{
        if (document.URL.includes("character") && document.URL.includes("my")){
            let j = 0;
            for (const i of Array.from(document.querySelectorAll(`#${env.MyCharactersId}`))) {
                if (i.getAttribute("index") == null){
                    i.setAttribute("index",String(j));
                    characterList[j] = false;
                }
                if (i.getAttribute("data-state") == "open"){
                    characterList[j] = true;
                }
                else{
                    characterList[j] = false;
                }
                j++
            }
            const dropdownElement = document.getElementsByClassName(env.DropDownClass).item(0);
            if (dropdownElement != null && dropdownElement.childNodes.length == 3){
                dropdown.apply(dropdownElement,characterList);
            }
        }
        else{
            debug("dropdown_inter",6)
            clearInterval(dropdown_inter);
        }
    })
}