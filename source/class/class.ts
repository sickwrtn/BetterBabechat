import * as env from "../.env/env";
import * as interfaces from "../interface/interfaces";
import { debug } from "../tools/debug";
import { getParams } from "../tools/functions";
import { babe_api_class } from "../tools/sdk";

const babe = new babe_api_class();

export class ChatBar_class implements interfaces.ChatBar_class{
    button: Array<[HTMLButtonElement,string?]>;
    Chatbar: HTMLDivElement;
    struct: HTMLButtonElement; 
    constructor(Chatbar: HTMLDivElement,struct: HTMLButtonElement){
        this.button = [];
        this.Chatbar = Chatbar;
        this.struct = struct;
        const new_plus_button = struct.cloneNode(true) as HTMLButtonElement;
        const new_plus_button_svg = new_plus_button.childNodes[0].childNodes[0].childNodes.item(0) as HTMLDivElement;
        new_plus_button_svg.setAttribute("d",env.PlusButton_svg_d);
        this.Chatbar.insertAdjacentElement("afterbegin",new_plus_button);
        const new_minus_button = struct.cloneNode(true) as HTMLButtonElement;
        const new_minus_button_svg = new_minus_button.childNodes[0].childNodes[0].childNodes.item(0) as HTMLDivElement;
        new_minus_button_svg.setAttribute("d",env.MinusButton_svg_d);
        this.Chatbar.insertAdjacentElement("afterbegin",new_minus_button);
        this.button[this.button.length] = [new_plus_button];
        this.button[this.button.length] = [new_minus_button];
    }
    add(content: string, event: interfaces.ChatBarEvenListener , savedText:string): void{
        const new_button = this.struct.cloneNode(true) as HTMLButtonElement;
        const new_button_svg = new_button.childNodes.item(0) as HTMLDivElement;
        new_button_svg.removeAttribute("d");
        new_button_svg.style.color = "rgb(221,221,221)";
        new_button_svg.style.fontSize = "20px";
        new_button_svg.innerHTML = content;
        new_button.id = String(this.button.length - 1);
        new_button.addEventListener('click',() => event(new_button));
        this.Chatbar.insertBefore(new_button,this.button[0][0]);
        this.button.splice(1,0,[new_button,savedText]);
    }
    pop(): void{
        this.button[1][0].remove();
        this.button.splice(1,1);
    }
    setPlus(event:EventListener): void{
        this.button[0][0].addEventListener('click',event);
    }
    setMinus(event:EventListener): void{
        this.button[this.button.length - 1][0].addEventListener('click',event);
    }
}

export class dropdown_class implements interfaces.dropdown_class{
    item: Array<[string,interfaces.dropdownEvent]>
    constructor(){
        this.item = [];
    }
    addDropdown(name: string,event: interfaces.dropdownEvent): void{
        this.item[this.item.length] = [name,event];
    }
    apply(dropdownElement,characterList: Array<boolean>): void{
        for (const item of this.item) {
            const new_dropdown = dropdownElement.childNodes.item(0).cloneNode(true);
            const new_dropdown_space = dropdownElement.childNodes.item(1).cloneNode(true);
            new_dropdown.textContent = item[0];
            new_dropdown.addEventListener('click',()=>{
                debug("copy_dropdown",3);
                for (let i = 0; i < characterList.length; i++) {
                    if (characterList[i]){
                        const character = babe.getMyCharacter(babe.getMyCharacters(getParams())[i].characterId);
                        item[1](character);
                    }
                }
            })
            dropdownElement.appendChild(new_dropdown_space);
            dropdownElement.appendChild(new_dropdown);
        }
    }
}

export class chatroomMenu_class implements interfaces.chatroomMenu_class{
    item : Array<[string,string,EventListener]>;
    constructor(){
        this.item = [];
    }
    addMenu(name: string,html: string,event: EventListener): void{
        this.item.push([name,html,event]);
    }
    apply(ChatSaveMenu: HTMLDivElement): void{
        for (const item of this.item) {
            const new_Menu = ChatSaveMenu.childNodes.item(0).cloneNode(true) as HTMLButtonElement;
            if (ChatSaveMenu.childNodes.length == 2){
                new_Menu.innerHTML = item[1] + item[0];
                new_Menu.addEventListener('click',item[2]);
                ChatSaveMenu.appendChild(new_Menu);
            }
        }
    }
}