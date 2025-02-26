import * as env from "../.env/env";
import { getParams } from "../tools/functions";
import { babe_api_class } from "../tools/sdk";
const babe = new babe_api_class();
export function myCharacter(){
    var characterList: Array<boolean> = []
    setInterval(()=>{
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
        console.log(characterList);
        const dropdown = document.getElementsByClassName(env.DropDownClass).item(0); 
        if (dropdown != null && dropdown.childNodes.length == 3){
            const new_dropdown = dropdown.childNodes.item(0).cloneNode(true);
            const new_dropdown_space = dropdown.childNodes.item(1).cloneNode(true);
            new_dropdown.textContent = "복사";
            new_dropdown.addEventListener('click',()=>{
                for (let i = 0; i < characterList.length; i++) {
                    if (characterList[i]){
                        const test = babe.getMyCharacter(babe.getMyCharacters(getParams())[i].characterId);
                        console.log(test.data);
                    }
                }
            })
            dropdown.appendChild(new_dropdown_space);
            dropdown.appendChild(new_dropdown);
        }
    },500)
}