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
export interface ChatOnloadEvent{
    (chats: NodeListOf<ChildNode>,interval?: NodeJS.Timeout ): void;
}

//SDK class 규격
export interface message_class{
    /**
     * 대화 데이터
     */
    data: message;
    /**
     * 대화 데이터를 수정
     * @param content 수정할 내용 
     */
    set(content: string): setMessageResponse;
}

export interface chatroom_class{
    /**
     * 채팅방 데이터
     */
    data : chatroom;
    /**
     * 해당 채팅방의 대화목록 가져오기
     */
    getMessages(): messageResponse;
    /**
     * 해당 채팅방에 메시지 보내기
     * @param prompt 보낼 내용
     * @param model 모델 pro,free만 사용해봄
     * @param proChatCount ?
     */
    send(prompt: string,model: string,proChatCount: number): string;
}

export interface myCharacter_class{
    /**
     * 캐릭터의 json 데이터
     */
    data : myCharacter;
    /**
     * 캐릭터의 id
     */
    characterId : string;
    /**
     * 캐릭터 덮어쓰기
     * @param data 덮어쓸데이터
     */
    set(data: myCharacter): any
}

export interface babe_api_class{
    /**
     * 유저 정보
     */
    getUser(): user;
    /**
     * 페르소나 목록 가져오기
     */
    getPersonas(): Array<persona>;
    /**
     * 활성화된 페르소나 가져오기 (페르소나 없으면 기본가져옴)
     */
    getActivePersona(): persona;
    /**
     * 채팅방 목록 조회
     */
    getChatrooms(): Array<chatroom>;
    /**
     * 채탕방 가져오기
     * @param characterId 캐릭터 Id 
     * @param roomId 채팅방 Id
     */
    getChatroom(characterId: string,roomId: string): chatroom_class;
    /**
     * 채팅가져오기
     * @param data 채팅 데이터 
     */
    getMessage(data: message): message_class;
    /**
     * 캐릭터 조회
     * @param params get 파라미터 
     */
    getMyCharacters(params): Array<character>;
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

export interface characterDetails{
    date: string;
    details: string;
    dislikes: Array<string>;
    height: string;
    interests: Array<string>;
    jobs: Array<string>;
    likes: Array<string>;
    location: string;
    replySuggestions: Array<string>;
    weight: string;
}

export interface character{
    characterDetails: characterDetails;
    characterId: string;
    chatCount: number;
    chatUserCount: number;
    createdAt: string;
    creatorNickname: string;
    creatorUserId: string;
    description: string;
    hasEmotionImages: any;
    id: string;
    isAdult: boolean;
    isBabies: boolean;
    likeCount: number;
    mainImage: string;
    name: string;
    profileImageUrl: string;
    tags: Array<string>;
    visibility: string;
}

export interface image{
    emotion: string;
    hidden: boolean;
    order: number;
    url: string;
}

export interface keywordBook{
    content: string;
    id: number;
    keywords: Array<string>;
    order: number;
    title: string;
}

export interface myCharacter{
    category: number ;
    characterDetails: string;
    date: string;
    description: string;
    details: string;
    dislikes: Array<string>;
    hashtags: Array<string>;
    height: string;
    images: Array<image>;
    initialAction: string;
    initialMessage: string;
    interests: Array<string>;
    isAdult: boolean;
    jobs: Array<string>;
    keywordBooks: Array<keywordBook>; 
    likes: Array<string>;
    location: string;
    name: string;
    replySuggestions: Array<string>,
    visibility: string;
    weight: string;
}