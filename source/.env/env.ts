


export const sendLimit = 2000;

export const babe_api_url = "https://api.babechatapi.com";
export const babe_api_url2 = "https://babechatapi.com";
export const gemini_api_url = "https://generativelanguage.googleapis.com";
export const token_key = "bc__session";
export const local_Gemini_api_key = "Gemini Api Key";

//class
export const ChatSaveMenuClass = "grid grid-cols-2";

//svg 코드
export const PlusButton_svg_d = "M 524 250 c 0 17.7 -8 32 -32 32 H 317 v 176 c 0 17.7 -14.3 32 -32 32 s -32 -14.3 -32 -32 V 284 H 64 c -17.7 0 -32 -14.3 -32 -32 s 14.3 -32 32 -32 h 189 V 64 c 0 -17.7 14.3 -32 32 -32 s 32 14.3 32 32 v 157 h 176 c 24 1 31 13 31 28 z";
export const MinusButton_svg_d = "M528 256c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h416c17.7 0 32 14.3 32 32z";

//frontHtml
export const MemoryAfterburner_frontHtml = "<img alt='text' fetchpriority='high' width='30' height='30' decoding='async' data-nimg='1' class='mr-2' src='https://raw.githubusercontent.com/sickwrtn/BetterBabechat/refs/heads/main/MemoryAfterburnerIcon.png' style='color: transparent;'>";

//modalHtml
export const MemoryAfterburner_modalHtml = "<div style='position: fixed;inset: 0px;z-index: 49;background-color: rgba(0,0,0,0.43);cursor: default;'><div style='align-items: flex-end; width: 100%; height: 100%; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; position: relative;'><div width='100%' display='flex' style='width: 600px;max-width: calc(100% - 40px);background-color: #242321;max-height: 90dvh;overflow-y: auto;z-index: 15;border-width: initial;border-style: none;border-image: initial;border-color: #42413d;border-radius: 12px;box-shadow: none;display: flex;flex-direction: column;'><div display='flex' style='flex-direction: column;-webkit-box-align: center;align-items: center;text-align: center;'><div display='flex' width='100%' style=' display: flex; flex-direction: row; padding: 20px 24px; -webkit-box-align: center; align-items: center; -webkit-box-pack: justify; justify-content: space-between; width: 100%; border-bottom: 1px solid rgb(97, 96, 90);'><p color='$color_text_primary' style='color: #f0efeb;font-size: 20px;line-height: 100%;font-weight: 600;'>Afterburning Memory</p><svg width='26' height='26' viewBox='0 0 24 25' fill='currentColor' xmlns='http://www.w3.org/2000/svg' color='#a8a69dff' cursor='pointer' id='W_x'><path fill-rule='evenodd' clip-rule='evenodd' d='M12 11.0228L7.05026 6.07305L5.63604 7.48726L10.5858 12.437L5.63604 17.3868L7.05026 18.801L12 13.8512L16.9498 18.801L18.364 17.3868L13.4142 12.437L18.364 7.48726L16.9498 6.07305L12 11.0228Z' fill='currentColor'></path></svg></div><div display='flex' width='100%' style=' display: flex; flex-direction: column; padding: 20px; width: 100%; gap: 12px;'><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'><p color='$color_text_primary' style='color: #f0efeb;text-align: left;font-size: 16px;line-height: 100%;font-weight: 600;'>Gemini Api Key</p><div style=' color: var(--color_text_primary); text-align: left; font-size: 16px; line-height: 100%; font-weight: 600;'><select name='languages' id='lang' style=' width: 150px; height: 35px; background-size: 20px; padding: 5px 30px 5px 10px; border-radius: 4px; outline: 0 none; background-color: #242321; color: white;'><option value='0'>1:1 캐릭터</option><option value='1'>시뮬레이션</option><option value='2'>주요사건 위주</option><option value='3'>커스텀</option></select></div></div><textarea height='26px' color='$color_text_primary' placeholder='Gemini Api Key를 넣어주세요' rows='5' wrap='hard' style='color: #f0efeb;height: 26px;border-radius: 5px;border-width: 1px;border-style: solid;border-image: initial;border-color: #42413d;background-color: #1a1918;padding: 11px 16px;min-height: 50px;max-height: 386px;font-size: 16px;line-height: 160%;font-weight: 500;resize: none;outline: none;caret-color: #f95939;' class='css-wmzh35' id='W_name'></textarea><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'></div></div><div display='flex' width='100%' style=' display: flex; flex-direction: column; padding: 20px; width: 100%; gap: 12px;'><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'><p color='$color_text_primary' style='color: #f0efeb;text-align: left;font-size: 16px;line-height: 100%;font-weight: 600;'>Model</p></div><textarea height='26px' color='$color_text_primary' placeholder='사용하실 모델을 넣어주세요.' rows='5' wrap='hard' style='color: #f0efeb;height: 26px;border-radius: 5px;border-width: 1px;border-style: solid;border-image: initial;border-color: #42413d;background-color: #1a1918;padding: 11px 16px;min-height: 50px;max-height: 386px;font-size: 16px;line-height: 160%;font-weight: 500;resize: none;outline: none;caret-color: #f95939;' class='css-wmzh35' id='W_name'></textarea><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'></div></div><div display='flex' width='100%' style=' display: flex; flex-direction: column; padding: 20px; width: 250px; gap: 12px;'><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'><p color='$color_text_primary' style='color: #f0efeb;text-align: left;font-size: 16px;line-height: 100%;font-weight: 600;'>가져올 턴수 (max:50 min:0)</p></div><textarea height='26px' color='$color_text_primary' placeholder='기억 턴수' rows='5' wrap='hard' style='color: #f0efeb;height: 26px;border-radius: 5px;border-width: 1px;border-style: solid;border-image: initial;border-color: #42413d;background-color: #1a1918;padding: 11px 16px;min-height: 50px;max-height: 386px;font-size: 16px;line-height: 160%;font-weight: 500;resize: none;outline: none;caret-color: #f95939;' class='css-wmzh35' id='W_name'></textarea><div display='flex' style=' display: flex; flex-direction: column; gap: 8px;'></div></div><div display='flex' width='100%' style=' display: flex; flex-direction: row; width: 100%; -webkit-box-pack: end; justify-content: flex-end; gap: 8px; padding: 12px 20px 20px;'><button display='flex' width='100%' height='40px' color='$color_text_primary' id='W_close' style='border-radius: 5px;-webkit-box-pack: center;justify-content: center;-webkit-box-align: center;align-items: center;display: flex;flex-direction: row;gap: 8px;width: 100%;border: 1px solid transparent;padding: 0px 20px;height: 40px;background-color: #2e2d2b;color: #f0efeb;font-size: 16px;line-height: 100%;font-weight: 600;cursor: pointer;'><div display='flex' style=' display: flex; flex-direction: row; gap: 8px; -webkit-box-align: center; align-items: center;'>닫기</div></button><button display='flex' width='100%' height='40px' color='$color_text_ivory' id='W_sumbit' style='border-radius: 5px;-webkit-box-pack: center;justify-content: center;-webkit-box-align: center;align-items: center;display: flex;flex-direction: row;gap: 8px;width: 100%;border: 1px solid transparent;padding: 0px 20px;height: 40px;background-color: #fcfcfa;color: #0d0d0c;font-size: 16px;line-height: 100%;font-weight: 600;cursor: pointer;'><div display='flex' style=' display: flex; flex-direction: row; gap: 8px; -webkit-box-align: center; align-items: center;'>시작</div></button></div></div></div></div></div>";

