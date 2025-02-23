import * as interfaces from "../interface/interfaces";
import * as request from "../tools/requests";
import * as env from "../.env/env";


export class message_class implements interfaces.message_class{
    data: interfaces.message
    constructor(data){
        this.data = data;
    }
    set(content: string): interfaces.setMessageResponse{
        return request.putAfetch(env.babe_api_url + `/ko/api/edit-message/${this.data.id}`,{
            message:content
        })
    }
}

export class chatroom_class implements interfaces.chatroom_class{
    data : interfaces.chatroom 
    constructor(data){
        this.data = data;
    }
    getMessages(): interfaces.messageResponse{
        return request.getAfetch(env.babe_api_url + `/ko/api/messages/${this.data.characterId}/false/${this.data.roomId}`);
    }
    send(prompt: string,model: string,proChatCount: number): string{
        const sendData: interfaces.sendMessageData = {
            isMultipleImage : true,
            model : model,
            proChatCount : proChatCount,
            prompt : prompt,
            roomId : String(this.data.roomId)
        }
        return request.postAfetchNoJson(env.babe_api_url2 + `/ko/api/u/message/${this.data.characterId}`,sendData);
    }
}

export class babe_api_class implements interfaces.babe_api_class {
    getUser(): interfaces.user{
        return request.getAfetch(env.babe_api_url + "/ko/api/user");
    }
    getPersonas(): Array<interfaces.persona>{
        return request.getAfetch(env.babe_api_url + "/ko/api/persona");
    }
    getActivePersona(): interfaces.persona{
        let personas = this.getPersonas();
        for (const i of personas) {
            if(i.isActive){
                return i;
            }
        }
        let user = this.getUser()
        let result: interfaces.persona = {
            id:0,
            userId:"",
            gender:user.gender,
            dob:user.dob,
            nickname:user.nickname,
            introduction:user.introduction,
            isActive:true,
            createdAt:"",
            updatedAt:""
        }
        return result;
    }
    getChatrooms(): Array<interfaces.chatroom>{
        return request.getAfetch(env.babe_api_url + "/ko/api/messages");
    }
    getChatroom(characterId: string,roomId: string): interfaces.chatroom_class{
        for (const i of this.getChatrooms()){
            if (i.characterId == characterId && i.roomId == Number(roomId)){
                return new chatroom_class(i);
            }
        }
    } 
    getMessage(data: interfaces.message): interfaces.message_class{
        return new message_class(data);
    }
}