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