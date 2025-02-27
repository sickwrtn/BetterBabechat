import * as env from "../.env/env";
import { debug } from "../tools/debug";
import { copyToClipboard, getClipboardTextModern, getParams } from "../tools/functions";
import { babe_api_class } from "../tools/sdk";
const babe = new babe_api_class();
export function myCharacter(){
    var characterList: Array<boolean> = []
    let dropdown = setInterval(()=>{
        if (document.URL.includes("character") && document.URL.includes("my")){
            let j = 0;
            for (const i of Array.from(document.getElementsByClassName(env.MyCharacterClass))) {
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
            const dropdown = document.getElementsByClassName(env.DropDownClass).item(0); 
            if (dropdown != null && dropdown.childNodes.length == 3){
                const copy_dropdown = dropdown.childNodes.item(0).cloneNode(true);
                const copy_dropdown_space = dropdown.childNodes.item(1).cloneNode(true);
                copy_dropdown.textContent = env.copy;
                copy_dropdown.addEventListener('click',()=>{
                    debug("copy_dropdown",3);
                    for (let i = 0; i < characterList.length; i++) {
                        if (characterList[i]){
                            const character = babe.getMyCharacter(babe.getMyCharacters(getParams())[i].characterId);
                            copyToClipboard(JSON.stringify(character.data));
                        }
                    }
                    alert("복사되었습니다!");
                })
                const paste_dropdown = dropdown.childNodes.item(0).cloneNode(true);
                const paste_dropdown_space = dropdown.childNodes.item(1).cloneNode(true);
                paste_dropdown.textContent = env.paste;
                paste_dropdown.addEventListener('click',()=>{
                    debug("paste_dropdown",3);
                    for (let i = 0; i < characterList.length; i++) {
                        if (characterList[i]){
                            getClipboardTextModern().then(data => {
                                const chararacter = babe.getMyCharacter(babe.getMyCharacters(getParams())[i].characterId);
                                chararacter.set(JSON.parse(data));
                            })
                        }
                    }
                    alert("붙여넣기되었습니다!");
                    window.location.reload();
                })
                dropdown.appendChild(copy_dropdown_space);
                dropdown.appendChild(copy_dropdown);
                dropdown.appendChild(paste_dropdown_space)
                dropdown.appendChild(paste_dropdown);
            }
        }
        else{
            debug("dropdown",6)
            clearInterval(dropdown);
        }
    })
}