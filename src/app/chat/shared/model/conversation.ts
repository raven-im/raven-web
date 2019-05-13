import { com } from "assets/message";

export interface Conversation {
    convId?: string;
    type?: com.raven.common.protos.ConverType;
    name?: string;
    groupId?: string,
    lastMsg?: string;
    unReadCnt?: number;
    targetUser?: string;
    time?: Date;
}
