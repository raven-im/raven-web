import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from '../model/event';
import { map } from 'rxjs/operators';
import * as Rx from 'rxjs/Rx';
import { com } from 'assets/message';
import { Subject } from 'rxjs/Rx';
import { LoginOutParam } from '../model/loginOutParam';
@Injectable()
export class SocketService {

    private msgMap = new Map<number, any>();
    private clientId: number = 1;
    private isLogin: boolean = false;

    private subject: Rx.Subject<MessageEvent>;
    public messages: Subject<com.raven.common.protos.RavenMessage>;

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
        this.msgMap.set(this.clientId, msg);
        this.clientId++;
		this.messages.next(msg);
    }
    
    private handleIncomingMsg(msg: com.raven.common.protos.RavenMessage): void {
        console.log("Response from websocket: " + msg.type);
        switch(msg.type) {
            case com.raven.common.protos.RavenMessage.Type.LoginAck:
                //check if local saved , otherwise invalid.
                let ack = msg.loginAck;
                if (ack.code === com.raven.common.protos.Code.SUCCESS && 
                    this.msgMap.get(ack.id) != null) {
                    this.isLogin = true;
                }
                break;
            case com.raven.common.protos.RavenMessage.Type.HeartBeat:
                let hb = msg.heartBeat;
                this.sendPong(hb.id);
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

    // Messages 
    
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

        this.msgMap.set(this.clientId, message);
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

}
