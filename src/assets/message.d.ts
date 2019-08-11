import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace raven. */
    namespace raven {

        /** Namespace common. */
        namespace common {

            /** Namespace protos. */
            namespace protos {

                /** Properties of a RavenMessage. */
                interface IRavenMessage {

                    /** RavenMessage type */
                    type?: (com.raven.common.protos.RavenMessage.Type|null);

                    /** RavenMessage login */
                    login?: (com.raven.common.protos.ILogin|null);

                    /** RavenMessage loginAck */
                    loginAck?: (com.raven.common.protos.ILoginAck|null);

                    /** RavenMessage serverInfo */
                    serverInfo?: (com.raven.common.protos.IServerInfo|null);

                    /** RavenMessage upDownMessage */
                    upDownMessage?: (com.raven.common.protos.IUpDownMessage|null);

                    /** RavenMessage heartBeat */
                    heartBeat?: (com.raven.common.protos.IHeartBeat|null);

                    /** RavenMessage messageAck */
                    messageAck?: (com.raven.common.protos.IMessageAck|null);

                    /** RavenMessage hisMessagesReq */
                    hisMessagesReq?: (com.raven.common.protos.IHisMessagesReq|null);

                    /** RavenMessage hisMessagesAck */
                    hisMessagesAck?: (com.raven.common.protos.IHisMessagesAck|null);

                    /** RavenMessage notifyMessage */
                    notifyMessage?: (com.raven.common.protos.INotifyMessage|null);

                    /** RavenMessage converReq */
                    converReq?: (com.raven.common.protos.IConverReq|null);

                    /** RavenMessage converAck */
                    converAck?: (com.raven.common.protos.IConverAck|null);
                }

                /** Represents a RavenMessage. */
                class RavenMessage implements IRavenMessage {

                    /**
                     * Constructs a new RavenMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IRavenMessage);

                    /** RavenMessage type. */
                    public type: com.raven.common.protos.RavenMessage.Type;

                    /** RavenMessage login. */
                    public login?: (com.raven.common.protos.ILogin|null);

                    /** RavenMessage loginAck. */
                    public loginAck?: (com.raven.common.protos.ILoginAck|null);

                    /** RavenMessage serverInfo. */
                    public serverInfo?: (com.raven.common.protos.IServerInfo|null);

                    /** RavenMessage upDownMessage. */
                    public upDownMessage?: (com.raven.common.protos.IUpDownMessage|null);

                    /** RavenMessage heartBeat. */
                    public heartBeat?: (com.raven.common.protos.IHeartBeat|null);

                    /** RavenMessage messageAck. */
                    public messageAck?: (com.raven.common.protos.IMessageAck|null);

                    /** RavenMessage hisMessagesReq. */
                    public hisMessagesReq?: (com.raven.common.protos.IHisMessagesReq|null);

                    /** RavenMessage hisMessagesAck. */
                    public hisMessagesAck?: (com.raven.common.protos.IHisMessagesAck|null);

                    /** RavenMessage notifyMessage. */
                    public notifyMessage?: (com.raven.common.protos.INotifyMessage|null);

                    /** RavenMessage converReq. */
                    public converReq?: (com.raven.common.protos.IConverReq|null);

                    /** RavenMessage converAck. */
                    public converAck?: (com.raven.common.protos.IConverAck|null);

                    /** RavenMessage data. */
                    public data?: ("login"|"loginAck"|"serverInfo"|"upDownMessage"|"heartBeat"|"messageAck"|"hisMessagesReq"|"hisMessagesAck"|"notifyMessage"|"converReq"|"converAck");

                    /**
                     * Creates a new RavenMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RavenMessage instance
                     */
                    public static create(properties?: com.raven.common.protos.IRavenMessage): com.raven.common.protos.RavenMessage;

                    /**
                     * Encodes the specified RavenMessage message. Does not implicitly {@link com.raven.common.protos.RavenMessage.verify|verify} messages.
                     * @param message RavenMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IRavenMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RavenMessage message, length delimited. Does not implicitly {@link com.raven.common.protos.RavenMessage.verify|verify} messages.
                     * @param message RavenMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IRavenMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RavenMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RavenMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.RavenMessage;

                    /**
                     * Decodes a RavenMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RavenMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.RavenMessage;

                    /**
                     * Verifies a RavenMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RavenMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RavenMessage
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.RavenMessage;

                    /**
                     * Creates a plain object from a RavenMessage message. Also converts values to other types if specified.
                     * @param message RavenMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.RavenMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RavenMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RavenMessage {

                    /** Type enum. */
                    enum Type {
                        Login = 0,
                        LoginAck = 1,
                        ServerInfo = 2,
                        UpDownMessage = 3,
                        HeartBeat = 4,
                        MessageAck = 5,
                        HisMessagesReq = 6,
                        HisMessagesAck = 7,
                        NotifyMessage = 8,
                        ConverReq = 9,
                        ConverAck = 10
                    }
                }

                /** Properties of a Login. */
                interface ILogin {

                    /** Login id */
                    id?: (number|Long|null);

                    /** Login uid */
                    uid?: (string|null);

                    /** Login token */
                    token?: (string|null);
                }

                /** Represents a Login. */
                class Login implements ILogin {

                    /**
                     * Constructs a new Login.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.ILogin);

                    /** Login id. */
                    public id: (number|Long);

                    /** Login uid. */
                    public uid: string;

                    /** Login token. */
                    public token: string;

                    /**
                     * Creates a new Login instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Login instance
                     */
                    public static create(properties?: com.raven.common.protos.ILogin): com.raven.common.protos.Login;

                    /**
                     * Encodes the specified Login message. Does not implicitly {@link com.raven.common.protos.Login.verify|verify} messages.
                     * @param message Login message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Login message, length delimited. Does not implicitly {@link com.raven.common.protos.Login.verify|verify} messages.
                     * @param message Login message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Login message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Login
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.Login;

                    /**
                     * Decodes a Login message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Login
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.Login;

                    /**
                     * Verifies a Login message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Login message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Login
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.Login;

                    /**
                     * Creates a plain object from a Login message. Also converts values to other types if specified.
                     * @param message Login
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Login to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LoginAck. */
                interface ILoginAck {

                    /** LoginAck id */
                    id?: (number|Long|null);

                    /** LoginAck code */
                    code?: (com.raven.common.protos.Code|null);

                    /** LoginAck msg */
                    msg?: (string|null);

                    /** LoginAck time */
                    time?: (number|Long|null);
                }

                /** Represents a LoginAck. */
                class LoginAck implements ILoginAck {

                    /**
                     * Constructs a new LoginAck.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.ILoginAck);

                    /** LoginAck id. */
                    public id: (number|Long);

                    /** LoginAck code. */
                    public code: com.raven.common.protos.Code;

                    /** LoginAck msg. */
                    public msg: string;

                    /** LoginAck time. */
                    public time: (number|Long);

                    /**
                     * Creates a new LoginAck instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoginAck instance
                     */
                    public static create(properties?: com.raven.common.protos.ILoginAck): com.raven.common.protos.LoginAck;

                    /**
                     * Encodes the specified LoginAck message. Does not implicitly {@link com.raven.common.protos.LoginAck.verify|verify} messages.
                     * @param message LoginAck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.ILoginAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoginAck message, length delimited. Does not implicitly {@link com.raven.common.protos.LoginAck.verify|verify} messages.
                     * @param message LoginAck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.ILoginAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoginAck message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoginAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.LoginAck;

                    /**
                     * Decodes a LoginAck message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoginAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.LoginAck;

                    /**
                     * Verifies a LoginAck message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoginAck message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoginAck
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.LoginAck;

                    /**
                     * Creates a plain object from a LoginAck message. Also converts values to other types if specified.
                     * @param message LoginAck
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.LoginAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoginAck to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServerInfo. */
                interface IServerInfo {

                    /** ServerInfo id */
                    id?: (number|Long|null);

                    /** ServerInfo ip */
                    ip?: (string|null);

                    /** ServerInfo port */
                    port?: (number|null);
                }

                /** Represents a ServerInfo. */
                class ServerInfo implements IServerInfo {

                    /**
                     * Constructs a new ServerInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IServerInfo);

                    /** ServerInfo id. */
                    public id: (number|Long);

                    /** ServerInfo ip. */
                    public ip: string;

                    /** ServerInfo port. */
                    public port: number;

                    /**
                     * Creates a new ServerInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerInfo instance
                     */
                    public static create(properties?: com.raven.common.protos.IServerInfo): com.raven.common.protos.ServerInfo;

                    /**
                     * Encodes the specified ServerInfo message. Does not implicitly {@link com.raven.common.protos.ServerInfo.verify|verify} messages.
                     * @param message ServerInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link com.raven.common.protos.ServerInfo.verify|verify} messages.
                     * @param message ServerInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.ServerInfo;

                    /**
                     * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.ServerInfo;

                    /**
                     * Verifies a ServerInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.ServerInfo;

                    /**
                     * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
                     * @param message ServerInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpDownMessage. */
                interface IUpDownMessage {

                    /** UpDownMessage id */
                    id?: (number|Long|null);

                    /** UpDownMessage cid */
                    cid?: (number|Long|null);

                    /** UpDownMessage fromUid */
                    fromUid?: (string|null);

                    /** UpDownMessage targetUid */
                    targetUid?: (string|null);

                    /** UpDownMessage groupId */
                    groupId?: (string|null);

                    /** UpDownMessage converId */
                    converId?: (string|null);

                    /** UpDownMessage converType */
                    converType?: (com.raven.common.protos.ConverType|null);

                    /** UpDownMessage content */
                    content?: (com.raven.common.protos.IMessageContent|null);
                }

                /** Represents an UpDownMessage. */
                class UpDownMessage implements IUpDownMessage {

                    /**
                     * Constructs a new UpDownMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IUpDownMessage);

                    /** UpDownMessage id. */
                    public id: (number|Long);

                    /** UpDownMessage cid. */
                    public cid: (number|Long);

                    /** UpDownMessage fromUid. */
                    public fromUid: string;

                    /** UpDownMessage targetUid. */
                    public targetUid: string;

                    /** UpDownMessage groupId. */
                    public groupId: string;

                    /** UpDownMessage converId. */
                    public converId: string;

                    /** UpDownMessage converType. */
                    public converType: com.raven.common.protos.ConverType;

                    /** UpDownMessage content. */
                    public content?: (com.raven.common.protos.IMessageContent|null);

                    /**
                     * Creates a new UpDownMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpDownMessage instance
                     */
                    public static create(properties?: com.raven.common.protos.IUpDownMessage): com.raven.common.protos.UpDownMessage;

                    /**
                     * Encodes the specified UpDownMessage message. Does not implicitly {@link com.raven.common.protos.UpDownMessage.verify|verify} messages.
                     * @param message UpDownMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IUpDownMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpDownMessage message, length delimited. Does not implicitly {@link com.raven.common.protos.UpDownMessage.verify|verify} messages.
                     * @param message UpDownMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IUpDownMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpDownMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpDownMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.UpDownMessage;

                    /**
                     * Decodes an UpDownMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpDownMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.UpDownMessage;

                    /**
                     * Verifies an UpDownMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpDownMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpDownMessage
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.UpDownMessage;

                    /**
                     * Creates a plain object from an UpDownMessage message. Also converts values to other types if specified.
                     * @param message UpDownMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.UpDownMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpDownMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HeartBeat. */
                interface IHeartBeat {

                    /** HeartBeat id */
                    id?: (number|Long|null);

                    /** HeartBeat heartBeatType */
                    heartBeatType?: (com.raven.common.protos.HeartBeatType|null);
                }

                /** Represents a HeartBeat. */
                class HeartBeat implements IHeartBeat {

                    /**
                     * Constructs a new HeartBeat.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IHeartBeat);

                    /** HeartBeat id. */
                    public id: (number|Long);

                    /** HeartBeat heartBeatType. */
                    public heartBeatType: com.raven.common.protos.HeartBeatType;

                    /**
                     * Creates a new HeartBeat instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HeartBeat instance
                     */
                    public static create(properties?: com.raven.common.protos.IHeartBeat): com.raven.common.protos.HeartBeat;

                    /**
                     * Encodes the specified HeartBeat message. Does not implicitly {@link com.raven.common.protos.HeartBeat.verify|verify} messages.
                     * @param message HeartBeat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HeartBeat message, length delimited. Does not implicitly {@link com.raven.common.protos.HeartBeat.verify|verify} messages.
                     * @param message HeartBeat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HeartBeat message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HeartBeat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.HeartBeat;

                    /**
                     * Decodes a HeartBeat message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HeartBeat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.HeartBeat;

                    /**
                     * Verifies a HeartBeat message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HeartBeat message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HeartBeat
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.HeartBeat;

                    /**
                     * Creates a plain object from a HeartBeat message. Also converts values to other types if specified.
                     * @param message HeartBeat
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.HeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HeartBeat to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** HeartBeatType enum. */
                enum HeartBeatType {
                    PING = 0,
                    PONG = 1
                }

                /** Properties of a MessageAck. */
                interface IMessageAck {

                    /** MessageAck id */
                    id?: (number|Long|null);

                    /** MessageAck cid */
                    cid?: (number|Long|null);

                    /** MessageAck targetUid */
                    targetUid?: (string|null);

                    /** MessageAck converId */
                    converId?: (string|null);

                    /** MessageAck time */
                    time?: (number|Long|null);

                    /** MessageAck code */
                    code?: (com.raven.common.protos.Code|null);
                }

                /** Represents a MessageAck. */
                class MessageAck implements IMessageAck {

                    /**
                     * Constructs a new MessageAck.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IMessageAck);

                    /** MessageAck id. */
                    public id: (number|Long);

                    /** MessageAck cid. */
                    public cid: (number|Long);

                    /** MessageAck targetUid. */
                    public targetUid: string;

                    /** MessageAck converId. */
                    public converId: string;

                    /** MessageAck time. */
                    public time: (number|Long);

                    /** MessageAck code. */
                    public code: com.raven.common.protos.Code;

                    /**
                     * Creates a new MessageAck instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageAck instance
                     */
                    public static create(properties?: com.raven.common.protos.IMessageAck): com.raven.common.protos.MessageAck;

                    /**
                     * Encodes the specified MessageAck message. Does not implicitly {@link com.raven.common.protos.MessageAck.verify|verify} messages.
                     * @param message MessageAck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IMessageAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageAck message, length delimited. Does not implicitly {@link com.raven.common.protos.MessageAck.verify|verify} messages.
                     * @param message MessageAck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IMessageAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageAck message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.MessageAck;

                    /**
                     * Decodes a MessageAck message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessageAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.MessageAck;

                    /**
                     * Verifies a MessageAck message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageAck message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageAck
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.MessageAck;

                    /**
                     * Creates a plain object from a MessageAck message. Also converts values to other types if specified.
                     * @param message MessageAck
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.MessageAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageAck to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Code enum. */
                enum Code {
                    SUCCESS = 0,
                    CLIENT_ID_REPEAT = 1,
                    CONVER_TYPE_INVALID = 2,
                    KAFKA_ERROR = 3,
                    CONVER_ID_INVALID = 4,
                    NO_TARGET = 5,
                    TOKEN_INVALID = 6,
                    OPERATION_TYPE_INVALID = 7
                }

                /** ConverType enum. */
                enum ConverType {
                    SINGLE = 0,
                    GROUP = 1
                }

                /** Properties of a MessageContent. */
                interface IMessageContent {

                    /** MessageContent id */
                    id?: (number|Long|null);

                    /** MessageContent uid */
                    uid?: (string|null);

                    /** MessageContent type */
                    type?: (com.raven.common.protos.MessageType|null);

                    /** MessageContent content */
                    content?: (string|null);

                    /** MessageContent time */
                    time?: (number|Long|null);
                }

                /** Represents a MessageContent. */
                class MessageContent implements IMessageContent {

                    /**
                     * Constructs a new MessageContent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IMessageContent);

                    /** MessageContent id. */
                    public id: (number|Long);

                    /** MessageContent uid. */
                    public uid: string;

                    /** MessageContent type. */
                    public type: com.raven.common.protos.MessageType;

                    /** MessageContent content. */
                    public content: string;

                    /** MessageContent time. */
                    public time: (number|Long);

                    /**
                     * Creates a new MessageContent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageContent instance
                     */
                    public static create(properties?: com.raven.common.protos.IMessageContent): com.raven.common.protos.MessageContent;

                    /**
                     * Encodes the specified MessageContent message. Does not implicitly {@link com.raven.common.protos.MessageContent.verify|verify} messages.
                     * @param message MessageContent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IMessageContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageContent message, length delimited. Does not implicitly {@link com.raven.common.protos.MessageContent.verify|verify} messages.
                     * @param message MessageContent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IMessageContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageContent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.MessageContent;

                    /**
                     * Decodes a MessageContent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessageContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.MessageContent;

                    /**
                     * Verifies a MessageContent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageContent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageContent
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.MessageContent;

                    /**
                     * Creates a plain object from a MessageContent message. Also converts values to other types if specified.
                     * @param message MessageContent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.MessageContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageContent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** MessageType enum. */
                enum MessageType {
                    TEXT = 0,
                    PICTURE = 1,
                    VOICE = 2,
                    VIDEO = 3
                }

                /** Properties of a HisMessagesReq. */
                interface IHisMessagesReq {

                    /** HisMessagesReq id */
                    id?: (number|Long|null);

                    /** HisMessagesReq converId */
                    converId?: (string|null);

                    /** HisMessagesReq beginId */
                    beginId?: (number|Long|null);
                }

                /** Represents a HisMessagesReq. */
                class HisMessagesReq implements IHisMessagesReq {

                    /**
                     * Constructs a new HisMessagesReq.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IHisMessagesReq);

                    /** HisMessagesReq id. */
                    public id: (number|Long);

                    /** HisMessagesReq converId. */
                    public converId: string;

                    /** HisMessagesReq beginId. */
                    public beginId: (number|Long);

                    /**
                     * Creates a new HisMessagesReq instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HisMessagesReq instance
                     */
                    public static create(properties?: com.raven.common.protos.IHisMessagesReq): com.raven.common.protos.HisMessagesReq;

                    /**
                     * Encodes the specified HisMessagesReq message. Does not implicitly {@link com.raven.common.protos.HisMessagesReq.verify|verify} messages.
                     * @param message HisMessagesReq message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IHisMessagesReq, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HisMessagesReq message, length delimited. Does not implicitly {@link com.raven.common.protos.HisMessagesReq.verify|verify} messages.
                     * @param message HisMessagesReq message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IHisMessagesReq, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HisMessagesReq message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HisMessagesReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.HisMessagesReq;

                    /**
                     * Decodes a HisMessagesReq message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HisMessagesReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.HisMessagesReq;

                    /**
                     * Verifies a HisMessagesReq message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HisMessagesReq message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HisMessagesReq
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.HisMessagesReq;

                    /**
                     * Creates a plain object from a HisMessagesReq message. Also converts values to other types if specified.
                     * @param message HisMessagesReq
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.HisMessagesReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HisMessagesReq to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HisMessagesAck. */
                interface IHisMessagesAck {

                    /** HisMessagesAck id */
                    id?: (number|Long|null);

                    /** HisMessagesAck converId */
                    converId?: (string|null);

                    /** HisMessagesAck messageList */
                    messageList?: (com.raven.common.protos.IMessageContent[]|null);

                    /** HisMessagesAck unReadCount */
                    unReadCount?: (number|Long|null);
                }

                /** Represents a HisMessagesAck. */
                class HisMessagesAck implements IHisMessagesAck {

                    /**
                     * Constructs a new HisMessagesAck.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IHisMessagesAck);

                    /** HisMessagesAck id. */
                    public id: (number|Long);

                    /** HisMessagesAck converId. */
                    public converId: string;

                    /** HisMessagesAck messageList. */
                    public messageList: com.raven.common.protos.IMessageContent[];

                    /** HisMessagesAck unReadCount. */
                    public unReadCount: (number|Long);

                    /**
                     * Creates a new HisMessagesAck instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HisMessagesAck instance
                     */
                    public static create(properties?: com.raven.common.protos.IHisMessagesAck): com.raven.common.protos.HisMessagesAck;

                    /**
                     * Encodes the specified HisMessagesAck message. Does not implicitly {@link com.raven.common.protos.HisMessagesAck.verify|verify} messages.
                     * @param message HisMessagesAck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IHisMessagesAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HisMessagesAck message, length delimited. Does not implicitly {@link com.raven.common.protos.HisMessagesAck.verify|verify} messages.
                     * @param message HisMessagesAck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IHisMessagesAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HisMessagesAck message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HisMessagesAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.HisMessagesAck;

                    /**
                     * Decodes a HisMessagesAck message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HisMessagesAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.HisMessagesAck;

                    /**
                     * Verifies a HisMessagesAck message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HisMessagesAck message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HisMessagesAck
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.HisMessagesAck;

                    /**
                     * Creates a plain object from a HisMessagesAck message. Also converts values to other types if specified.
                     * @param message HisMessagesAck
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.HisMessagesAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HisMessagesAck to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConverReq. */
                interface IConverReq {

                    /** ConverReq id */
                    id?: (number|Long|null);

                    /** ConverReq type */
                    type?: (com.raven.common.protos.OperationType|null);

                    /** ConverReq conversationId */
                    conversationId?: (string|null);
                }

                /** Represents a ConverReq. */
                class ConverReq implements IConverReq {

                    /**
                     * Constructs a new ConverReq.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IConverReq);

                    /** ConverReq id. */
                    public id: (number|Long);

                    /** ConverReq type. */
                    public type: com.raven.common.protos.OperationType;

                    /** ConverReq conversationId. */
                    public conversationId: string;

                    /**
                     * Creates a new ConverReq instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConverReq instance
                     */
                    public static create(properties?: com.raven.common.protos.IConverReq): com.raven.common.protos.ConverReq;

                    /**
                     * Encodes the specified ConverReq message. Does not implicitly {@link com.raven.common.protos.ConverReq.verify|verify} messages.
                     * @param message ConverReq message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IConverReq, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConverReq message, length delimited. Does not implicitly {@link com.raven.common.protos.ConverReq.verify|verify} messages.
                     * @param message ConverReq message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IConverReq, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConverReq message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConverReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.ConverReq;

                    /**
                     * Decodes a ConverReq message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConverReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.ConverReq;

                    /**
                     * Verifies a ConverReq message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConverReq message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConverReq
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.ConverReq;

                    /**
                     * Creates a plain object from a ConverReq message. Also converts values to other types if specified.
                     * @param message ConverReq
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.ConverReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConverReq to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** OperationType enum. */
                enum OperationType {
                    DETAIL = 0,
                    ALL = 1
                }

                /** Properties of a ConverAck. */
                interface IConverAck {

                    /** ConverAck id */
                    id?: (number|Long|null);

                    /** ConverAck code */
                    code?: (com.raven.common.protos.Code|null);

                    /** ConverAck time */
                    time?: (number|Long|null);

                    /** ConverAck converInfo */
                    converInfo?: (com.raven.common.protos.IConverInfo|null);

                    /** ConverAck converList */
                    converList?: (com.raven.common.protos.IConverInfo[]|null);
                }

                /** Represents a ConverAck. */
                class ConverAck implements IConverAck {

                    /**
                     * Constructs a new ConverAck.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IConverAck);

                    /** ConverAck id. */
                    public id: (number|Long);

                    /** ConverAck code. */
                    public code: com.raven.common.protos.Code;

                    /** ConverAck time. */
                    public time: (number|Long);

                    /** ConverAck converInfo. */
                    public converInfo?: (com.raven.common.protos.IConverInfo|null);

                    /** ConverAck converList. */
                    public converList: com.raven.common.protos.IConverInfo[];

                    /**
                     * Creates a new ConverAck instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConverAck instance
                     */
                    public static create(properties?: com.raven.common.protos.IConverAck): com.raven.common.protos.ConverAck;

                    /**
                     * Encodes the specified ConverAck message. Does not implicitly {@link com.raven.common.protos.ConverAck.verify|verify} messages.
                     * @param message ConverAck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IConverAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConverAck message, length delimited. Does not implicitly {@link com.raven.common.protos.ConverAck.verify|verify} messages.
                     * @param message ConverAck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IConverAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConverAck message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConverAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.ConverAck;

                    /**
                     * Decodes a ConverAck message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConverAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.ConverAck;

                    /**
                     * Verifies a ConverAck message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConverAck message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConverAck
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.ConverAck;

                    /**
                     * Creates a plain object from a ConverAck message. Also converts values to other types if specified.
                     * @param message ConverAck
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.ConverAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConverAck to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConverInfo. */
                interface IConverInfo {

                    /** ConverInfo converId */
                    converId?: (string|null);

                    /** ConverInfo type */
                    type?: (com.raven.common.protos.ConverType|null);

                    /** ConverInfo uidList */
                    uidList?: (string[]|null);

                    /** ConverInfo groupId */
                    groupId?: (string|null);

                    /** ConverInfo readMsgId */
                    readMsgId?: (number|Long|null);

                    /** ConverInfo lastContent */
                    lastContent?: (com.raven.common.protos.IMessageContent|null);
                }

                /** Represents a ConverInfo. */
                class ConverInfo implements IConverInfo {

                    /**
                     * Constructs a new ConverInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.IConverInfo);

                    /** ConverInfo converId. */
                    public converId: string;

                    /** ConverInfo type. */
                    public type: com.raven.common.protos.ConverType;

                    /** ConverInfo uidList. */
                    public uidList: string[];

                    /** ConverInfo groupId. */
                    public groupId: string;

                    /** ConverInfo readMsgId. */
                    public readMsgId: (number|Long);

                    /** ConverInfo lastContent. */
                    public lastContent?: (com.raven.common.protos.IMessageContent|null);

                    /**
                     * Creates a new ConverInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConverInfo instance
                     */
                    public static create(properties?: com.raven.common.protos.IConverInfo): com.raven.common.protos.ConverInfo;

                    /**
                     * Encodes the specified ConverInfo message. Does not implicitly {@link com.raven.common.protos.ConverInfo.verify|verify} messages.
                     * @param message ConverInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.IConverInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConverInfo message, length delimited. Does not implicitly {@link com.raven.common.protos.ConverInfo.verify|verify} messages.
                     * @param message ConverInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.IConverInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConverInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConverInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.ConverInfo;

                    /**
                     * Decodes a ConverInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConverInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.ConverInfo;

                    /**
                     * Verifies a ConverInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConverInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConverInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.ConverInfo;

                    /**
                     * Creates a plain object from a ConverInfo message. Also converts values to other types if specified.
                     * @param message ConverInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.ConverInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConverInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NotifyMessage. */
                interface INotifyMessage {

                    /** NotifyMessage id */
                    id?: (number|Long|null);

                    /** NotifyMessage type */
                    type?: (string|null);

                    /** NotifyMessage targetUid */
                    targetUid?: (string|null);

                    /** NotifyMessage content */
                    content?: (string|null);

                    /** NotifyMessage time */
                    time?: (number|Long|null);
                }

                /** Represents a NotifyMessage. */
                class NotifyMessage implements INotifyMessage {

                    /**
                     * Constructs a new NotifyMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.raven.common.protos.INotifyMessage);

                    /** NotifyMessage id. */
                    public id: (number|Long);

                    /** NotifyMessage type. */
                    public type: string;

                    /** NotifyMessage targetUid. */
                    public targetUid: string;

                    /** NotifyMessage content. */
                    public content: string;

                    /** NotifyMessage time. */
                    public time: (number|Long);

                    /**
                     * Creates a new NotifyMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NotifyMessage instance
                     */
                    public static create(properties?: com.raven.common.protos.INotifyMessage): com.raven.common.protos.NotifyMessage;

                    /**
                     * Encodes the specified NotifyMessage message. Does not implicitly {@link com.raven.common.protos.NotifyMessage.verify|verify} messages.
                     * @param message NotifyMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.raven.common.protos.INotifyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NotifyMessage message, length delimited. Does not implicitly {@link com.raven.common.protos.NotifyMessage.verify|verify} messages.
                     * @param message NotifyMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.raven.common.protos.INotifyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NotifyMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NotifyMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.raven.common.protos.NotifyMessage;

                    /**
                     * Decodes a NotifyMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NotifyMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.raven.common.protos.NotifyMessage;

                    /**
                     * Verifies a NotifyMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NotifyMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NotifyMessage
                     */
                    public static fromObject(object: { [k: string]: any }): com.raven.common.protos.NotifyMessage;

                    /**
                     * Creates a plain object from a NotifyMessage message. Also converts values to other types if specified.
                     * @param message NotifyMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.raven.common.protos.NotifyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NotifyMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
