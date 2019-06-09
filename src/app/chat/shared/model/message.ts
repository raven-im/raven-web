import {User} from './user';

export interface Message {
    from?: User;
    type: MsgType;
    content?: any;
    time?: Date
}

export enum MsgType {
    TEXT,
    IMAGE,
    VIDEO,
    VOICE
}
