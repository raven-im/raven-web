import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from '../model/event';
import { map } from 'rxjs/operators';
import * as Rx from 'rxjs/Rx';
import { com } from 'assets/message';
import { Subject } from 'rxjs/Rx';
@Injectable()
export class SocketService {

    private msgMap:{[key:number] : any} = {};
    private clientId: number = 0;
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
                    let binary: Uint8Array = com.raven.common.protos.RavenMessage.encodeDelimited(data).finish();
					ws.send(binary.buffer);
				}
			}
		}

		return Rx.Subject.create(observer, observable);
    }
    
    
    public initSocket(): void {
        // read from localstorage for socket connection.
        let url = localStorage.getItem('access-node');
        this.messages = <Subject<com.raven.common.protos.RavenMessage>>this.connect("ws://" + url + "/ws")
			.pipe(map((response: MessageEvent): com.raven.common.protos.RavenMessage => {
                console.log("Response from websocket 22");
				// let data = JSON.parse(response.data);
				return null;
					// new com.raven.common.protos.RavenMessage();
					
				
            }));
        this.messages.subscribe(msg => {			
            console.log("Response from websocket: " + msg);
        });
    }

    public login(): void {
        let message = com.raven.common.protos.RavenMessage;
        let msg:com.raven.common.protos.RavenMessage = message.create();
        let login = com.raven.common.protos.Login;
        let lg: com.raven.common.protos.Login = login.create();

        lg.id = this.clientId++;
        lg.uid = localStorage.getItem("user");
        lg.token = localStorage.getItem("token");
        msg.login = lg;

        this.msgMap[this.clientId] = msg;
        this.sendMsg(msg);
        this.isLogin = true;//TODO
    }

    sendMsg(msg: com.raven.common.protos.RavenMessage) {
        console.log('new message from client to websocket: ');
		this.messages.next(msg);
		// this.message.message = '';
	}
    // private sendMsg(msg): void {
    //     if(this.socket.connected) {
    //         console.log('msg sent.');
    //         this.socket.emit(msg);
    //     } else {
    //         console.log('socket not connected');
    //     }
        
    // }

    // public send(message: com.raven.common.protos.RavenMessage): void {
    //     this.socket.emit(message);
    // }

    // public onMessage(): Observable<com.raven.common.protos.RavenMessage> {
    //     return new Observable<com.raven.common.protos.RavenMessage>(observer => {
    //         this.socket.on((data: com.raven.common.protos.RavenMessage) => observer.next(data));
    //     });
    // }

    // public onEvent(event: Event): Observable<any> {
    //     return new Observable<Event>(observer => {
    //         this.socket.on('connect', () => {
    //             console.log("here!!!")
    //             observer.next()
    //         });
    //     });
    // }
}
