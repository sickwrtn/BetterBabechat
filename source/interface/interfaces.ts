//ChatBar 클래스 규격
export interface ChatBar {
    /**
     * 단축버튼 배열 [HTMLButtonELement,string?]
     */
    button: Array<[HTMLButtonElement,string?]>;
    /**
     * 채팅바
     */
    Chatbar: HTMLDivElement;
    /**
     * 버튼 양식
     */
    struct: HTMLButtonElement;
    /**
     * +,- 사이 버튼 추가
     * @param content 이름 
     * @param event 클릭시 이벤트 
     * @param savedText 저장될 내용
     */
    add(content: string, event: ChatBarEvenListener, savedText:string);
    /**
     * 가장 바깥 버튼부터 삭제
     */
    pop();
    /**
     * + 버튼 이벤트 추가
     * @param event EventListener
     */
    setPlus(event:EventListener);
    /**
     * - 버튼 이벤트 추가
     * @param event EventListener
     */
    setMinus(event:EventListener);
}

//파라미터 함수 규격
export interface ChatBarEvenListener{
    /**
     * 단축버튼을 파라미터로
     */
    (new_button: HTMLButtonElement): void;
}

export interface userSocialLogin{
    email: string;
    name: string;
    provider: string;
    providerUserId: string;
    userId: string;
}

export interface user {
    dob: string;
    email: string;
    firstName: string;
    gender: string;
    imageUrl: string;
    introduction: string;
    isSafetyEnabled: boolean;
    marketingConsent: boolean;
    nickname: string;
    notification: boolean;
    phoneNumber: string;
    profile: string;
    provider: string;
    referralCode: string;
    referredBy: string;
    refferedBy: string;
    userSocialLogins: Array<userSocialLogin>
}

export interface chatroom {
    id: number;
    roomId: number;
    isBabies: boolean;
    name: string;
    visibility: string;
    isStoryMode: boolean;
    isDeleted: boolean;
    isViolated: boolean;
    isAdult: boolean;
    thumbnailImage: string;
    characterId: string;
    creatorId: string;
    createdAt: string;
    content: string;
}

export interface sendMessageData {
    isMultipleImage: boolean;
    model: string;
    proChatCount: number;
    prompt: string;
    roomId: string;
}

export interface persona {
    id: number;
    userId: string;
    gender: string;
    dob: string;
    nickname: string;
    introduction: string;
    isActive: boolean;
    createdAt: string;
    updatedAt : string;
}

export interface message {
    content: string;
    createdAt: string;
    date: string;
    emotion: string;
    id: number;
    location: string;
    role: string;
}

export interface messageResponse {
    count:number;
    messages:Array<message>;
}

export interface setMessageResponse {
    success:boolean;
}