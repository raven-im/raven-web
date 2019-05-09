import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from '../model/event';
import * as socketIo from 'socket.io-client';
import { com } from 'assets/message';

@Injectable()
export class SocketService {
    private socket;

    private msgMap:{[key:number] : any} = {};
    private clientId: number = 0;
    private isLogin: boolean = false;

    public initSocket(): void {
        // read from localstorage for socket connection.
        let url = localStorage.getItem('access-node');
        if (null != url && this.socket == null) {
            this.socket = socketIo(url);
            this.socket.on('connect', function () {
                console.log('connect');
            });
    
            this.socket.on('error', function (data) {
                console.log(data || 'error');
            });
    
            this.socket.on('connect_failed', function (data) {
                console.log(data || 'connect_failed');
            });
        }
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
        this.isLogin = true;
    }

    private sendMsg(msg): void {
        if(this.socket.connected) {
            this.socket.emit(msg);
        } else {
            console.log('socket not connected');
        }
        
    }

    public send(message: com.raven.common.protos.RavenMessage): void {
        this.socket.emit(message);
    }

    public onMessage(): Observable<com.raven.common.protos.RavenMessage> {
        return new Observable<com.raven.common.protos.RavenMessage>(observer => {
            this.socket.on((data: com.raven.common.protos.RavenMessage) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on('connect', () => {
                console.log("here!!!")
                observer.next()
            });
        });
    }
}
