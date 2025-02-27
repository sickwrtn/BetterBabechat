import * as interfaces from "../interface/interfaces";
import * as request from "../tools/requests";
import * as env from "../.env/env";
import { reParams } from "./functions";


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

export class myCharacter {
    data : interfaces.myCharacter;
    characterId : string;
    constructor(data, characterId){
        this.data = data;
        this.characterId = characterId;
    }
    set(data: interfaces.myCharacter){
        console.log(data.hashtags);
        console.log(data.images);
        for (let i = 0; i < data.keywordBooks.length; i++) {
            delete data.keywordBooks[i].id;
        }
        let re_data = {
            name: data.name,
            description: data.description,
            image: data.images[0].url,
            emotionImages: data.images.slice(1,data.images.length),
            characterDetails: data.characterDetails,
            initialAction: data.initialAction,
            initialMessage: data.initialMessage,
            isAdult: data.isAdult,
            visibility: data.visibility,
            category: data.category,
            keywordBooks: data.keywordBooks,
            tags: data.hashtags,
            details: {
                jobs:data.jobs,
                interests: data.interests,
                likes: data.likes,
                dislikes: data.dislikes,
                date: data.date,
                location: data.location,
                height: data.height,
                weight: data.weight,
                details: data.details,
                replySuggestions: data.replySuggestions
            }
        }
        return request.putAfetch(env.babe_api_url + `/ko/api/characters/${this.characterId}/edit`,re_data);
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
    getMyCharacters(params): Array<interfaces.character>{
        let response: Array<interfaces.character> = request.getAfetch(env.babe_api_url + "/ko/api/characters/my?" + reParams(params));
        if (params.sort == "likes"){
            response.sort((a: interfaces.character,b: interfaces.character) => b.likeCount - a.likeCount); 
        }
        else if (params.sort == "latest"){
            response.sort((a: interfaces.character,b: interfaces.character) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))); 
        }
        else if (params.sort == "oldest"){
            response.sort((a: interfaces.character,b: interfaces.character) => Number(new Date(a.createdAt)) - Number(new Date(b.createdAt))); 
        }
        return response;
    }
    getMyCharacter(characterId){
        return new myCharacter(request.getAfetch(env.babe_api_url + `/ko/api/characters/${characterId}/edit`),characterId);
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