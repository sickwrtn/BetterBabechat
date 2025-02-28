import { copyToClipboard, getClipboardTextModern } from "./tools/functions";
import * as env from "./.env/env";
import { dropdown_class } from "./class/class";
import { main } from "./main";

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

const dropdown = new dropdown_class();

dropdown.addDropdown(env.copy,(character)=>{
    copyToClipboard(JSON.stringify(character.data));
    alert("복사되었습니다!");
})

dropdown.addDropdown(env.paste,(character)=>{
    getClipboardTextModern().then(data => {
        character.set(JSON.parse(data));
    })
    alert("붙혀넣기되었습니다!");
    window.location.reload();
})

dropdown.addDropdown(env.publish,(character)=>{
    let answord = prompt("공개 범위를 설정해주세요. (공개,비공개,링크공개)");
    if (answord == "공개"){
        character.publish("public");
        alert("캐릭터 공개 성공! (새로고침 후 적용됩니다.)");
    }
    else if (answord == "비공개"){
        character.publish("private");
        alert("캐릭터 비공개 성공! (새로고침 후 적용됩니다.)");
    }
    else if (answord == "링크 공개"){
        character.publish("link");
        alert("캐릭터 링크 공개 성공! (새로고침 후 적용됩니다.)");
    }
    else if (answord == "링크공개"){
        character.publish("link");
        alert("캐릭터 링크 공개 성공! (새로고침 후 적용됩니다.)");
    }
    else{
        alert("공개,비공개,링크 공개 셋중 하나만 선택 가능합니다.");
    }
    window.location.reload();
    character.publish
    window.location.reload();
})

window.onload = ()=>main(dropdown);