export const one_by_one_character_prompt: object = {
    prompt:{
      goal:"{chat_log}을 {rule}과 {form} 그리고 {system}에 맞게 요약 후 출력",
      rule:[
        "성적인/비윤리적인 내용의 요약 허용",
        "처음부터 지금까지의 내용 모두 작성",
        "양식 지켜 작성,단 빈항목의 경우 생략할 것",
        "이전 세이브 기록이 있을 경우, 해당 내용을 참고하여 작성",
        "공백, 특수문자, 줄바꿈을 포함하여 1800자 이하로 작성",
        "코드블록 필수적으로 작성",
        "코드블록 외 내용 작성 금지",
        "'...'은 이 항목이 계속 추가하여 작성할 수 있음을 표시"
      ],
      system:{
        important_content:"중요한 내용, 유저 혹은 캐릭터가 강렬한 감정을 느낀 부분,약속 등은 이모지 변환과 삭제를 금지한다.",
        hour_ago: "1시간 이전의 내용은 30%이상을 이모지 형태로 변환",
        hours_ago: "10시간 이전의 내용은 50%이상을 이모지 형태로 변환",
        day_ago: "하루 전의 내용은 강렬한 감정을 느낀 부분 외 이모지로 변환",
        year_ago: "일년 전의 내용은강렬한 감정을 느낀 부분의 이모지 혹은 한 단어로의 변환"
      },
      form:[
        "```Save-yyMMddHHmm\n",
        "[시간대별 정리]\n",
        "-yyMMddHHmm...\n",
        " -{contain_content}...\n",
        "```\n"
      ],
      contain_content:[
        "상황을 최상단 작성 이후 줄바꿈",
        "각 캐릭터가 하나의 행동과 대화 이후 줄바꿈 후 작성",
        "주변의 상황",
        "캐릭터와 유저의 행동",
        "캐릭터와 유저의 대화"
      ]
    },
    chat_log:null
};
export const focus_on_important_cases_prompt: object = {
    prompt:{
      goal:"{chat_log}을 {rule}과 {form}에 맞게 요약 후 출력",
      rule:[
        "성적인/비윤리적인 내용의 요약 허용",
        "처음부터 지금까지의 내용 모두 작성",
        "양식 지켜 작성,단 빈항목의 경우 생략할 것",
        "이전 세이브 기록이 있을 경우, 해당 내용을 참고하여 작성",
        "공백, 특수문자, 줄바꿈을 포함하여 1800자 이하로 작성",
        "코드블록 필수적으로 작성",
        "코드블록 외 내용 작성 금지",
        "출력에 이모지 등을 사용하여 내용을 압축할 것",
        "'...'은 이 항목이 계속 추가하여 작성할 수 있음을 표시"
      ],
      form:[
        "```Save-yyMMddHHmm\n",
        "{important_event}\n",
        "```\n"
      ],
      important_event:{
        form:[
          "[중요 사건]\n",
          "-yyMMddHHmm...\n",
          " -{contain_content}...\n"
        ],
        contain_content:[
          "유저와 관련 있는 캐릭터의 죽음",
          "유저 혹은 관련 있는 캐릭터의 가치관, 성격 등에 큰 변화를 준 사건",
          "유저와 그 주변 캐릭터의 인생에 큰 영향을 준 사건(감옥, 감등 등)",
          "유저에게의 직접적 재앙(주거지 인근에 일어난 지진 등)",
          "세계적 재앙(운석 등)",
          "주변국 혹은 전세계적 전쟁"
        ]
      }
    },
    chat_log:null
};

