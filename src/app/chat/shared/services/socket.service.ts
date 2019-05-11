import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as Rx from 'rxjs/Rx';
import { com } from 'assets/message';
import { Subject } from 'rxjs/Rx';
import { RestService } from './rest.service';
@Injectable()
export class SocketService {

    private msgMap = new Map<string, any>();
    private clientId: number = 1;
    private isLogin: boolean = false;

    private subject: Rx.Subject<MessageEvent>;
    public messages: Subject<com.raven.common.protos.RavenMessage>;

    constructor(private restClient: RestService) { }

	private connect(url): Rx.Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(url);
            console.log("Successfully connected: " + url);
		} 
		return this.subject;
	}

    private create(url): Rx.Subject<MessageEvent> {
        let ws = new WebSocket(url);
        ws.binaryType = 'arraybuffer';
        let that = this;
        ws.onopen = function (event) {
            if (event.type == "open") {
                console.log("websocket open.");
                that.login();
            }
        };
        ws.onclose = function (event) {
            that.isLogin = false;
            ws.close(); //TODO
        }
		let observable = Rx.Observable.create(
			(obs: Rx.Observer<MessageEvent>) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);
				return ws.close.bind(ws);
			})

		let observer = {
			next: (data: com.raven.common.protos.RavenMessage) => {
				if (ws.readyState === WebSocket.OPEN) {
                    let binary: Uint8Array = com.raven.common.protos.RavenMessage.encode(data).finish();
					ws.send(binary);
				}
            },
            error: () => {
                console.log("Error happen.");
            },
            complete: () => {
                console.log("Remote closed.");
            },
		}

		return Rx.Subject.create(observer, observable);
    }
    
    public initSocket(): void {
        // read from localstorage for socket connection.
        let url = localStorage.getItem('access-node');
        this.messages = <Subject<com.raven.common.protos.RavenMessage>>this.connect("ws://" + url + "/ws")
			.pipe(map((response: MessageEvent): com.raven.common.protos.RavenMessage => {
                return com.raven.common.protos.RavenMessage.decode(new Uint8Array(response.data)); 
            }));
        this.messages.subscribe(msg => {
            this.handleIncomingMsg(msg);
        });
    }

    private sendMsg(msg: com.raven.common.protos.RavenMessage) {
        console.log('new message from client to websocket: ' + msg.type);
        this.msgMap.set(this.clientId.toString(), msg);
        this.clientId++;
		this.messages.next(msg);
    }
    
    private handleIncomingMsg(msg: com.raven.common.protos.RavenMessage): void {
        console.log("Response from websocket: " + msg.type);
        let original;
        switch(msg.type) {
            case com.raven.common.protos.RavenMessage.Type.LoginAck:
                //check if local saved , otherwise invalid.
                let loginAck = msg.loginAck;
                if (loginAck.code === com.raven.common.protos.Code.SUCCESS && this.msgMap.has(loginAck.id.toString())) {
                    this.isLogin = true;
                    this.msgMap.delete(loginAck.id.toString());

                    //get Conversation list.
                    this.getAllConversationList(this.clientId);
                    //get Contacts list.
                    this.restClient.getUsers().subscribe((list) => {
                        console.log("User list length:");
                    });
                }
                break;
            case com.raven.common.protos.RavenMessage.Type.HeartBeat:
                let hb = msg.heartBeat;
                this.sendPong(+hb.id.toString());
                break;
            case com.raven.common.protos.RavenMessage.Type.MessageAck:
                let msgAck = msg.messageAck;
                if (this.msgMap.has(msgAck.cid.toString())) {
                    original = this.msgMap.get(msgAck.cid.toString());
                } else {
                    console.log("error: map not contain " + msgAck.cid);
                } 
                if (msgAck.code === com.raven.common.protos.Code.SUCCESS) {
                    //TODO message sent success. add Original Msg to Chat List.
                } else {
                    console.log("error: message ack fail. ");
                }
                break;
            case com.raven.common.protos.RavenMessage.Type.ConverAck:
                let convAck = msg.converAck;
                if (this.msgMap.has(convAck.id.toString())) {
                    original = this.msgMap.get(convAck.id.toString());
                } else {
                    console.log("error: map not contain " + convAck.id);
                } 
                if (convAck.code === com.raven.common.protos.Code.SUCCESS) {
                    console.log(" convAck id:" + convAck.id.toString());
                    console.log(" convAck time:" +convAck.time.toString());
                    if (convAck.converList != null) {
                        // TODO Conversation List.
                    } else if (convAck.converInfo.converId != null) {
                        // TODO Conversation Detail.
                    }
                } else {
                    console.log("error: conversation ack fail. ");
                }
                break;

            case com.raven.common.protos.RavenMessage.Type.HisMessagesAck:
                let hisAck = msg.hisMessagesAck;
                if (this.msgMap.has(hisAck.id.toString())) {
                    original = this.msgMap.get(hisAck.id.toString());
                    this.msgMap.delete(hisAck.id.toString());
                    //TODO History Message Insert.
                } else {
                    console.log("error: map not contain " + hisAck.id);
                }
                break;
            case com.raven.common.protos.RavenMessage.Type.UpDownMessage:
                console.log("new incoming messages.");
                //DB insert  Chat List insert, Conversation list update.
                
                break;
            }
    }

    public send(message: com.raven.common.protos.RavenMessage): void {
        if (this.isLogin) {
            this.sendMsg(message);
        } else {
            console.log("not login yet");
        }
    }

    /*
     * Messages 
     */

    // Login message
    private login(): void {
        let login = com.raven.common.protos.Login.create({
            id: this.clientId, 
            uid: localStorage.getItem("user"),
            token: localStorage.getItem("token")
        });
        let message = com.raven.common.protos.RavenMessage.create({
            type: com.raven.common.protos.RavenMessage.Type.Login,
            login: login
        });

        this.msgMap.set(this.clientId.toString(), message);
        this.clientId++;
        this.messages.next(message);
    }

    // HeartBeat Ping
    private sendPing(id: number): void {
        let ping = com.raven.common.protos.HeartBeat.create({
            id: id, 
            heartBeatType: com.raven.common.protos.HeartBeatType.PING
        });
        let message = com.raven.common.protos.RavenMessage.create({
            type: com.raven.common.protos.RavenMessage.Type.HeartBeat,
            heartBeat: ping
        });

        this.messages.next(message);
    }

    // HeartBeat Pong
    private sendPong(id: number): void {
        let pong = com.raven.common.protos.HeartBeat.create({
            id: id, 
            heartBeatType: com.raven.common.protos.HeartBeatType.PONG
        });
        let message = com.raven.common.protos.RavenMessage.create({
            type: com.raven.common.protos.RavenMessage.Type.HeartBeat,
            heartBeat: pong
        });
        this.messages.next(message);
    }

    // Conversation Request. ALL
    private getAllConversationList(id: number): void {
        let request = com.raven.common.protos.ConverReq.create({
            id: id, 
            type: com.raven.common.protos.OperationType.ALL
        });
        let message = com.raven.common.protos.RavenMessage.create({
            type: com.raven.common.protos.RavenMessage.Type.ConverReq,
            converReq: request
        });

        return this.send(message);
    }
    
    // Conversation Request. DETAIL
    private getDetailConversationList(id: number, cid: string): void {
        let request = com.raven.common.protos.ConverReq.create({
            id: id, 
            type: com.raven.common.protos.OperationType.DETAIL,
            conversationId: cid
        });
        let message = com.raven.common.protos.RavenMessage.create({
            type: com.raven.common.protos.RavenMessage.Type.ConverReq,
            converReq: request
        });

        return this.send(message);
    }
    
    //Single Message.
    private sendSingleMessage(id: number, fromId: string, targetId: string, 
        type: com.raven.common.protos.MessageType, content: string, convId: string): void {
        let msgContent = com.raven.common.protos.MessageContent.create({
            uid: fromId,
            type: type,
            content: content,
            time: new Date().getTime()
        });

        let upMsg = com.raven.common.protos.UpDownMessage.create({
            cid: id, 
            fromUid: fromId,
            targetUid: targetId,
            converType: com.raven.common.protos.ConverType.SINGLE,
            converId: convId != null ? convId: "",
            content: msgContent
        });
        let message = com.raven.common.protos.RavenMessage.create({
            type: com.raven.common.protos.RavenMessage.Type.UpDownMessage,
            upDownMessage: upMsg
        });

        return this.send(message);
    }
    
    //Group Message.
    private sendGroupMessage(id: number, fromId: string, targetId: string, 
        type: com.raven.common.protos.MessageType, content: string, groupId: string, convId: string): void {
        let msgContent = com.raven.common.protos.MessageContent.create({
            uid: fromId,
            type: type,
            content: content,
            time: new Date().getTime()
        });

        let upMsg = com.raven.common.protos.UpDownMessage.create({
            cid: id, 
            fromUid: fromId,
            targetUid: targetId,
            converType: com.raven.common.protos.ConverType.GROUP,
            converId: convId != null ? convId: "",
            content: msgContent,
            groupId: groupId
        });
        let message = com.raven.common.protos.RavenMessage.create({
            type: com.raven.common.protos.RavenMessage.Type.UpDownMessage,
            upDownMessage: upMsg
        });

        return this.send(message);
    }
    
    // get Message List.
    private getMessageList(id: number, convId: string, beginTime: number): void {
        let request = com.raven.common.protos.HisMessagesReq.create({
            id: id, 
            converId: convId,
            beaginTime: beginTime
        });
        let message = com.raven.common.protos.RavenMessage.create({
            type: com.raven.common.protos.RavenMessage.Type.HisMessagesReq,
            hisMessagesReq: request
        });

        return this.send(message);
    }

}
