(()=>{"use strict";var e={24:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.debug=function(e,t){void 0===t&&(t=null),0==t?console.log("[FAST WRTN][DEBUG](function) ".concat(e," loaded")):1==t?console.log("[FAST WRTN][DEBUG](body value) ".concat(e," loaded")):2==t?console.log("[FAST WRTN][DEBUG](request) ".concat(e," loaded")):3==t?console.log("[FAST WRTN][DEBUG](event) ".concat(e," evented")):4==t?console.log("[FAST WRTN][DEBUG](for) ".concat(e," completed")):5==t?console.log("[FAST WRTN][DEBUG](add) ".concat(e," added")):console.log("[FAST WRTN][DEBUG] ".concat(e))}},82:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.simulation_prompt=t.focus_on_important_cases_prompt=t.one_by_one_character_prompt=t.MemoryAfterburner_modalHtml=t.MemoryAfterburner_frontHtml=t.MinusButton_svg_d=t.PlusButton_svg_d=t.ChatSaveMenuClass=t.local_Gemini_api_key=t.token_key=t.gemini_api_url=t.babe_api_url2=t.babe_api_url=t.sendLimit=void 0,t.sendLimit=2e3,t.babe_api_url="https://api.babechatapi.com",t.babe_api_url2="https://babechatapi.com",t.gemini_api_url="https://generativelanguage.googleapis.com",t.token_key="bc__session",t.local_Gemini_api_key="Gemini Api Key",t.ChatSaveMenuClass="grid grid-cols-2",t.PlusButton_svg_d="M 524 250 c 0 17.7 -8 32 -32 32 H 317 v 176 c 0 17.7 -14.3 32 -32 32 s -32 -14.3 -32 -32 V 284 H 64 c -17.7 0 -32 -14.3 -32 -32 s 14.3 -32 32 -32 h 189 V 64 c 0 -17.7 14.3 -32 32 -32 s 32 14.3 32 32 v 157 h 176 c 24 1 31 13 31 28 z",t.MinusButton_svg_d="M528 256c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h416c17.7 0 32 14.3 32 32z",t.MemoryAfterburner_frontHtml="<img alt='text' fetchpriority='high' width='30' height='30' decoding='async' data-nimg='1' class='mr-2' src='https://raw.githubusercontent.com/sickwrtn/BetterBabechat/refs/heads/main/MemoryAfterburnerIcon.png' style='color: transparent;'>",t.MemoryAfterburner_modalHtml="<div style='position: fixed;inset: 0px;z-index: 49;background-color: rgba(0,0,0,0.43);cursor: default;'><div style='align-items: flex-end; width: 100%; height: 100%; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; position: relative;'><div width='100%' display='flex' style='width: 600px;max-width: calc(100% - 40px);background-color: #242321;max-height: 90dvh;overflow-y: auto;z-index: 15;border-width: initial;border-style: none;border-image: initial;border-color: #42413d;border-radius: 12px;box-shadow: none;display: flex;flex-direction: column;'><div display='flex' style='flex-direction: column;-webkit-box-align: center;align-items: center;text-align: center;'><div display='flex' width='100%' style=' display: flex; flex-direction: row; padding: 20px 24px; -webkit-box-align: center; align-items: center; -webkit-box-pack: justify; justify-content: space-between; width: 100%; border-bottom: 1px solid rgb(97, 96, 90);'><p color='$color_text_primary' style='color: #f0efeb;font-size: 20px;line-height: 100%;font-weight: 600;'>Afterburning Memory</p><svg width='26' height='26' viewBox='0 0 24 25' fill='currentColor' xmlns='http://www.w3.org/2000/svg' color='#a8a69dff' cursor='pointer' id='W_x'><path fill-rule='evenodd' clip-rule='evenodd' d='M12 11.0228L7.05026 6.07305L5.63604 7.48726L10.5858 12.437L5.63604 17.3868L7.05026 18.801L12 13.8512L16.9498 18.801L18.364 17.3868L13.4142 12.437L18.364 7.48726L16.9498 6.07305L12 11.0228Z' fill='currentColor'></path></svg></div><div display='flex' width='100%' style=' display: flex; flex-direction: column; padding: 20px; width: 100%; gap: 12px;'><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'><p color='$color_text_primary' style='color: #f0efeb;text-align: left;font-size: 16px;line-height: 100%;font-weight: 600;'>Gemini Api Key</p><div style=' color: var(--color_text_primary); text-align: left; font-size: 16px; line-height: 100%; font-weight: 600;'><select name='languages' id='lang' style=' width: 150px; height: 35px; background-size: 20px; padding: 5px 30px 5px 10px; border-radius: 4px; outline: 0 none; background-color: #242321; color: white;'><option value='0'>1:1 캐릭터</option><option value='1'>시뮬레이션</option><option value='2'>주요사건 위주</option><option value='3'>커스텀</option></select></div></div><textarea height='26px' color='$color_text_primary' placeholder='Gemini Api Key를 넣어주세요' rows='5' wrap='hard' style='color: #f0efeb;height: 26px;border-radius: 5px;border-width: 1px;border-style: solid;border-image: initial;border-color: #42413d;background-color: #1a1918;padding: 11px 16px;min-height: 50px;max-height: 386px;font-size: 16px;line-height: 160%;font-weight: 500;resize: none;outline: none;caret-color: #f95939;' class='css-wmzh35' id='W_name'></textarea><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'></div></div><div display='flex' width='100%' style=' display: flex; flex-direction: column; padding: 20px; width: 100%; gap: 12px;'><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'><p color='$color_text_primary' style='color: #f0efeb;text-align: left;font-size: 16px;line-height: 100%;font-weight: 600;'>Model</p></div><textarea height='26px' color='$color_text_primary' placeholder='사용하실 모델을 넣어주세요.' rows='5' wrap='hard' style='color: #f0efeb;height: 26px;border-radius: 5px;border-width: 1px;border-style: solid;border-image: initial;border-color: #42413d;background-color: #1a1918;padding: 11px 16px;min-height: 50px;max-height: 386px;font-size: 16px;line-height: 160%;font-weight: 500;resize: none;outline: none;caret-color: #f95939;' class='css-wmzh35' id='W_name'></textarea><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'></div></div><div display='flex' width='100%' style=' display: flex; flex-direction: column; padding: 20px; width: 250px; gap: 12px;'><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'><p color='$color_text_primary' style='color: #f0efeb;text-align: left;font-size: 16px;line-height: 100%;font-weight: 600;'>가져올 턴수 (max:50 min:0)</p></div><textarea height='26px' color='$color_text_primary' placeholder='기억 턴수' rows='5' wrap='hard' style='color: #f0efeb;height: 26px;border-radius: 5px;border-width: 1px;border-style: solid;border-image: initial;border-color: #42413d;background-color: #1a1918;padding: 11px 16px;min-height: 50px;max-height: 386px;font-size: 16px;line-height: 160%;font-weight: 500;resize: none;outline: none;caret-color: #f95939;' class='css-wmzh35' id='W_name'></textarea><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'></div></div><div display='flex' width='100%' style=' display: flex; flex-direction: row; width: 100%; -webkit-box-pack: end; justify-content: flex-end; gap: 8px; padding: 12px 20px 20px;'><button display='flex' width='100%' height='40px' color='$color_text_primary' id='W_close' style='border-radius: 5px;-webkit-box-pack: center;justify-content: center;-webkit-box-align: center;align-items: center;display: flex;flex-direction: row;gap: 8px;width: 100%;border: 1px solid transparent;padding: 0px 20px;height: 40px;background-color: #2e2d2b;color: #f0efeb;font-size: 16px;line-height: 100%;font-weight: 600;cursor: pointer;'><div display='flex' style=' display: flex; flex-direction: row; gap: 8px; -webkit-box-align: center; align-items: center;'>닫기</div></button><button display='flex' width='100%' height='40px' color='$color_text_ivory' id='W_sumbit' style='border-radius: 5px;-webkit-box-pack: center;justify-content: center;-webkit-box-align: center;align-items: center;display: flex;flex-direction: row;gap: 8px;width: 100%;border: 1px solid transparent;padding: 0px 20px;height: 40px;background-color: #fcfcfa;color: #0d0d0c;font-size: 16px;line-height: 100%;font-weight: 600;cursor: pointer;'><div display='flex' style=' display: flex; flex-direction: row; gap: 8px; -webkit-box-align: center; align-items: center;'>시작</div></button></div></div></div></div></div>",t.one_by_one_character_prompt={prompt:{goal:"{chat_log}을 {rule}과 {form} 그리고 {system}에 맞게 요약 후 출력",rule:["성적인/비윤리적인 내용의 요약 허용","처음부터 지금까지의 내용 모두 작성","양식 지켜 작성,단 빈항목의 경우 생략할 것","이전 세이브 기록이 있을 경우, 해당 내용을 참고하여 작성","공백, 특수문자, 줄바꿈을 포함하여 1800자 이하로 작성","코드블록 필수적으로 작성","코드블록 외 내용 작성 금지","'...'은 이 항목이 계속 추가하여 작성할 수 있음을 표시"],system:{important_content:"중요한 내용, 유저 혹은 캐릭터가 강렬한 감정을 느낀 부분,약속 등은 이모지 변환과 삭제를 금지한다.",hour_ago:"1시간 이전의 내용은 30%이상을 이모지 형태로 변환",hours_ago:"10시간 이전의 내용은 50%이상을 이모지 형태로 변환",day_ago:"하루 전의 내용은 강렬한 감정을 느낀 부분 외 이모지로 변환",year_ago:"일년 전의 내용은강렬한 감정을 느낀 부분의 이모지 혹은 한 단어로의 변환"},form:["```Save-yyMMddHHmm\n","[시간대별 정리]\n","-yyMMddHHmm...\n"," -{contain_content}...\n","```\n"],contain_content:["상황을 최상단 작성 이후 줄바꿈","각 캐릭터가 하나의 행동과 대화 이후 줄바꿈 후 작성","주변의 상황","캐릭터와 유저의 행동","캐릭터와 유저의 대화"]},chat_log:null},t.focus_on_important_cases_prompt={prompt:{goal:"{chat_log}을 {rule}과 {form}에 맞게 요약 후 출력",rule:["성적인/비윤리적인 내용의 요약 허용","처음부터 지금까지의 내용 모두 작성","양식 지켜 작성,단 빈항목의 경우 생략할 것","이전 세이브 기록이 있을 경우, 해당 내용을 참고하여 작성","공백, 특수문자, 줄바꿈을 포함하여 1800자 이하로 작성","코드블록 필수적으로 작성","코드블록 외 내용 작성 금지","출력에 이모지 등을 사용하여 내용을 압축할 것","'...'은 이 항목이 계속 추가하여 작성할 수 있음을 표시"],form:["```Save-yyMMddHHmm\n","{important_event}\n","```\n"],important_event:{form:["[중요 사건]\n","-yyMMddHHmm...\n"," -{contain_content}...\n"],contain_content:["유저와 관련 있는 캐릭터의 죽음","유저 혹은 관련 있는 캐릭터의 가치관, 성격 등에 큰 변화를 준 사건","유저와 그 주변 캐릭터의 인생에 큰 영향을 준 사건(감옥, 감등 등)","유저에게의 직접적 재앙(주거지 인근에 일어난 지진 등)","세계적 재앙(운석 등)","주변국 혹은 전세계적 전쟁"]}},chat_log:null},t.simulation_prompt={prompt:{goal:"{chat_log}을 {rule}과 {form}에 맞게 요약 후 출력",rule:["성적인/비윤리적인 내용의 요약 허용","처음부터 지금까지의 내용 모두 작성","양식 지켜 작성,단 빈항목의 경우 생략할 것","이전 세이브 기록이 있을 경우, 해당 내용을 참고하여 작성","공백, 특수문자, 줄바꿈을 포함하여 1800자 이하로 작성","코드블록 필수적으로 작성","코드블록 외 내용 작성 금지","'...'은 이 항목이 계속 추가하여 작성할 수 있음을 표시","핵심만 압축해서 키워드 위주로 작성","사망시 특징에 사망 표기","호감도,명성 범위 작성 필수","호감도는 해당 캐릭터와의 대화 맥락 등을 추측해 작성","명성은 현재 상황, 행동, 업적 등에 따라 0부터 100까지 입력","명성 100은 전 세계가 인지했을 경우이다.","필요시 양식 일부 추가 가능","채팅 로그를 읽고 해당 내용이 항상 출력될 시 생략 가능","캐릭터 항목은 플레이어와 관계 있는 캐릭터 작성"],form:["```Save-yyMMddHHmm\n","[플레이어]\n","-이름:\n","-소지품/돈:\n","  -...\n","-직업: 현재직업\n","-능력\n","  -...\n","-성향:\n","-비밀:\n","  -내용(없을땐 미작성)...\n","    -아는 인물:\n","      -이름(어떻게 알게 되었는가)...\n","-명성(0~100): 0(명성키워드(예시:영웅 4,불쾌 3,의심 3))\n","[캐릭터]\n","-이름...\n","  -나이:\n","  -직업:\n","  -종족:\n","  -특징(비밀X만):\n","    -...\n","  -능력:\n","    -능력명: 효과...\n","  -목표:\n","  -관계:\n","    -이름: 관계키워드(해당 캐릭터가 생각하는 상대에 대한 키워드(예시.친구,애증 등))...\n","  -호감도(캐릭터→player/-100~100): 0(해당 캐릭터가 생각하는 player에 대한 키워드(예시.친구,애증 등))\n","  -비밀:\n","    -플레이어가 아는 비밀의 내용(어떻게 알게 되었는가)...\n","[주요사건]\n","-세계관변화시킨사건만작성(주요집단 괴멸/역사에 남길 업적 달성 이상의 사건)...\n","```\n"]},chat_log:null}},137:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getAfetch=function(e){var t=new XMLHttpRequest;if(t.open("GET",e,!1),t.setRequestHeader("Authorization","Bearer ".concat((0,n.getCookie)(r.token_key))),t.send(),200!=t.status)return(0,i.debug)("api get 요청 실패 ".concat(e),2),JSON.parse(t.responseText);(0,i.debug)("GET ".concat(e),2);try{return JSON.parse(t.responseText)}catch(e){return null}},t.deleteAfetch=function(e){var t=new XMLHttpRequest;return t.open("DELETE",e,!1),t.setRequestHeader("Authorization","Bearer ".concat((0,n.getCookie)(r.token_key))),t.send(),200==t.status?((0,i.debug)("DELETE ".concat(e),2),!0):((0,i.debug)("api delete 요청 실패 ".concat(e),2),!1)},t.postAfetch=function(e,t){var o=new XMLHttpRequest;return o.open("POST",e,!1),o.setRequestHeader("Authorization","Bearer ".concat((0,n.getCookie)(r.token_key))),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t)),200==o.status?((0,i.debug)("POST ".concat(e),2),JSON.parse(o.responseText)):((0,i.debug)("api post 요청 실패 ".concat(e," | ").concat(JSON.stringify(t)),2),JSON.parse(o.responseText))},t.postAfetchNoJson=function(e,t){var o=new XMLHttpRequest;return o.open("POST",e,!1),o.setRequestHeader("Authorization","Bearer ".concat((0,n.getCookie)(r.token_key))),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t)),200==o.status?((0,i.debug)("POST ".concat(e),2),o.responseText):((0,i.debug)("api post 요청 실패 ".concat(e," | ").concat(JSON.stringify(t)),2),o.responseText)},t.out_postAfetch=function(e,t){var o=new XMLHttpRequest;return o.open("POST",e,!1),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t)),200==o.status?((0,i.debug)("POST ".concat(e),2),JSON.parse(o.responseText)):((0,i.debug)("api OUT post 요청 실패 ".concat(e," | ").concat(JSON.stringify(t)),2),null)},t.putAfetch=function(e,t){var o=new XMLHttpRequest;return o.open("PUT",e,!1),o.setRequestHeader("Authorization","Bearer ".concat((0,n.getCookie)(r.token_key))),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t)),200==o.status?((0,i.debug)("PUT ".concat(e),2),JSON.parse(o.responseText)):((0,i.debug)("api put 요청 실패 ".concat(e," | ").concat(JSON.stringify(t)),2),JSON.parse(o.responseText))},t.patchAfetch=function(e,t){var o=new XMLHttpRequest;return o.open("PATCH",e,!1),o.setRequestHeader("Authorization","Bearer ".concat((0,n.getCookie)(r.token_key))),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t)),200==o.status?((0,i.debug)("PATCH ".concat(e),2),JSON.parse(o.responseText)):((0,i.debug)("api patch 요청 실패 ".concat(e," | ").concat(JSON.stringify(t)),2),JSON.parse(o.responseText))};var n=o(962),i=o(24),r=o(82)},552:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChatBar=void 0;var n=o(82),i=function(){function e(e,t){this.button=[],this.Chatbar=e,this.struct=t;var o=t.cloneNode(!0);o.childNodes[0].childNodes[0].childNodes.item(0).setAttribute("d",n.PlusButton_svg_d),this.Chatbar.insertAdjacentElement("afterbegin",o);var i=t.cloneNode(!0);i.childNodes[0].childNodes[0].childNodes.item(0).setAttribute("d",n.MinusButton_svg_d),this.Chatbar.insertAdjacentElement("afterbegin",i),this.button[this.button.length]=[o],this.button[this.button.length]=[i]}return e.prototype.add=function(e,t,o){var n=this.struct.cloneNode(!0),i=n.childNodes.item(0);i.removeAttribute("d"),i.style.color="rgb(221,221,221)",i.style.fontSize="20px",i.innerHTML=e,n.id=String(this.button.length-1),n.addEventListener("click",(function(){return t(n)})),this.Chatbar.insertBefore(n,this.button[0][0]),this.button.splice(1,0,[n,o])},e.prototype.pop=function(){this.button[1][0].remove(),this.button.splice(1,1)},e.prototype.setPlus=function(e){this.button[0][0].addEventListener("click",e)},e.prototype.setMinus=function(e){this.button[this.button.length-1][0].addEventListener("click",e)},e}();t.ChatBar=i},839:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.babe_api_class=t.chatroom_class=t.message_class=void 0;var n=o(137),i=o(82),r=function(){function e(e){this.data=e,console.log(e)}return e.prototype.set=function(e){return n.putAfetch(i.babe_api_url+"/ko/api/edit-message/".concat(this.data.id),{message:e})},e}();t.message_class=r;var a=function(){function e(e){this.data=e}return e.prototype.getMessages=function(){return n.getAfetch(i.babe_api_url+"/ko/api/messages/".concat(this.data.characterId,"/false/").concat(this.data.roomId))},e.prototype.send=function(e,t,o){var r={isMultipleImage:!0,model:t,proChatCount:o,prompt:e,roomId:String(this.data.roomId)};return n.postAfetchNoJson(i.babe_api_url2+"/ko/api/u/message/".concat(this.data.characterId),r)},e}();t.chatroom_class=a;var l=function(){function e(){}return e.prototype.getUser=function(){return n.getAfetch(i.babe_api_url+"/ko/api/user")},e.prototype.getPersonas=function(){return n.getAfetch(i.babe_api_url+"/ko/api/persona")},e.prototype.getActivePersona=function(){for(var e=0,t=this.getPersonas();e<t.length;e++){var o=t[e];if(o.isActive)return o}var n=this.getUser();return{id:0,userId:"",gender:n.gender,dob:n.dob,nickname:n.nickname,introduction:n.introduction,isActive:!0,createdAt:"",updatedAt:""}},e.prototype.getChatrooms=function(){return n.getAfetch(i.babe_api_url+"/ko/api/messages")},e.prototype.getChatroom=function(e,t){for(var o=0,n=this.getChatrooms();o<n.length;o++){var i=n[o];if(i.characterId==e&&i.roomId==Number(t))return new a(i)}},e.prototype.getMessage=function(e){return new r(e)},e}();t.babe_api_class=l},962:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=function(e){for(var t=Date.now()+e;Date.now()<t;);},t.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},t.getCharacterId=function(){return document.URL.split("/")[6]},t.getRoomId=function(){try{return document.URL.split("/")[7].split("?")[1].split("=")[1]}catch(e){return"0"}},t.getClipboardTextModern=function(){return(0,n.debug)("getClipboardTextModern",0),navigator.clipboard.readText()},t.copyToClipboard=function(e){navigator.clipboard.writeText(e),(0,n.debug)("copyToClipboard",0)},t.parent=function(e,t){for(var o=e,n=0;n<t;n++)o=o.parentNode;return o};var n=o(24)},994:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.chatroom=function(){var e=document.getElementsByTagName("textarea").item(0);if(null!=e){var t=[e.className,e.value];setInterval((function(){t[0]!=e.className&&""!=t[1]&&""!=e.value&&(e.value=t[1]),t=[e.className,e.value]})),window.addEventListener("keydown",(function(t){return function(e,t,o){c[e.keyCode]=!0;for(var n=0;n<58;n++)c[17]&&c[49+n]&&(t.value+=o.button[o.button.length-2-n][1],e.preventDefault())}(t,e,l)}),!1),window.addEventListener("keyup",(function(e){return function(e){c[e.keyCode]=!1}(e)}),!1);var o=(0,n.parent)(e,2).childNodes.item(2),a=o.childNodes.item(0).cloneNode(!0),l=new i.ChatBar(o,a);l.setPlus((function(){if(""==e.value)return alert("단축내용을 지정해주세요");l.add(String(l.button.length-1),(function(t){e.value+=l.button[l.button.length-1-Number(t.id)][1],e.textContent=e.value}),e.value)})),l.setMinus((function(){if(2==l.button.length)return alert("삭제할 단축버튼이 없습니다.");l.pop()}))}setInterval((function(){if(document.URL.includes("character")&&document.URL.includes("chat")){var e=document.getElementsByClassName(r.ChatSaveMenuClass).item(0);if(null!=e){var t=e.childNodes.item(0).cloneNode(!0);2==e.childNodes.length&&(t.innerHTML=r.MemoryAfterburner_frontHtml+"기억력 보강",t.addEventListener("click",d),e.appendChild(t))}}}))};var n=o(962),i=o(552),r=o(82),a=o(24),l=o(137),s=new(o(839).babe_api_class),c=[];function d(){var e=document.createElement("div");e.innerHTML=r.MemoryAfterburner_modalHtml;var t=e.childNodes.item(0),o=t.childNodes[0].childNodes[0].childNodes.item(0),i=o.childNodes[1].childNodes[0].childNodes[1].childNodes.item(0),c=o.childNodes[1].childNodes.item(1),d=o.childNodes[2].childNodes.item(1),p=o.childNodes[3].childNodes.item(1),u=o.childNodes[4].childNodes.item(0),g=o.childNodes[0].childNodes.item(1),h=o.childNodes[4].childNodes.item(1);if(g.addEventListener("click",(function(){return t.remove()})),u.addEventListener("click",(function(){return t.remove()})),null!=JSON.parse(localStorage.getItem(r.local_Gemini_api_key)).key&&(c.value=JSON.parse(localStorage.getItem(r.local_Gemini_api_key)).key),null!=JSON.parse(localStorage.getItem(r.local_Gemini_api_key)).model&&(d.value=JSON.parse(localStorage.getItem(r.local_Gemini_api_key)).model),null!=JSON.parse(localStorage.getItem(r.local_Gemini_api_key)).limit&&(p.value=JSON.parse(localStorage.getItem(r.local_Gemini_api_key)).limit),null!=JSON.parse(localStorage.getItem(r.local_Gemini_api_key)).select)for(var m=i.options,f=0;f<m.length;f++)m[f].value==JSON.parse(localStorage.getItem(r.local_Gemini_api_key)).select&&(m[f].selected=!0);h.addEventListener("click",(function(){if(Number(p.value)>50||Number(p.value)<0)return alert("limit는 0 이상 50 이하여야 합니다."),!0;alert("시간이 많이 소요되니 당황하시지말고 기다려 주세요... (확인을 누르셔야 진행됩니다.)"),i.value,localStorage.setItem(r.local_Gemini_api_key,JSON.stringify({key:c.value,model:d.value,limit:p.value,select:i.value,prompt:null})),(0,a.debug)("limited ".concat(p.value));var e=s.getChatroom((0,n.getCharacterId)(),(0,n.getRoomId)()).getMessages();try{var t=s.getActivePersona().nickname}catch(e){return alert("대표프로필을 설정해주세요"),!0}if((0,a.debug)("character_profiles",4),"0"==i.value){var o=r.one_by_one_character_prompt;(0,a.debug)("selected 1 : 1 캐릭터챗")}else"1"==i.value?(o=r.simulation_prompt,(0,a.debug)("selected 시뮬레이션")):"2"==i.value&&(o=r.focus_on_important_cases_prompt,(0,a.debug)("selected 주요사건 위주"));for(var u={content:[]},g=0,h=e.messages.slice(0,2*Number(p.value));g<h.length;g++){var m=h[g];"user"==m.role?u.content[u.content.length]={message:m.content,role:"user",username:t}:"assistant"==m.role&&(u.content[u.content.length]={message:m.content,role:"assistant"})}if((0,a.debug)("chatlog",4),"3"!=i.value){o.chat_log=u.content;var f=JSON.stringify(o)}else f=o+"[대화내역]\n".concat(JSON.stringify(u));var x=l.out_postAfetch(r.gemini_api_url+"/v1beta/models/".concat(d.value,":generateContent?key=").concat(c.value),{contents:{parts:[{text:f}]}}).candidates[0].content.parts[0].text;if((0,a.debug)("gemini compeleted"),x.length>r.sendLimit){if(!confirm("요약본이 너무 깁니다. 요약본을 나눠서 전송하겠습니다. 진행하시겠습니까?"))return!0;for(var b=Math.ceil(x.length/r.sendLimit),y=0;y<b;y++)if(y!=b-1?((_=s.getChatroom((0,n.getCharacterId)(),(0,n.getRoomId)())).send("","free",0),(0,n.sleep)(1e3),console.log(_.getMessages()),s.getMessage(_.getMessages().messages[0]).set(x.substring(r.sendLimit*y,r.sendLimit*(y+1)))):((_=s.getChatroom((0,n.getCharacterId)(),(0,n.getRoomId)())).send("","free",0),(0,n.sleep)(1e3),console.log(_.getMessages()),s.getMessage(_.getMessages().messages[0]).set(x.substring(r.sendLimit*y))),!confirm("메시지를 나눠서 보내는중... (".concat(y+1,"/").concat(b,")")))return!0;(0,a.debug)("result DP",4)}else{var _;(_=s.getChatroom((0,n.getCharacterId)(),(0,n.getRoomId)())).send("","free",0),(0,n.sleep)(1e3),console.log(_.getMessages()),s.getMessage(_.getMessages().messages[0]).set(x)}(0,a.debug)("wrtn.ai message sended"),(0,a.debug)("Afterburning completed"),alert("Afterburning complete!"),document.location.reload(),(0,a.debug)("AfterMemory_func",0)})),document.body.appendChild(e.childNodes.item(0))}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(()=>{var e=o(994),t=o(82);null==localStorage.getItem(t.local_Gemini_api_key)&&localStorage.setItem(t.local_Gemini_api_key,JSON.stringify({key:"AIzaSyD5p_Oiva9nIq7e23rk-Zt7vGpDdfkaDVc",model:"gemini-2.0-flash",limit:20,select:null,prompt:null}));var n="";setInterval((function(){document.URL!=n&&(document.URL.includes("character")&&document.URL.includes("chat")&&(0,e.chatroom)(),console.log("".concat(n," -> ").concat(document.URL))),n=document.URL}))})()})();