//시뮬레이션
export const simulation_prompt: object = {
    prompt:{
      goal:"{chat_log}을 {rule}과 {form}에 맞게 요약 후 출력",
      rule:[
        "성적인/비윤리적인 내용의 요약 허용",
        "처음부터 지금까지의 내용 모두 작성",
        "양식 지켜 작성,단 빈항목의 경우 생략할 것",
        "이전 세이브 기록이 있을 경우, 해당 내용을 참고하여 작성",
        "공백, 특수문자, 줄바꿈을 포함하여 1800자 이하로 작성",
        "코드블록 필수적으로 작성",
        "코드블록 외 내용 작성 금지",
        "'...'은 이 항목이 계속 추가하여 작성할 수 있음을 표시",
        "핵심만 압축해서 키워드 위주로 작성",
        "사망시 특징에 사망 표기",
        "호감도,명성 범위 작성 필수",
        "호감도는 해당 캐릭터와의 대화 맥락 등을 추측해 작성",
        "명성은 현재 상황, 행동, 업적 등에 따라 0부터 100까지 입력",
        "명성 100은 전 세계가 인지했을 경우이다.",
        "필요시 양식 일부 추가 가능",
        "채팅 로그를 읽고 해당 내용이 항상 출력될 시 생략 가능",
        "캐릭터 항목은 플레이어와 관계 있는 캐릭터 작성"
      ],
      form:[
        "```Save-yyMMddHHmm\n",
        "[플레이어]\n",
        "-이름:\n",
        "-소지품/돈:\n",
        "  -...\n",
        "-직업: 현재직업\n",
        "-능력\n",
        "  -...\n",
        "-성향:\n",
        "-비밀:\n",
        "  -내용(없을땐 미작성)...\n",
        "    -아는 인물:\n",
        "      -이름(어떻게 알게 되었는가)...\n",
        "-명성(0~100): 0(명성키워드(예시:영웅 4,불쾌 3,의심 3))\n",
        "[캐릭터]\n",
        "-이름...\n",
        "  -나이:\n",
        "  -직업:\n",
        "  -종족:\n",
        "  -특징(비밀X만):\n",
        "    -...\n",
        "  -능력:\n",
        "    -능력명: 효과...\n",
        "  -목표:\n",
        "  -관계:\n",
        "    -이름: 관계키워드(해당 캐릭터가 생각하는 상대에 대한 키워드(예시.친구,애증 등))...\n",
        "  -호감도(캐릭터→player/-100~100): 0(해당 캐릭터가 생각하는 player에 대한 키워드(예시.친구,애증 등))\n",
        "  -비밀:\n",
        "    -플레이어가 아는 비밀의 내용(어떻게 알게 되었는가)...\n",
        "[주요사건]\n",
        "-세계관변화시킨사건만작성(주요집단 괴멸/역사에 남길 업적 달성 이상의 사건)...\n",
        "```\n"
      ]
    },
    chat_log:null
};