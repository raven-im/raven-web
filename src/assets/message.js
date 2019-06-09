/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.raven = (function() {

        /**
         * Namespace raven.
         * @memberof com
         * @namespace
         */
        var raven = {};

        raven.common = (function() {

            /**
             * Namespace common.
             * @memberof com.raven
             * @namespace
             */
            var common = {};

            common.protos = (function() {

                /**
                 * Namespace protos.
                 * @memberof com.raven.common
                 * @namespace
                 */
                var protos = {};

                protos.RavenMessage = (function() {

                    /**
                     * Properties of a RavenMessage.
                     * @memberof com.raven.common.protos
                     * @interface IRavenMessage
                     * @property {com.raven.common.protos.RavenMessage.Type|null} [type] RavenMessage type
                     * @property {com.raven.common.protos.ILogin|null} [login] RavenMessage login
                     * @property {com.raven.common.protos.ILoginAck|null} [loginAck] RavenMessage loginAck
                     * @property {com.raven.common.protos.IServerInfo|null} [serverInfo] RavenMessage serverInfo
                     * @property {com.raven.common.protos.IUpDownMessage|null} [upDownMessage] RavenMessage upDownMessage
                     * @property {com.raven.common.protos.IHeartBeat|null} [heartBeat] RavenMessage heartBeat
                     * @property {com.raven.common.protos.IMessageAck|null} [messageAck] RavenMessage messageAck
                     * @property {com.raven.common.protos.IHisMessagesReq|null} [hisMessagesReq] RavenMessage hisMessagesReq
                     * @property {com.raven.common.protos.IHisMessagesAck|null} [hisMessagesAck] RavenMessage hisMessagesAck
                     * @property {com.raven.common.protos.INotifyMessage|null} [notifyMessage] RavenMessage notifyMessage
                     * @property {com.raven.common.protos.IConverReq|null} [converReq] RavenMessage converReq
                     * @property {com.raven.common.protos.IConverAck|null} [converAck] RavenMessage converAck
                     */

                    /**
                     * Constructs a new RavenMessage.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a RavenMessage.
                     * @implements IRavenMessage
                     * @constructor
                     * @param {com.raven.common.protos.IRavenMessage=} [properties] Properties to set
                     */
                    function RavenMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RavenMessage type.
                     * @member {com.raven.common.protos.RavenMessage.Type} type
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.type = 0;

                    /**
                     * RavenMessage login.
                     * @member {com.raven.common.protos.ILogin|null|undefined} login
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.login = null;

                    /**
                     * RavenMessage loginAck.
                     * @member {com.raven.common.protos.ILoginAck|null|undefined} loginAck
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.loginAck = null;

                    /**
                     * RavenMessage serverInfo.
                     * @member {com.raven.common.protos.IServerInfo|null|undefined} serverInfo
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.serverInfo = null;

                    /**
                     * RavenMessage upDownMessage.
                     * @member {com.raven.common.protos.IUpDownMessage|null|undefined} upDownMessage
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.upDownMessage = null;

                    /**
                     * RavenMessage heartBeat.
                     * @member {com.raven.common.protos.IHeartBeat|null|undefined} heartBeat
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.heartBeat = null;

                    /**
                     * RavenMessage messageAck.
                     * @member {com.raven.common.protos.IMessageAck|null|undefined} messageAck
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.messageAck = null;

                    /**
                     * RavenMessage hisMessagesReq.
                     * @member {com.raven.common.protos.IHisMessagesReq|null|undefined} hisMessagesReq
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.hisMessagesReq = null;

                    /**
                     * RavenMessage hisMessagesAck.
                     * @member {com.raven.common.protos.IHisMessagesAck|null|undefined} hisMessagesAck
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.hisMessagesAck = null;

                    /**
                     * RavenMessage notifyMessage.
                     * @member {com.raven.common.protos.INotifyMessage|null|undefined} notifyMessage
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.notifyMessage = null;

                    /**
                     * RavenMessage converReq.
                     * @member {com.raven.common.protos.IConverReq|null|undefined} converReq
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.converReq = null;

                    /**
                     * RavenMessage converAck.
                     * @member {com.raven.common.protos.IConverAck|null|undefined} converAck
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    RavenMessage.prototype.converAck = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * RavenMessage data.
                     * @member {"login"|"loginAck"|"serverInfo"|"upDownMessage"|"heartBeat"|"messageAck"|"hisMessagesReq"|"hisMessagesAck"|"notifyMessage"|"converReq"|"converAck"|undefined} data
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     */
                    Object.defineProperty(RavenMessage.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["login", "loginAck", "serverInfo", "upDownMessage", "heartBeat", "messageAck", "hisMessagesReq", "hisMessagesAck", "notifyMessage", "converReq", "converAck"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new RavenMessage instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.RavenMessage
                     * @static
                     * @param {com.raven.common.protos.IRavenMessage=} [properties] Properties to set
                     * @returns {com.raven.common.protos.RavenMessage} RavenMessage instance
                     */
                    RavenMessage.create = function create(properties) {
                        return new RavenMessage(properties);
                    };

                    /**
                     * Encodes the specified RavenMessage message. Does not implicitly {@link com.raven.common.protos.RavenMessage.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.RavenMessage
                     * @static
                     * @param {com.raven.common.protos.IRavenMessage} message RavenMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RavenMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                        if (message.login != null && message.hasOwnProperty("login"))
                            $root.com.raven.common.protos.Login.encode(message.login, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.loginAck != null && message.hasOwnProperty("loginAck"))
                            $root.com.raven.common.protos.LoginAck.encode(message.loginAck, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.serverInfo != null && message.hasOwnProperty("serverInfo"))
                            $root.com.raven.common.protos.ServerInfo.encode(message.serverInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.upDownMessage != null && message.hasOwnProperty("upDownMessage"))
                            $root.com.raven.common.protos.UpDownMessage.encode(message.upDownMessage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.heartBeat != null && message.hasOwnProperty("heartBeat"))
                            $root.com.raven.common.protos.HeartBeat.encode(message.heartBeat, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.messageAck != null && message.hasOwnProperty("messageAck"))
                            $root.com.raven.common.protos.MessageAck.encode(message.messageAck, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.hisMessagesReq != null && message.hasOwnProperty("hisMessagesReq"))
                            $root.com.raven.common.protos.HisMessagesReq.encode(message.hisMessagesReq, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.hisMessagesAck != null && message.hasOwnProperty("hisMessagesAck"))
                            $root.com.raven.common.protos.HisMessagesAck.encode(message.hisMessagesAck, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.notifyMessage != null && message.hasOwnProperty("notifyMessage"))
                            $root.com.raven.common.protos.NotifyMessage.encode(message.notifyMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.converReq != null && message.hasOwnProperty("converReq"))
                            $root.com.raven.common.protos.ConverReq.encode(message.converReq, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.converAck != null && message.hasOwnProperty("converAck"))
                            $root.com.raven.common.protos.ConverAck.encode(message.converAck, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified RavenMessage message, length delimited. Does not implicitly {@link com.raven.common.protos.RavenMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.RavenMessage
                     * @static
                     * @param {com.raven.common.protos.IRavenMessage} message RavenMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RavenMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RavenMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.RavenMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.RavenMessage} RavenMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RavenMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.RavenMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.type = reader.int32();
                                break;
                            case 2:
                                message.login = $root.com.raven.common.protos.Login.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.loginAck = $root.com.raven.common.protos.LoginAck.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.serverInfo = $root.com.raven.common.protos.ServerInfo.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.upDownMessage = $root.com.raven.common.protos.UpDownMessage.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.heartBeat = $root.com.raven.common.protos.HeartBeat.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.messageAck = $root.com.raven.common.protos.MessageAck.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.hisMessagesReq = $root.com.raven.common.protos.HisMessagesReq.decode(reader, reader.uint32());
                                break;
                            case 9:
                                message.hisMessagesAck = $root.com.raven.common.protos.HisMessagesAck.decode(reader, reader.uint32());
                                break;
                            case 10:
                                message.notifyMessage = $root.com.raven.common.protos.NotifyMessage.decode(reader, reader.uint32());
                                break;
                            case 11:
                                message.converReq = $root.com.raven.common.protos.ConverReq.decode(reader, reader.uint32());
                                break;
                            case 12:
                                message.converAck = $root.com.raven.common.protos.ConverAck.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RavenMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.RavenMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.RavenMessage} RavenMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RavenMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RavenMessage message.
                     * @function verify
                     * @memberof com.raven.common.protos.RavenMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RavenMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 11:
                            case 10:
                                break;
                            }
                        if (message.login != null && message.hasOwnProperty("login")) {
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.Login.verify(message.login);
                                if (error)
                                    return "login." + error;
                            }
                        }
                        if (message.loginAck != null && message.hasOwnProperty("loginAck")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.LoginAck.verify(message.loginAck);
                                if (error)
                                    return "loginAck." + error;
                            }
                        }
                        if (message.serverInfo != null && message.hasOwnProperty("serverInfo")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.ServerInfo.verify(message.serverInfo);
                                if (error)
                                    return "serverInfo." + error;
                            }
                        }
                        if (message.upDownMessage != null && message.hasOwnProperty("upDownMessage")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.UpDownMessage.verify(message.upDownMessage);
                                if (error)
                                    return "upDownMessage." + error;
                            }
                        }
                        if (message.heartBeat != null && message.hasOwnProperty("heartBeat")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.HeartBeat.verify(message.heartBeat);
                                if (error)
                                    return "heartBeat." + error;
                            }
                        }
                        if (message.messageAck != null && message.hasOwnProperty("messageAck")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.MessageAck.verify(message.messageAck);
                                if (error)
                                    return "messageAck." + error;
                            }
                        }
                        if (message.hisMessagesReq != null && message.hasOwnProperty("hisMessagesReq")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.HisMessagesReq.verify(message.hisMessagesReq);
                                if (error)
                                    return "hisMessagesReq." + error;
                            }
                        }
                        if (message.hisMessagesAck != null && message.hasOwnProperty("hisMessagesAck")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.HisMessagesAck.verify(message.hisMessagesAck);
                                if (error)
                                    return "hisMessagesAck." + error;
                            }
                        }
                        if (message.notifyMessage != null && message.hasOwnProperty("notifyMessage")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.NotifyMessage.verify(message.notifyMessage);
                                if (error)
                                    return "notifyMessage." + error;
                            }
                        }
                        if (message.converReq != null && message.hasOwnProperty("converReq")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.ConverReq.verify(message.converReq);
                                if (error)
                                    return "converReq." + error;
                            }
                        }
                        if (message.converAck != null && message.hasOwnProperty("converAck")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.com.raven.common.protos.ConverAck.verify(message.converAck);
                                if (error)
                                    return "converAck." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a RavenMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.RavenMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.RavenMessage} RavenMessage
                     */
                    RavenMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.RavenMessage)
                            return object;
                        var message = new $root.com.raven.common.protos.RavenMessage();
                        switch (object.type) {
                        case "Login":
                        case 0:
                            message.type = 0;
                            break;
                        case "LoginAck":
                        case 1:
                            message.type = 1;
                            break;
                        case "ServerInfo":
                        case 2:
                            message.type = 2;
                            break;
                        case "UpDownMessage":
                        case 3:
                            message.type = 3;
                            break;
                        case "HeartBeat":
                        case 4:
                            message.type = 4;
                            break;
                        case "MessageAck":
                        case 5:
                            message.type = 5;
                            break;
                        case "HisMessagesReq":
                        case 6:
                            message.type = 6;
                            break;
                        case "HisMessagesAck":
                        case 7:
                            message.type = 7;
                            break;
                        case "NotifyMessage":
                        case 8:
                            message.type = 8;
                            break;
                        case "ConverReq":
                        case 11:
                            message.type = 11;
                            break;
                        case "ConverAck":
                        case 10:
                            message.type = 10;
                            break;
                        }
                        if (object.login != null) {
                            if (typeof object.login !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.login: object expected");
                            message.login = $root.com.raven.common.protos.Login.fromObject(object.login);
                        }
                        if (object.loginAck != null) {
                            if (typeof object.loginAck !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.loginAck: object expected");
                            message.loginAck = $root.com.raven.common.protos.LoginAck.fromObject(object.loginAck);
                        }
                        if (object.serverInfo != null) {
                            if (typeof object.serverInfo !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.serverInfo: object expected");
                            message.serverInfo = $root.com.raven.common.protos.ServerInfo.fromObject(object.serverInfo);
                        }
                        if (object.upDownMessage != null) {
                            if (typeof object.upDownMessage !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.upDownMessage: object expected");
                            message.upDownMessage = $root.com.raven.common.protos.UpDownMessage.fromObject(object.upDownMessage);
                        }
                        if (object.heartBeat != null) {
                            if (typeof object.heartBeat !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.heartBeat: object expected");
                            message.heartBeat = $root.com.raven.common.protos.HeartBeat.fromObject(object.heartBeat);
                        }
                        if (object.messageAck != null) {
                            if (typeof object.messageAck !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.messageAck: object expected");
                            message.messageAck = $root.com.raven.common.protos.MessageAck.fromObject(object.messageAck);
                        }
                        if (object.hisMessagesReq != null) {
                            if (typeof object.hisMessagesReq !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.hisMessagesReq: object expected");
                            message.hisMessagesReq = $root.com.raven.common.protos.HisMessagesReq.fromObject(object.hisMessagesReq);
                        }
                        if (object.hisMessagesAck != null) {
                            if (typeof object.hisMessagesAck !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.hisMessagesAck: object expected");
                            message.hisMessagesAck = $root.com.raven.common.protos.HisMessagesAck.fromObject(object.hisMessagesAck);
                        }
                        if (object.notifyMessage != null) {
                            if (typeof object.notifyMessage !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.notifyMessage: object expected");
                            message.notifyMessage = $root.com.raven.common.protos.NotifyMessage.fromObject(object.notifyMessage);
                        }
                        if (object.converReq != null) {
                            if (typeof object.converReq !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.converReq: object expected");
                            message.converReq = $root.com.raven.common.protos.ConverReq.fromObject(object.converReq);
                        }
                        if (object.converAck != null) {
                            if (typeof object.converAck !== "object")
                                throw TypeError(".com.raven.common.protos.RavenMessage.converAck: object expected");
                            message.converAck = $root.com.raven.common.protos.ConverAck.fromObject(object.converAck);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a RavenMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.RavenMessage
                     * @static
                     * @param {com.raven.common.protos.RavenMessage} message RavenMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RavenMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.type = options.enums === String ? "Login" : 0;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.com.raven.common.protos.RavenMessage.Type[message.type] : message.type;
                        if (message.login != null && message.hasOwnProperty("login")) {
                            object.login = $root.com.raven.common.protos.Login.toObject(message.login, options);
                            if (options.oneofs)
                                object.data = "login";
                        }
                        if (message.loginAck != null && message.hasOwnProperty("loginAck")) {
                            object.loginAck = $root.com.raven.common.protos.LoginAck.toObject(message.loginAck, options);
                            if (options.oneofs)
                                object.data = "loginAck";
                        }
                        if (message.serverInfo != null && message.hasOwnProperty("serverInfo")) {
                            object.serverInfo = $root.com.raven.common.protos.ServerInfo.toObject(message.serverInfo, options);
                            if (options.oneofs)
                                object.data = "serverInfo";
                        }
                        if (message.upDownMessage != null && message.hasOwnProperty("upDownMessage")) {
                            object.upDownMessage = $root.com.raven.common.protos.UpDownMessage.toObject(message.upDownMessage, options);
                            if (options.oneofs)
                                object.data = "upDownMessage";
                        }
                        if (message.heartBeat != null && message.hasOwnProperty("heartBeat")) {
                            object.heartBeat = $root.com.raven.common.protos.HeartBeat.toObject(message.heartBeat, options);
                            if (options.oneofs)
                                object.data = "heartBeat";
                        }
                        if (message.messageAck != null && message.hasOwnProperty("messageAck")) {
                            object.messageAck = $root.com.raven.common.protos.MessageAck.toObject(message.messageAck, options);
                            if (options.oneofs)
                                object.data = "messageAck";
                        }
                        if (message.hisMessagesReq != null && message.hasOwnProperty("hisMessagesReq")) {
                            object.hisMessagesReq = $root.com.raven.common.protos.HisMessagesReq.toObject(message.hisMessagesReq, options);
                            if (options.oneofs)
                                object.data = "hisMessagesReq";
                        }
                        if (message.hisMessagesAck != null && message.hasOwnProperty("hisMessagesAck")) {
                            object.hisMessagesAck = $root.com.raven.common.protos.HisMessagesAck.toObject(message.hisMessagesAck, options);
                            if (options.oneofs)
                                object.data = "hisMessagesAck";
                        }
                        if (message.notifyMessage != null && message.hasOwnProperty("notifyMessage")) {
                            object.notifyMessage = $root.com.raven.common.protos.NotifyMessage.toObject(message.notifyMessage, options);
                            if (options.oneofs)
                                object.data = "notifyMessage";
                        }
                        if (message.converReq != null && message.hasOwnProperty("converReq")) {
                            object.converReq = $root.com.raven.common.protos.ConverReq.toObject(message.converReq, options);
                            if (options.oneofs)
                                object.data = "converReq";
                        }
                        if (message.converAck != null && message.hasOwnProperty("converAck")) {
                            object.converAck = $root.com.raven.common.protos.ConverAck.toObject(message.converAck, options);
                            if (options.oneofs)
                                object.data = "converAck";
                        }
                        return object;
                    };

                    /**
                     * Converts this RavenMessage to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.RavenMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RavenMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Type enum.
                     * @name com.raven.common.protos.RavenMessage.Type
                     * @enum {string}
                     * @property {number} Login=0 Login value
                     * @property {number} LoginAck=1 LoginAck value
                     * @property {number} ServerInfo=2 ServerInfo value
                     * @property {number} UpDownMessage=3 UpDownMessage value
                     * @property {number} HeartBeat=4 HeartBeat value
                     * @property {number} MessageAck=5 MessageAck value
                     * @property {number} HisMessagesReq=6 HisMessagesReq value
                     * @property {number} HisMessagesAck=7 HisMessagesAck value
                     * @property {number} NotifyMessage=8 NotifyMessage value
                     * @property {number} ConverReq=11 ConverReq value
                     * @property {number} ConverAck=10 ConverAck value
                     */
                    RavenMessage.Type = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Login"] = 0;
                        values[valuesById[1] = "LoginAck"] = 1;
                        values[valuesById[2] = "ServerInfo"] = 2;
                        values[valuesById[3] = "UpDownMessage"] = 3;
                        values[valuesById[4] = "HeartBeat"] = 4;
                        values[valuesById[5] = "MessageAck"] = 5;
                        values[valuesById[6] = "HisMessagesReq"] = 6;
                        values[valuesById[7] = "HisMessagesAck"] = 7;
                        values[valuesById[8] = "NotifyMessage"] = 8;
                        values[valuesById[11] = "ConverReq"] = 11;
                        values[valuesById[10] = "ConverAck"] = 10;
                        return values;
                    })();

                    return RavenMessage;
                })();

                protos.Login = (function() {

                    /**
                     * Properties of a Login.
                     * @memberof com.raven.common.protos
                     * @interface ILogin
                     * @property {number|Long|null} [id] Login id
                     * @property {string|null} [uid] Login uid
                     * @property {string|null} [token] Login token
                     */

                    /**
                     * Constructs a new Login.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a Login.
                     * @implements ILogin
                     * @constructor
                     * @param {com.raven.common.protos.ILogin=} [properties] Properties to set
                     */
                    function Login(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Login id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.Login
                     * @instance
                     */
                    Login.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Login uid.
                     * @member {string} uid
                     * @memberof com.raven.common.protos.Login
                     * @instance
                     */
                    Login.prototype.uid = "";

                    /**
                     * Login token.
                     * @member {string} token
                     * @memberof com.raven.common.protos.Login
                     * @instance
                     */
                    Login.prototype.token = "";

                    /**
                     * Creates a new Login instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.Login
                     * @static
                     * @param {com.raven.common.protos.ILogin=} [properties] Properties to set
                     * @returns {com.raven.common.protos.Login} Login instance
                     */
                    Login.create = function create(properties) {
                        return new Login(properties);
                    };

                    /**
                     * Encodes the specified Login message. Does not implicitly {@link com.raven.common.protos.Login.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.Login
                     * @static
                     * @param {com.raven.common.protos.ILogin} message Login message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Login.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
                        if (message.token != null && message.hasOwnProperty("token"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
                        return writer;
                    };

                    /**
                     * Encodes the specified Login message, length delimited. Does not implicitly {@link com.raven.common.protos.Login.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.Login
                     * @static
                     * @param {com.raven.common.protos.ILogin} message Login message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Login.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Login message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.Login
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.Login} Login
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Login.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.Login();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.uid = reader.string();
                                break;
                            case 3:
                                message.token = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Login message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.Login
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.Login} Login
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Login.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Login message.
                     * @function verify
                     * @memberof com.raven.common.protos.Login
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Login.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            if (!$util.isString(message.uid))
                                return "uid: string expected";
                        if (message.token != null && message.hasOwnProperty("token"))
                            if (!$util.isString(message.token))
                                return "token: string expected";
                        return null;
                    };

                    /**
                     * Creates a Login message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.Login
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.Login} Login
                     */
                    Login.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.Login)
                            return object;
                        var message = new $root.com.raven.common.protos.Login();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.uid != null)
                            message.uid = String(object.uid);
                        if (object.token != null)
                            message.token = String(object.token);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Login message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.Login
                     * @static
                     * @param {com.raven.common.protos.Login} message Login
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Login.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.uid = "";
                            object.token = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            object.uid = message.uid;
                        if (message.token != null && message.hasOwnProperty("token"))
                            object.token = message.token;
                        return object;
                    };

                    /**
                     * Converts this Login to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.Login
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Login.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Login;
                })();

                protos.LoginAck = (function() {

                    /**
                     * Properties of a LoginAck.
                     * @memberof com.raven.common.protos
                     * @interface ILoginAck
                     * @property {number|Long|null} [id] LoginAck id
                     * @property {com.raven.common.protos.Code|null} [code] LoginAck code
                     * @property {string|null} [msg] LoginAck msg
                     * @property {number|Long|null} [time] LoginAck time
                     */

                    /**
                     * Constructs a new LoginAck.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a LoginAck.
                     * @implements ILoginAck
                     * @constructor
                     * @param {com.raven.common.protos.ILoginAck=} [properties] Properties to set
                     */
                    function LoginAck(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LoginAck id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.LoginAck
                     * @instance
                     */
                    LoginAck.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * LoginAck code.
                     * @member {com.raven.common.protos.Code} code
                     * @memberof com.raven.common.protos.LoginAck
                     * @instance
                     */
                    LoginAck.prototype.code = 0;

                    /**
                     * LoginAck msg.
                     * @member {string} msg
                     * @memberof com.raven.common.protos.LoginAck
                     * @instance
                     */
                    LoginAck.prototype.msg = "";

                    /**
                     * LoginAck time.
                     * @member {number|Long} time
                     * @memberof com.raven.common.protos.LoginAck
                     * @instance
                     */
                    LoginAck.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new LoginAck instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.LoginAck
                     * @static
                     * @param {com.raven.common.protos.ILoginAck=} [properties] Properties to set
                     * @returns {com.raven.common.protos.LoginAck} LoginAck instance
                     */
                    LoginAck.create = function create(properties) {
                        return new LoginAck(properties);
                    };

                    /**
                     * Encodes the specified LoginAck message. Does not implicitly {@link com.raven.common.protos.LoginAck.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.LoginAck
                     * @static
                     * @param {com.raven.common.protos.ILoginAck} message LoginAck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginAck.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.code != null && message.hasOwnProperty("code"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                        if (message.msg != null && message.hasOwnProperty("msg"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
                        if (message.time != null && message.hasOwnProperty("time"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.time);
                        return writer;
                    };

                    /**
                     * Encodes the specified LoginAck message, length delimited. Does not implicitly {@link com.raven.common.protos.LoginAck.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.LoginAck
                     * @static
                     * @param {com.raven.common.protos.ILoginAck} message LoginAck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginAck.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LoginAck message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.LoginAck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.LoginAck} LoginAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginAck.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.LoginAck();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.code = reader.int32();
                                break;
                            case 3:
                                message.msg = reader.string();
                                break;
                            case 4:
                                message.time = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LoginAck message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.LoginAck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.LoginAck} LoginAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginAck.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LoginAck message.
                     * @function verify
                     * @memberof com.raven.common.protos.LoginAck
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LoginAck.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                break;
                            }
                        if (message.msg != null && message.hasOwnProperty("msg"))
                            if (!$util.isString(message.msg))
                                return "msg: string expected";
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                                return "time: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a LoginAck message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.LoginAck
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.LoginAck} LoginAck
                     */
                    LoginAck.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.LoginAck)
                            return object;
                        var message = new $root.com.raven.common.protos.LoginAck();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        switch (object.code) {
                        case "SUCCESS":
                        case 0:
                            message.code = 0;
                            break;
                        case "CLIENT_ID_REPEAT":
                        case 1:
                            message.code = 1;
                            break;
                        case "CONVER_TYPE_INVALID":
                        case 2:
                            message.code = 2;
                            break;
                        case "KAFKA_ERROR":
                        case 3:
                            message.code = 3;
                            break;
                        case "CONVER_ID_INVALID":
                        case 4:
                            message.code = 4;
                            break;
                        case "NO_TARGET":
                        case 5:
                            message.code = 5;
                            break;
                        case "TOKEN_INVALID":
                        case 6:
                            message.code = 6;
                            break;
                        case "OPERATION_TYPE_INVALID":
                        case 7:
                            message.code = 7;
                            break;
                        }
                        if (object.msg != null)
                            message.msg = String(object.msg);
                        if (object.time != null)
                            if ($util.Long)
                                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                            else if (typeof object.time === "string")
                                message.time = parseInt(object.time, 10);
                            else if (typeof object.time === "number")
                                message.time = object.time;
                            else if (typeof object.time === "object")
                                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a LoginAck message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.LoginAck
                     * @static
                     * @param {com.raven.common.protos.LoginAck} message LoginAck
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LoginAck.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.code = options.enums === String ? "SUCCESS" : 0;
                            object.msg = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.time = options.longs === String ? "0" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = options.enums === String ? $root.com.raven.common.protos.Code[message.code] : message.code;
                        if (message.msg != null && message.hasOwnProperty("msg"))
                            object.msg = message.msg;
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (typeof message.time === "number")
                                object.time = options.longs === String ? String(message.time) : message.time;
                            else
                                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                        return object;
                    };

                    /**
                     * Converts this LoginAck to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.LoginAck
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LoginAck.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LoginAck;
                })();

                protos.ServerInfo = (function() {

                    /**
                     * Properties of a ServerInfo.
                     * @memberof com.raven.common.protos
                     * @interface IServerInfo
                     * @property {number|Long|null} [id] ServerInfo id
                     * @property {string|null} [ip] ServerInfo ip
                     * @property {number|null} [port] ServerInfo port
                     */

                    /**
                     * Constructs a new ServerInfo.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a ServerInfo.
                     * @implements IServerInfo
                     * @constructor
                     * @param {com.raven.common.protos.IServerInfo=} [properties] Properties to set
                     */
                    function ServerInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ServerInfo id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.ServerInfo
                     * @instance
                     */
                    ServerInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * ServerInfo ip.
                     * @member {string} ip
                     * @memberof com.raven.common.protos.ServerInfo
                     * @instance
                     */
                    ServerInfo.prototype.ip = "";

                    /**
                     * ServerInfo port.
                     * @member {number} port
                     * @memberof com.raven.common.protos.ServerInfo
                     * @instance
                     */
                    ServerInfo.prototype.port = 0;

                    /**
                     * Creates a new ServerInfo instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.ServerInfo
                     * @static
                     * @param {com.raven.common.protos.IServerInfo=} [properties] Properties to set
                     * @returns {com.raven.common.protos.ServerInfo} ServerInfo instance
                     */
                    ServerInfo.create = function create(properties) {
                        return new ServerInfo(properties);
                    };

                    /**
                     * Encodes the specified ServerInfo message. Does not implicitly {@link com.raven.common.protos.ServerInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.ServerInfo
                     * @static
                     * @param {com.raven.common.protos.IServerInfo} message ServerInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ServerInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
                        if (message.port != null && message.hasOwnProperty("port"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.port);
                        return writer;
                    };

                    /**
                     * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link com.raven.common.protos.ServerInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.ServerInfo
                     * @static
                     * @param {com.raven.common.protos.IServerInfo} message ServerInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ServerInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.ServerInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.ServerInfo} ServerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ServerInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.ServerInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.ip = reader.string();
                                break;
                            case 3:
                                message.port = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.ServerInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.ServerInfo} ServerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ServerInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ServerInfo message.
                     * @function verify
                     * @memberof com.raven.common.protos.ServerInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ServerInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            if (!$util.isString(message.ip))
                                return "ip: string expected";
                        if (message.port != null && message.hasOwnProperty("port"))
                            if (!$util.isInteger(message.port))
                                return "port: integer expected";
                        return null;
                    };

                    /**
                     * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.ServerInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.ServerInfo} ServerInfo
                     */
                    ServerInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.ServerInfo)
                            return object;
                        var message = new $root.com.raven.common.protos.ServerInfo();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.ip != null)
                            message.ip = String(object.ip);
                        if (object.port != null)
                            message.port = object.port >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.ServerInfo
                     * @static
                     * @param {com.raven.common.protos.ServerInfo} message ServerInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ServerInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.ip = "";
                            object.port = 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            object.ip = message.ip;
                        if (message.port != null && message.hasOwnProperty("port"))
                            object.port = message.port;
                        return object;
                    };

                    /**
                     * Converts this ServerInfo to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.ServerInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ServerInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ServerInfo;
                })();

                protos.UpDownMessage = (function() {

                    /**
                     * Properties of an UpDownMessage.
                     * @memberof com.raven.common.protos
                     * @interface IUpDownMessage
                     * @property {number|Long|null} [id] UpDownMessage id
                     * @property {number|Long|null} [cid] UpDownMessage cid
                     * @property {string|null} [fromUid] UpDownMessage fromUid
                     * @property {string|null} [targetUid] UpDownMessage targetUid
                     * @property {string|null} [groupId] UpDownMessage groupId
                     * @property {string|null} [converId] UpDownMessage converId
                     * @property {com.raven.common.protos.ConverType|null} [converType] UpDownMessage converType
                     * @property {com.raven.common.protos.IMessageContent|null} [content] UpDownMessage content
                     */

                    /**
                     * Constructs a new UpDownMessage.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents an UpDownMessage.
                     * @implements IUpDownMessage
                     * @constructor
                     * @param {com.raven.common.protos.IUpDownMessage=} [properties] Properties to set
                     */
                    function UpDownMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpDownMessage id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     */
                    UpDownMessage.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * UpDownMessage cid.
                     * @member {number|Long} cid
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     */
                    UpDownMessage.prototype.cid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * UpDownMessage fromUid.
                     * @member {string} fromUid
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     */
                    UpDownMessage.prototype.fromUid = "";

                    /**
                     * UpDownMessage targetUid.
                     * @member {string} targetUid
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     */
                    UpDownMessage.prototype.targetUid = "";

                    /**
                     * UpDownMessage groupId.
                     * @member {string} groupId
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     */
                    UpDownMessage.prototype.groupId = "";

                    /**
                     * UpDownMessage converId.
                     * @member {string} converId
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     */
                    UpDownMessage.prototype.converId = "";

                    /**
                     * UpDownMessage converType.
                     * @member {com.raven.common.protos.ConverType} converType
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     */
                    UpDownMessage.prototype.converType = 0;

                    /**
                     * UpDownMessage content.
                     * @member {com.raven.common.protos.IMessageContent|null|undefined} content
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     */
                    UpDownMessage.prototype.content = null;

                    /**
                     * Creates a new UpDownMessage instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @static
                     * @param {com.raven.common.protos.IUpDownMessage=} [properties] Properties to set
                     * @returns {com.raven.common.protos.UpDownMessage} UpDownMessage instance
                     */
                    UpDownMessage.create = function create(properties) {
                        return new UpDownMessage(properties);
                    };

                    /**
                     * Encodes the specified UpDownMessage message. Does not implicitly {@link com.raven.common.protos.UpDownMessage.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @static
                     * @param {com.raven.common.protos.IUpDownMessage} message UpDownMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpDownMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.cid != null && message.hasOwnProperty("cid"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.cid);
                        if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.fromUid);
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.targetUid);
                        if (message.groupId != null && message.hasOwnProperty("groupId"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.groupId);
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.converId);
                        if (message.converType != null && message.hasOwnProperty("converType"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.converType);
                        if (message.content != null && message.hasOwnProperty("content"))
                            $root.com.raven.common.protos.MessageContent.encode(message.content, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified UpDownMessage message, length delimited. Does not implicitly {@link com.raven.common.protos.UpDownMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @static
                     * @param {com.raven.common.protos.IUpDownMessage} message UpDownMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpDownMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpDownMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.UpDownMessage} UpDownMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpDownMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.UpDownMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.cid = reader.uint64();
                                break;
                            case 3:
                                message.fromUid = reader.string();
                                break;
                            case 4:
                                message.targetUid = reader.string();
                                break;
                            case 5:
                                message.groupId = reader.string();
                                break;
                            case 6:
                                message.converId = reader.string();
                                break;
                            case 7:
                                message.converType = reader.int32();
                                break;
                            case 9:
                                message.content = $root.com.raven.common.protos.MessageContent.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpDownMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.UpDownMessage} UpDownMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpDownMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpDownMessage message.
                     * @function verify
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpDownMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.cid != null && message.hasOwnProperty("cid"))
                            if (!$util.isInteger(message.cid) && !(message.cid && $util.isInteger(message.cid.low) && $util.isInteger(message.cid.high)))
                                return "cid: integer|Long expected";
                        if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                            if (!$util.isString(message.fromUid))
                                return "fromUid: string expected";
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            if (!$util.isString(message.targetUid))
                                return "targetUid: string expected";
                        if (message.groupId != null && message.hasOwnProperty("groupId"))
                            if (!$util.isString(message.groupId))
                                return "groupId: string expected";
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            if (!$util.isString(message.converId))
                                return "converId: string expected";
                        if (message.converType != null && message.hasOwnProperty("converType"))
                            switch (message.converType) {
                            default:
                                return "converType: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.content != null && message.hasOwnProperty("content")) {
                            var error = $root.com.raven.common.protos.MessageContent.verify(message.content);
                            if (error)
                                return "content." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an UpDownMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.UpDownMessage} UpDownMessage
                     */
                    UpDownMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.UpDownMessage)
                            return object;
                        var message = new $root.com.raven.common.protos.UpDownMessage();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.cid != null)
                            if ($util.Long)
                                (message.cid = $util.Long.fromValue(object.cid)).unsigned = true;
                            else if (typeof object.cid === "string")
                                message.cid = parseInt(object.cid, 10);
                            else if (typeof object.cid === "number")
                                message.cid = object.cid;
                            else if (typeof object.cid === "object")
                                message.cid = new $util.LongBits(object.cid.low >>> 0, object.cid.high >>> 0).toNumber(true);
                        if (object.fromUid != null)
                            message.fromUid = String(object.fromUid);
                        if (object.targetUid != null)
                            message.targetUid = String(object.targetUid);
                        if (object.groupId != null)
                            message.groupId = String(object.groupId);
                        if (object.converId != null)
                            message.converId = String(object.converId);
                        switch (object.converType) {
                        case "SINGLE":
                        case 0:
                            message.converType = 0;
                            break;
                        case "GROUP":
                        case 1:
                            message.converType = 1;
                            break;
                        }
                        if (object.content != null) {
                            if (typeof object.content !== "object")
                                throw TypeError(".com.raven.common.protos.UpDownMessage.content: object expected");
                            message.content = $root.com.raven.common.protos.MessageContent.fromObject(object.content);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpDownMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @static
                     * @param {com.raven.common.protos.UpDownMessage} message UpDownMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpDownMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.cid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.cid = options.longs === String ? "0" : 0;
                            object.fromUid = "";
                            object.targetUid = "";
                            object.groupId = "";
                            object.converId = "";
                            object.converType = options.enums === String ? "SINGLE" : 0;
                            object.content = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.cid != null && message.hasOwnProperty("cid"))
                            if (typeof message.cid === "number")
                                object.cid = options.longs === String ? String(message.cid) : message.cid;
                            else
                                object.cid = options.longs === String ? $util.Long.prototype.toString.call(message.cid) : options.longs === Number ? new $util.LongBits(message.cid.low >>> 0, message.cid.high >>> 0).toNumber(true) : message.cid;
                        if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                            object.fromUid = message.fromUid;
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            object.targetUid = message.targetUid;
                        if (message.groupId != null && message.hasOwnProperty("groupId"))
                            object.groupId = message.groupId;
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            object.converId = message.converId;
                        if (message.converType != null && message.hasOwnProperty("converType"))
                            object.converType = options.enums === String ? $root.com.raven.common.protos.ConverType[message.converType] : message.converType;
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = $root.com.raven.common.protos.MessageContent.toObject(message.content, options);
                        return object;
                    };

                    /**
                     * Converts this UpDownMessage to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.UpDownMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpDownMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpDownMessage;
                })();

                protos.HeartBeat = (function() {

                    /**
                     * Properties of a HeartBeat.
                     * @memberof com.raven.common.protos
                     * @interface IHeartBeat
                     * @property {number|Long|null} [id] HeartBeat id
                     * @property {com.raven.common.protos.HeartBeatType|null} [heartBeatType] HeartBeat heartBeatType
                     */

                    /**
                     * Constructs a new HeartBeat.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a HeartBeat.
                     * @implements IHeartBeat
                     * @constructor
                     * @param {com.raven.common.protos.IHeartBeat=} [properties] Properties to set
                     */
                    function HeartBeat(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * HeartBeat id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.HeartBeat
                     * @instance
                     */
                    HeartBeat.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * HeartBeat heartBeatType.
                     * @member {com.raven.common.protos.HeartBeatType} heartBeatType
                     * @memberof com.raven.common.protos.HeartBeat
                     * @instance
                     */
                    HeartBeat.prototype.heartBeatType = 0;

                    /**
                     * Creates a new HeartBeat instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.HeartBeat
                     * @static
                     * @param {com.raven.common.protos.IHeartBeat=} [properties] Properties to set
                     * @returns {com.raven.common.protos.HeartBeat} HeartBeat instance
                     */
                    HeartBeat.create = function create(properties) {
                        return new HeartBeat(properties);
                    };

                    /**
                     * Encodes the specified HeartBeat message. Does not implicitly {@link com.raven.common.protos.HeartBeat.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.HeartBeat
                     * @static
                     * @param {com.raven.common.protos.IHeartBeat} message HeartBeat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HeartBeat.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.heartBeatType != null && message.hasOwnProperty("heartBeatType"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.heartBeatType);
                        return writer;
                    };

                    /**
                     * Encodes the specified HeartBeat message, length delimited. Does not implicitly {@link com.raven.common.protos.HeartBeat.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.HeartBeat
                     * @static
                     * @param {com.raven.common.protos.IHeartBeat} message HeartBeat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a HeartBeat message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.HeartBeat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.HeartBeat} HeartBeat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HeartBeat.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.HeartBeat();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.heartBeatType = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a HeartBeat message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.HeartBeat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.HeartBeat} HeartBeat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HeartBeat.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a HeartBeat message.
                     * @function verify
                     * @memberof com.raven.common.protos.HeartBeat
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    HeartBeat.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.heartBeatType != null && message.hasOwnProperty("heartBeatType"))
                            switch (message.heartBeatType) {
                            default:
                                return "heartBeatType: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a HeartBeat message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.HeartBeat
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.HeartBeat} HeartBeat
                     */
                    HeartBeat.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.HeartBeat)
                            return object;
                        var message = new $root.com.raven.common.protos.HeartBeat();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        switch (object.heartBeatType) {
                        case "PING":
                        case 0:
                            message.heartBeatType = 0;
                            break;
                        case "PONG":
                        case 1:
                            message.heartBeatType = 1;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a HeartBeat message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.HeartBeat
                     * @static
                     * @param {com.raven.common.protos.HeartBeat} message HeartBeat
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    HeartBeat.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.heartBeatType = options.enums === String ? "PING" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.heartBeatType != null && message.hasOwnProperty("heartBeatType"))
                            object.heartBeatType = options.enums === String ? $root.com.raven.common.protos.HeartBeatType[message.heartBeatType] : message.heartBeatType;
                        return object;
                    };

                    /**
                     * Converts this HeartBeat to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.HeartBeat
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    HeartBeat.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return HeartBeat;
                })();

                /**
                 * HeartBeatType enum.
                 * @name com.raven.common.protos.HeartBeatType
                 * @enum {string}
                 * @property {number} PING=0 PING value
                 * @property {number} PONG=1 PONG value
                 */
                protos.HeartBeatType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "PING"] = 0;
                    values[valuesById[1] = "PONG"] = 1;
                    return values;
                })();

                protos.MessageAck = (function() {

                    /**
                     * Properties of a MessageAck.
                     * @memberof com.raven.common.protos
                     * @interface IMessageAck
                     * @property {number|Long|null} [id] MessageAck id
                     * @property {number|Long|null} [cid] MessageAck cid
                     * @property {string|null} [targetUid] MessageAck targetUid
                     * @property {string|null} [converId] MessageAck converId
                     * @property {number|Long|null} [time] MessageAck time
                     * @property {com.raven.common.protos.Code|null} [code] MessageAck code
                     */

                    /**
                     * Constructs a new MessageAck.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a MessageAck.
                     * @implements IMessageAck
                     * @constructor
                     * @param {com.raven.common.protos.IMessageAck=} [properties] Properties to set
                     */
                    function MessageAck(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MessageAck id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.MessageAck
                     * @instance
                     */
                    MessageAck.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * MessageAck cid.
                     * @member {number|Long} cid
                     * @memberof com.raven.common.protos.MessageAck
                     * @instance
                     */
                    MessageAck.prototype.cid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * MessageAck targetUid.
                     * @member {string} targetUid
                     * @memberof com.raven.common.protos.MessageAck
                     * @instance
                     */
                    MessageAck.prototype.targetUid = "";

                    /**
                     * MessageAck converId.
                     * @member {string} converId
                     * @memberof com.raven.common.protos.MessageAck
                     * @instance
                     */
                    MessageAck.prototype.converId = "";

                    /**
                     * MessageAck time.
                     * @member {number|Long} time
                     * @memberof com.raven.common.protos.MessageAck
                     * @instance
                     */
                    MessageAck.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * MessageAck code.
                     * @member {com.raven.common.protos.Code} code
                     * @memberof com.raven.common.protos.MessageAck
                     * @instance
                     */
                    MessageAck.prototype.code = 0;

                    /**
                     * Creates a new MessageAck instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.MessageAck
                     * @static
                     * @param {com.raven.common.protos.IMessageAck=} [properties] Properties to set
                     * @returns {com.raven.common.protos.MessageAck} MessageAck instance
                     */
                    MessageAck.create = function create(properties) {
                        return new MessageAck(properties);
                    };

                    /**
                     * Encodes the specified MessageAck message. Does not implicitly {@link com.raven.common.protos.MessageAck.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.MessageAck
                     * @static
                     * @param {com.raven.common.protos.IMessageAck} message MessageAck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageAck.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.cid != null && message.hasOwnProperty("cid"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.cid);
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUid);
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.converId);
                        if (message.time != null && message.hasOwnProperty("time"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.time);
                        if (message.code != null && message.hasOwnProperty("code"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.code);
                        return writer;
                    };

                    /**
                     * Encodes the specified MessageAck message, length delimited. Does not implicitly {@link com.raven.common.protos.MessageAck.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.MessageAck
                     * @static
                     * @param {com.raven.common.protos.IMessageAck} message MessageAck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageAck.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MessageAck message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.MessageAck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.MessageAck} MessageAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageAck.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.MessageAck();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.cid = reader.uint64();
                                break;
                            case 3:
                                message.targetUid = reader.string();
                                break;
                            case 4:
                                message.converId = reader.string();
                                break;
                            case 5:
                                message.time = reader.uint64();
                                break;
                            case 6:
                                message.code = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MessageAck message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.MessageAck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.MessageAck} MessageAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageAck.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MessageAck message.
                     * @function verify
                     * @memberof com.raven.common.protos.MessageAck
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MessageAck.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.cid != null && message.hasOwnProperty("cid"))
                            if (!$util.isInteger(message.cid) && !(message.cid && $util.isInteger(message.cid.low) && $util.isInteger(message.cid.high)))
                                return "cid: integer|Long expected";
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            if (!$util.isString(message.targetUid))
                                return "targetUid: string expected";
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            if (!$util.isString(message.converId))
                                return "converId: string expected";
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                                return "time: integer|Long expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a MessageAck message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.MessageAck
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.MessageAck} MessageAck
                     */
                    MessageAck.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.MessageAck)
                            return object;
                        var message = new $root.com.raven.common.protos.MessageAck();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.cid != null)
                            if ($util.Long)
                                (message.cid = $util.Long.fromValue(object.cid)).unsigned = true;
                            else if (typeof object.cid === "string")
                                message.cid = parseInt(object.cid, 10);
                            else if (typeof object.cid === "number")
                                message.cid = object.cid;
                            else if (typeof object.cid === "object")
                                message.cid = new $util.LongBits(object.cid.low >>> 0, object.cid.high >>> 0).toNumber(true);
                        if (object.targetUid != null)
                            message.targetUid = String(object.targetUid);
                        if (object.converId != null)
                            message.converId = String(object.converId);
                        if (object.time != null)
                            if ($util.Long)
                                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                            else if (typeof object.time === "string")
                                message.time = parseInt(object.time, 10);
                            else if (typeof object.time === "number")
                                message.time = object.time;
                            else if (typeof object.time === "object")
                                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                        switch (object.code) {
                        case "SUCCESS":
                        case 0:
                            message.code = 0;
                            break;
                        case "CLIENT_ID_REPEAT":
                        case 1:
                            message.code = 1;
                            break;
                        case "CONVER_TYPE_INVALID":
                        case 2:
                            message.code = 2;
                            break;
                        case "KAFKA_ERROR":
                        case 3:
                            message.code = 3;
                            break;
                        case "CONVER_ID_INVALID":
                        case 4:
                            message.code = 4;
                            break;
                        case "NO_TARGET":
                        case 5:
                            message.code = 5;
                            break;
                        case "TOKEN_INVALID":
                        case 6:
                            message.code = 6;
                            break;
                        case "OPERATION_TYPE_INVALID":
                        case 7:
                            message.code = 7;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MessageAck message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.MessageAck
                     * @static
                     * @param {com.raven.common.protos.MessageAck} message MessageAck
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MessageAck.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.cid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.cid = options.longs === String ? "0" : 0;
                            object.targetUid = "";
                            object.converId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.time = options.longs === String ? "0" : 0;
                            object.code = options.enums === String ? "SUCCESS" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.cid != null && message.hasOwnProperty("cid"))
                            if (typeof message.cid === "number")
                                object.cid = options.longs === String ? String(message.cid) : message.cid;
                            else
                                object.cid = options.longs === String ? $util.Long.prototype.toString.call(message.cid) : options.longs === Number ? new $util.LongBits(message.cid.low >>> 0, message.cid.high >>> 0).toNumber(true) : message.cid;
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            object.targetUid = message.targetUid;
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            object.converId = message.converId;
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (typeof message.time === "number")
                                object.time = options.longs === String ? String(message.time) : message.time;
                            else
                                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = options.enums === String ? $root.com.raven.common.protos.Code[message.code] : message.code;
                        return object;
                    };

                    /**
                     * Converts this MessageAck to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.MessageAck
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MessageAck.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MessageAck;
                })();

                /**
                 * Code enum.
                 * @name com.raven.common.protos.Code
                 * @enum {string}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} CLIENT_ID_REPEAT=1 CLIENT_ID_REPEAT value
                 * @property {number} CONVER_TYPE_INVALID=2 CONVER_TYPE_INVALID value
                 * @property {number} KAFKA_ERROR=3 KAFKA_ERROR value
                 * @property {number} CONVER_ID_INVALID=4 CONVER_ID_INVALID value
                 * @property {number} NO_TARGET=5 NO_TARGET value
                 * @property {number} TOKEN_INVALID=6 TOKEN_INVALID value
                 * @property {number} OPERATION_TYPE_INVALID=7 OPERATION_TYPE_INVALID value
                 */
                protos.Code = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "CLIENT_ID_REPEAT"] = 1;
                    values[valuesById[2] = "CONVER_TYPE_INVALID"] = 2;
                    values[valuesById[3] = "KAFKA_ERROR"] = 3;
                    values[valuesById[4] = "CONVER_ID_INVALID"] = 4;
                    values[valuesById[5] = "NO_TARGET"] = 5;
                    values[valuesById[6] = "TOKEN_INVALID"] = 6;
                    values[valuesById[7] = "OPERATION_TYPE_INVALID"] = 7;
                    return values;
                })();

                /**
                 * ConverType enum.
                 * @name com.raven.common.protos.ConverType
                 * @enum {string}
                 * @property {number} SINGLE=0 SINGLE value
                 * @property {number} GROUP=1 GROUP value
                 */
                protos.ConverType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SINGLE"] = 0;
                    values[valuesById[1] = "GROUP"] = 1;
                    return values;
                })();

                protos.MessageContent = (function() {

                    /**
                     * Properties of a MessageContent.
                     * @memberof com.raven.common.protos
                     * @interface IMessageContent
                     * @property {number|Long|null} [id] MessageContent id
                     * @property {string|null} [uid] MessageContent uid
                     * @property {com.raven.common.protos.MessageType|null} [type] MessageContent type
                     * @property {string|null} [content] MessageContent content
                     * @property {number|Long|null} [time] MessageContent time
                     */

                    /**
                     * Constructs a new MessageContent.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a MessageContent.
                     * @implements IMessageContent
                     * @constructor
                     * @param {com.raven.common.protos.IMessageContent=} [properties] Properties to set
                     */
                    function MessageContent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MessageContent id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.MessageContent
                     * @instance
                     */
                    MessageContent.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * MessageContent uid.
                     * @member {string} uid
                     * @memberof com.raven.common.protos.MessageContent
                     * @instance
                     */
                    MessageContent.prototype.uid = "";

                    /**
                     * MessageContent type.
                     * @member {com.raven.common.protos.MessageType} type
                     * @memberof com.raven.common.protos.MessageContent
                     * @instance
                     */
                    MessageContent.prototype.type = 0;

                    /**
                     * MessageContent content.
                     * @member {string} content
                     * @memberof com.raven.common.protos.MessageContent
                     * @instance
                     */
                    MessageContent.prototype.content = "";

                    /**
                     * MessageContent time.
                     * @member {number|Long} time
                     * @memberof com.raven.common.protos.MessageContent
                     * @instance
                     */
                    MessageContent.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new MessageContent instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.MessageContent
                     * @static
                     * @param {com.raven.common.protos.IMessageContent=} [properties] Properties to set
                     * @returns {com.raven.common.protos.MessageContent} MessageContent instance
                     */
                    MessageContent.create = function create(properties) {
                        return new MessageContent(properties);
                    };

                    /**
                     * Encodes the specified MessageContent message. Does not implicitly {@link com.raven.common.protos.MessageContent.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.MessageContent
                     * @static
                     * @param {com.raven.common.protos.IMessageContent} message MessageContent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageContent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                        if (message.content != null && message.hasOwnProperty("content"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
                        if (message.time != null && message.hasOwnProperty("time"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.time);
                        return writer;
                    };

                    /**
                     * Encodes the specified MessageContent message, length delimited. Does not implicitly {@link com.raven.common.protos.MessageContent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.MessageContent
                     * @static
                     * @param {com.raven.common.protos.IMessageContent} message MessageContent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageContent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MessageContent message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.MessageContent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.MessageContent} MessageContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageContent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.MessageContent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.uid = reader.string();
                                break;
                            case 3:
                                message.type = reader.int32();
                                break;
                            case 4:
                                message.content = reader.string();
                                break;
                            case 5:
                                message.time = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MessageContent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.MessageContent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.MessageContent} MessageContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageContent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MessageContent message.
                     * @function verify
                     * @memberof com.raven.common.protos.MessageContent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MessageContent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            if (!$util.isString(message.uid))
                                return "uid: string expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.content != null && message.hasOwnProperty("content"))
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                                return "time: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a MessageContent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.MessageContent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.MessageContent} MessageContent
                     */
                    MessageContent.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.MessageContent)
                            return object;
                        var message = new $root.com.raven.common.protos.MessageContent();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.uid != null)
                            message.uid = String(object.uid);
                        switch (object.type) {
                        case "TEXT":
                        case 0:
                            message.type = 0;
                            break;
                        case "PICTURE":
                        case 1:
                            message.type = 1;
                            break;
                        case "VOICE":
                        case 2:
                            message.type = 2;
                            break;
                        case "VIDEO":
                        case 3:
                            message.type = 3;
                            break;
                        }
                        if (object.content != null)
                            message.content = String(object.content);
                        if (object.time != null)
                            if ($util.Long)
                                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                            else if (typeof object.time === "string")
                                message.time = parseInt(object.time, 10);
                            else if (typeof object.time === "number")
                                message.time = object.time;
                            else if (typeof object.time === "object")
                                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a MessageContent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.MessageContent
                     * @static
                     * @param {com.raven.common.protos.MessageContent} message MessageContent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MessageContent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.uid = "";
                            object.type = options.enums === String ? "TEXT" : 0;
                            object.content = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.time = options.longs === String ? "0" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            object.uid = message.uid;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.com.raven.common.protos.MessageType[message.type] : message.type;
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (typeof message.time === "number")
                                object.time = options.longs === String ? String(message.time) : message.time;
                            else
                                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                        return object;
                    };

                    /**
                     * Converts this MessageContent to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.MessageContent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MessageContent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MessageContent;
                })();

                /**
                 * MessageType enum.
                 * @name com.raven.common.protos.MessageType
                 * @enum {string}
                 * @property {number} TEXT=0 TEXT value
                 * @property {number} PICTURE=1 PICTURE value
                 * @property {number} VOICE=2 VOICE value
                 * @property {number} VIDEO=3 VIDEO value
                 */
                protos.MessageType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "TEXT"] = 0;
                    values[valuesById[1] = "PICTURE"] = 1;
                    values[valuesById[2] = "VOICE"] = 2;
                    values[valuesById[3] = "VIDEO"] = 3;
                    return values;
                })();

                protos.HisMessagesReq = (function() {

                    /**
                     * Properties of a HisMessagesReq.
                     * @memberof com.raven.common.protos
                     * @interface IHisMessagesReq
                     * @property {number|Long|null} [id] HisMessagesReq id
                     * @property {string|null} [converId] HisMessagesReq converId
                     * @property {number|Long|null} [beginId] HisMessagesReq beginId
                     */

                    /**
                     * Constructs a new HisMessagesReq.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a HisMessagesReq.
                     * @implements IHisMessagesReq
                     * @constructor
                     * @param {com.raven.common.protos.IHisMessagesReq=} [properties] Properties to set
                     */
                    function HisMessagesReq(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * HisMessagesReq id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @instance
                     */
                    HisMessagesReq.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * HisMessagesReq converId.
                     * @member {string} converId
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @instance
                     */
                    HisMessagesReq.prototype.converId = "";

                    /**
                     * HisMessagesReq beginId.
                     * @member {number|Long} beginId
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @instance
                     */
                    HisMessagesReq.prototype.beginId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new HisMessagesReq instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @static
                     * @param {com.raven.common.protos.IHisMessagesReq=} [properties] Properties to set
                     * @returns {com.raven.common.protos.HisMessagesReq} HisMessagesReq instance
                     */
                    HisMessagesReq.create = function create(properties) {
                        return new HisMessagesReq(properties);
                    };

                    /**
                     * Encodes the specified HisMessagesReq message. Does not implicitly {@link com.raven.common.protos.HisMessagesReq.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @static
                     * @param {com.raven.common.protos.IHisMessagesReq} message HisMessagesReq message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HisMessagesReq.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.converId);
                        if (message.beginId != null && message.hasOwnProperty("beginId"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.beginId);
                        return writer;
                    };

                    /**
                     * Encodes the specified HisMessagesReq message, length delimited. Does not implicitly {@link com.raven.common.protos.HisMessagesReq.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @static
                     * @param {com.raven.common.protos.IHisMessagesReq} message HisMessagesReq message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HisMessagesReq.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a HisMessagesReq message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.HisMessagesReq} HisMessagesReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HisMessagesReq.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.HisMessagesReq();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.converId = reader.string();
                                break;
                            case 3:
                                message.beginId = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a HisMessagesReq message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.HisMessagesReq} HisMessagesReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HisMessagesReq.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a HisMessagesReq message.
                     * @function verify
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    HisMessagesReq.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            if (!$util.isString(message.converId))
                                return "converId: string expected";
                        if (message.beginId != null && message.hasOwnProperty("beginId"))
                            if (!$util.isInteger(message.beginId) && !(message.beginId && $util.isInteger(message.beginId.low) && $util.isInteger(message.beginId.high)))
                                return "beginId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a HisMessagesReq message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.HisMessagesReq} HisMessagesReq
                     */
                    HisMessagesReq.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.HisMessagesReq)
                            return object;
                        var message = new $root.com.raven.common.protos.HisMessagesReq();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.converId != null)
                            message.converId = String(object.converId);
                        if (object.beginId != null)
                            if ($util.Long)
                                (message.beginId = $util.Long.fromValue(object.beginId)).unsigned = true;
                            else if (typeof object.beginId === "string")
                                message.beginId = parseInt(object.beginId, 10);
                            else if (typeof object.beginId === "number")
                                message.beginId = object.beginId;
                            else if (typeof object.beginId === "object")
                                message.beginId = new $util.LongBits(object.beginId.low >>> 0, object.beginId.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a HisMessagesReq message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @static
                     * @param {com.raven.common.protos.HisMessagesReq} message HisMessagesReq
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    HisMessagesReq.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.converId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.beginId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.beginId = options.longs === String ? "0" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            object.converId = message.converId;
                        if (message.beginId != null && message.hasOwnProperty("beginId"))
                            if (typeof message.beginId === "number")
                                object.beginId = options.longs === String ? String(message.beginId) : message.beginId;
                            else
                                object.beginId = options.longs === String ? $util.Long.prototype.toString.call(message.beginId) : options.longs === Number ? new $util.LongBits(message.beginId.low >>> 0, message.beginId.high >>> 0).toNumber(true) : message.beginId;
                        return object;
                    };

                    /**
                     * Converts this HisMessagesReq to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.HisMessagesReq
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    HisMessagesReq.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return HisMessagesReq;
                })();

                protos.HisMessagesAck = (function() {

                    /**
                     * Properties of a HisMessagesAck.
                     * @memberof com.raven.common.protos
                     * @interface IHisMessagesAck
                     * @property {number|Long|null} [id] HisMessagesAck id
                     * @property {string|null} [converId] HisMessagesAck converId
                     * @property {Array.<com.raven.common.protos.IMessageContent>|null} [messageList] HisMessagesAck messageList
                     */

                    /**
                     * Constructs a new HisMessagesAck.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a HisMessagesAck.
                     * @implements IHisMessagesAck
                     * @constructor
                     * @param {com.raven.common.protos.IHisMessagesAck=} [properties] Properties to set
                     */
                    function HisMessagesAck(properties) {
                        this.messageList = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * HisMessagesAck id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @instance
                     */
                    HisMessagesAck.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * HisMessagesAck converId.
                     * @member {string} converId
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @instance
                     */
                    HisMessagesAck.prototype.converId = "";

                    /**
                     * HisMessagesAck messageList.
                     * @member {Array.<com.raven.common.protos.IMessageContent>} messageList
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @instance
                     */
                    HisMessagesAck.prototype.messageList = $util.emptyArray;

                    /**
                     * Creates a new HisMessagesAck instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @static
                     * @param {com.raven.common.protos.IHisMessagesAck=} [properties] Properties to set
                     * @returns {com.raven.common.protos.HisMessagesAck} HisMessagesAck instance
                     */
                    HisMessagesAck.create = function create(properties) {
                        return new HisMessagesAck(properties);
                    };

                    /**
                     * Encodes the specified HisMessagesAck message. Does not implicitly {@link com.raven.common.protos.HisMessagesAck.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @static
                     * @param {com.raven.common.protos.IHisMessagesAck} message HisMessagesAck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HisMessagesAck.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.converId);
                        if (message.messageList != null && message.messageList.length)
                            for (var i = 0; i < message.messageList.length; ++i)
                                $root.com.raven.common.protos.MessageContent.encode(message.messageList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified HisMessagesAck message, length delimited. Does not implicitly {@link com.raven.common.protos.HisMessagesAck.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @static
                     * @param {com.raven.common.protos.IHisMessagesAck} message HisMessagesAck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HisMessagesAck.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a HisMessagesAck message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.HisMessagesAck} HisMessagesAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HisMessagesAck.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.HisMessagesAck();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.converId = reader.string();
                                break;
                            case 4:
                                if (!(message.messageList && message.messageList.length))
                                    message.messageList = [];
                                message.messageList.push($root.com.raven.common.protos.MessageContent.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a HisMessagesAck message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.HisMessagesAck} HisMessagesAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HisMessagesAck.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a HisMessagesAck message.
                     * @function verify
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    HisMessagesAck.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            if (!$util.isString(message.converId))
                                return "converId: string expected";
                        if (message.messageList != null && message.hasOwnProperty("messageList")) {
                            if (!Array.isArray(message.messageList))
                                return "messageList: array expected";
                            for (var i = 0; i < message.messageList.length; ++i) {
                                var error = $root.com.raven.common.protos.MessageContent.verify(message.messageList[i]);
                                if (error)
                                    return "messageList." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a HisMessagesAck message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.HisMessagesAck} HisMessagesAck
                     */
                    HisMessagesAck.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.HisMessagesAck)
                            return object;
                        var message = new $root.com.raven.common.protos.HisMessagesAck();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.converId != null)
                            message.converId = String(object.converId);
                        if (object.messageList) {
                            if (!Array.isArray(object.messageList))
                                throw TypeError(".com.raven.common.protos.HisMessagesAck.messageList: array expected");
                            message.messageList = [];
                            for (var i = 0; i < object.messageList.length; ++i) {
                                if (typeof object.messageList[i] !== "object")
                                    throw TypeError(".com.raven.common.protos.HisMessagesAck.messageList: object expected");
                                message.messageList[i] = $root.com.raven.common.protos.MessageContent.fromObject(object.messageList[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a HisMessagesAck message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @static
                     * @param {com.raven.common.protos.HisMessagesAck} message HisMessagesAck
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    HisMessagesAck.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.messageList = [];
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.converId = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            object.converId = message.converId;
                        if (message.messageList && message.messageList.length) {
                            object.messageList = [];
                            for (var j = 0; j < message.messageList.length; ++j)
                                object.messageList[j] = $root.com.raven.common.protos.MessageContent.toObject(message.messageList[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this HisMessagesAck to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.HisMessagesAck
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    HisMessagesAck.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return HisMessagesAck;
                })();

                protos.ConverReq = (function() {

                    /**
                     * Properties of a ConverReq.
                     * @memberof com.raven.common.protos
                     * @interface IConverReq
                     * @property {number|Long|null} [id] ConverReq id
                     * @property {com.raven.common.protos.OperationType|null} [type] ConverReq type
                     * @property {string|null} [conversationId] ConverReq conversationId
                     */

                    /**
                     * Constructs a new ConverReq.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a ConverReq.
                     * @implements IConverReq
                     * @constructor
                     * @param {com.raven.common.protos.IConverReq=} [properties] Properties to set
                     */
                    function ConverReq(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ConverReq id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.ConverReq
                     * @instance
                     */
                    ConverReq.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * ConverReq type.
                     * @member {com.raven.common.protos.OperationType} type
                     * @memberof com.raven.common.protos.ConverReq
                     * @instance
                     */
                    ConverReq.prototype.type = 0;

                    /**
                     * ConverReq conversationId.
                     * @member {string} conversationId
                     * @memberof com.raven.common.protos.ConverReq
                     * @instance
                     */
                    ConverReq.prototype.conversationId = "";

                    /**
                     * Creates a new ConverReq instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.ConverReq
                     * @static
                     * @param {com.raven.common.protos.IConverReq=} [properties] Properties to set
                     * @returns {com.raven.common.protos.ConverReq} ConverReq instance
                     */
                    ConverReq.create = function create(properties) {
                        return new ConverReq(properties);
                    };

                    /**
                     * Encodes the specified ConverReq message. Does not implicitly {@link com.raven.common.protos.ConverReq.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.ConverReq
                     * @static
                     * @param {com.raven.common.protos.IConverReq} message ConverReq message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConverReq.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.conversationId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ConverReq message, length delimited. Does not implicitly {@link com.raven.common.protos.ConverReq.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.ConverReq
                     * @static
                     * @param {com.raven.common.protos.IConverReq} message ConverReq message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConverReq.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ConverReq message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.ConverReq
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.ConverReq} ConverReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConverReq.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.ConverReq();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.type = reader.int32();
                                break;
                            case 3:
                                message.conversationId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ConverReq message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.ConverReq
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.ConverReq} ConverReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConverReq.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ConverReq message.
                     * @function verify
                     * @memberof com.raven.common.protos.ConverReq
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ConverReq.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                            if (!$util.isString(message.conversationId))
                                return "conversationId: string expected";
                        return null;
                    };

                    /**
                     * Creates a ConverReq message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.ConverReq
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.ConverReq} ConverReq
                     */
                    ConverReq.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.ConverReq)
                            return object;
                        var message = new $root.com.raven.common.protos.ConverReq();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        switch (object.type) {
                        case "DETAIL":
                        case 0:
                            message.type = 0;
                            break;
                        case "ALL":
                        case 1:
                            message.type = 1;
                            break;
                        }
                        if (object.conversationId != null)
                            message.conversationId = String(object.conversationId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ConverReq message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.ConverReq
                     * @static
                     * @param {com.raven.common.protos.ConverReq} message ConverReq
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ConverReq.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.type = options.enums === String ? "DETAIL" : 0;
                            object.conversationId = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.com.raven.common.protos.OperationType[message.type] : message.type;
                        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                            object.conversationId = message.conversationId;
                        return object;
                    };

                    /**
                     * Converts this ConverReq to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.ConverReq
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ConverReq.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ConverReq;
                })();

                /**
                 * OperationType enum.
                 * @name com.raven.common.protos.OperationType
                 * @enum {string}
                 * @property {number} DETAIL=0 DETAIL value
                 * @property {number} ALL=1 ALL value
                 */
                protos.OperationType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "DETAIL"] = 0;
                    values[valuesById[1] = "ALL"] = 1;
                    return values;
                })();

                protos.ConverAck = (function() {

                    /**
                     * Properties of a ConverAck.
                     * @memberof com.raven.common.protos
                     * @interface IConverAck
                     * @property {number|Long|null} [id] ConverAck id
                     * @property {com.raven.common.protos.Code|null} [code] ConverAck code
                     * @property {number|Long|null} [time] ConverAck time
                     * @property {com.raven.common.protos.IConverInfo|null} [converInfo] ConverAck converInfo
                     * @property {Array.<com.raven.common.protos.IConverInfo>|null} [converList] ConverAck converList
                     */

                    /**
                     * Constructs a new ConverAck.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a ConverAck.
                     * @implements IConverAck
                     * @constructor
                     * @param {com.raven.common.protos.IConverAck=} [properties] Properties to set
                     */
                    function ConverAck(properties) {
                        this.converList = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ConverAck id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.ConverAck
                     * @instance
                     */
                    ConverAck.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * ConverAck code.
                     * @member {com.raven.common.protos.Code} code
                     * @memberof com.raven.common.protos.ConverAck
                     * @instance
                     */
                    ConverAck.prototype.code = 0;

                    /**
                     * ConverAck time.
                     * @member {number|Long} time
                     * @memberof com.raven.common.protos.ConverAck
                     * @instance
                     */
                    ConverAck.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * ConverAck converInfo.
                     * @member {com.raven.common.protos.IConverInfo|null|undefined} converInfo
                     * @memberof com.raven.common.protos.ConverAck
                     * @instance
                     */
                    ConverAck.prototype.converInfo = null;

                    /**
                     * ConverAck converList.
                     * @member {Array.<com.raven.common.protos.IConverInfo>} converList
                     * @memberof com.raven.common.protos.ConverAck
                     * @instance
                     */
                    ConverAck.prototype.converList = $util.emptyArray;

                    /**
                     * Creates a new ConverAck instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.ConverAck
                     * @static
                     * @param {com.raven.common.protos.IConverAck=} [properties] Properties to set
                     * @returns {com.raven.common.protos.ConverAck} ConverAck instance
                     */
                    ConverAck.create = function create(properties) {
                        return new ConverAck(properties);
                    };

                    /**
                     * Encodes the specified ConverAck message. Does not implicitly {@link com.raven.common.protos.ConverAck.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.ConverAck
                     * @static
                     * @param {com.raven.common.protos.IConverAck} message ConverAck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConverAck.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.code != null && message.hasOwnProperty("code"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
                        if (message.time != null && message.hasOwnProperty("time"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.time);
                        if (message.converInfo != null && message.hasOwnProperty("converInfo"))
                            $root.com.raven.common.protos.ConverInfo.encode(message.converInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.converList != null && message.converList.length)
                            for (var i = 0; i < message.converList.length; ++i)
                                $root.com.raven.common.protos.ConverInfo.encode(message.converList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ConverAck message, length delimited. Does not implicitly {@link com.raven.common.protos.ConverAck.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.ConverAck
                     * @static
                     * @param {com.raven.common.protos.IConverAck} message ConverAck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConverAck.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ConverAck message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.ConverAck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.ConverAck} ConverAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConverAck.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.ConverAck();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 3:
                                message.code = reader.int32();
                                break;
                            case 4:
                                message.time = reader.uint64();
                                break;
                            case 5:
                                message.converInfo = $root.com.raven.common.protos.ConverInfo.decode(reader, reader.uint32());
                                break;
                            case 6:
                                if (!(message.converList && message.converList.length))
                                    message.converList = [];
                                message.converList.push($root.com.raven.common.protos.ConverInfo.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ConverAck message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.ConverAck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.ConverAck} ConverAck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConverAck.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ConverAck message.
                     * @function verify
                     * @memberof com.raven.common.protos.ConverAck
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ConverAck.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                break;
                            }
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                                return "time: integer|Long expected";
                        if (message.converInfo != null && message.hasOwnProperty("converInfo")) {
                            var error = $root.com.raven.common.protos.ConverInfo.verify(message.converInfo);
                            if (error)
                                return "converInfo." + error;
                        }
                        if (message.converList != null && message.hasOwnProperty("converList")) {
                            if (!Array.isArray(message.converList))
                                return "converList: array expected";
                            for (var i = 0; i < message.converList.length; ++i) {
                                var error = $root.com.raven.common.protos.ConverInfo.verify(message.converList[i]);
                                if (error)
                                    return "converList." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ConverAck message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.ConverAck
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.ConverAck} ConverAck
                     */
                    ConverAck.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.ConverAck)
                            return object;
                        var message = new $root.com.raven.common.protos.ConverAck();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        switch (object.code) {
                        case "SUCCESS":
                        case 0:
                            message.code = 0;
                            break;
                        case "CLIENT_ID_REPEAT":
                        case 1:
                            message.code = 1;
                            break;
                        case "CONVER_TYPE_INVALID":
                        case 2:
                            message.code = 2;
                            break;
                        case "KAFKA_ERROR":
                        case 3:
                            message.code = 3;
                            break;
                        case "CONVER_ID_INVALID":
                        case 4:
                            message.code = 4;
                            break;
                        case "NO_TARGET":
                        case 5:
                            message.code = 5;
                            break;
                        case "TOKEN_INVALID":
                        case 6:
                            message.code = 6;
                            break;
                        case "OPERATION_TYPE_INVALID":
                        case 7:
                            message.code = 7;
                            break;
                        }
                        if (object.time != null)
                            if ($util.Long)
                                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                            else if (typeof object.time === "string")
                                message.time = parseInt(object.time, 10);
                            else if (typeof object.time === "number")
                                message.time = object.time;
                            else if (typeof object.time === "object")
                                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                        if (object.converInfo != null) {
                            if (typeof object.converInfo !== "object")
                                throw TypeError(".com.raven.common.protos.ConverAck.converInfo: object expected");
                            message.converInfo = $root.com.raven.common.protos.ConverInfo.fromObject(object.converInfo);
                        }
                        if (object.converList) {
                            if (!Array.isArray(object.converList))
                                throw TypeError(".com.raven.common.protos.ConverAck.converList: array expected");
                            message.converList = [];
                            for (var i = 0; i < object.converList.length; ++i) {
                                if (typeof object.converList[i] !== "object")
                                    throw TypeError(".com.raven.common.protos.ConverAck.converList: object expected");
                                message.converList[i] = $root.com.raven.common.protos.ConverInfo.fromObject(object.converList[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ConverAck message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.ConverAck
                     * @static
                     * @param {com.raven.common.protos.ConverAck} message ConverAck
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ConverAck.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.converList = [];
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.code = options.enums === String ? "SUCCESS" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.time = options.longs === String ? "0" : 0;
                            object.converInfo = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = options.enums === String ? $root.com.raven.common.protos.Code[message.code] : message.code;
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (typeof message.time === "number")
                                object.time = options.longs === String ? String(message.time) : message.time;
                            else
                                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                        if (message.converInfo != null && message.hasOwnProperty("converInfo"))
                            object.converInfo = $root.com.raven.common.protos.ConverInfo.toObject(message.converInfo, options);
                        if (message.converList && message.converList.length) {
                            object.converList = [];
                            for (var j = 0; j < message.converList.length; ++j)
                                object.converList[j] = $root.com.raven.common.protos.ConverInfo.toObject(message.converList[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ConverAck to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.ConverAck
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ConverAck.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ConverAck;
                })();

                protos.ConverInfo = (function() {

                    /**
                     * Properties of a ConverInfo.
                     * @memberof com.raven.common.protos
                     * @interface IConverInfo
                     * @property {string|null} [converId] ConverInfo converId
                     * @property {com.raven.common.protos.ConverType|null} [type] ConverInfo type
                     * @property {Array.<string>|null} [uidList] ConverInfo uidList
                     * @property {string|null} [groupId] ConverInfo groupId
                     * @property {number|Long|null} [unCount] ConverInfo unCount
                     * @property {com.raven.common.protos.IMessageContent|null} [lastContent] ConverInfo lastContent
                     */

                    /**
                     * Constructs a new ConverInfo.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a ConverInfo.
                     * @implements IConverInfo
                     * @constructor
                     * @param {com.raven.common.protos.IConverInfo=} [properties] Properties to set
                     */
                    function ConverInfo(properties) {
                        this.uidList = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ConverInfo converId.
                     * @member {string} converId
                     * @memberof com.raven.common.protos.ConverInfo
                     * @instance
                     */
                    ConverInfo.prototype.converId = "";

                    /**
                     * ConverInfo type.
                     * @member {com.raven.common.protos.ConverType} type
                     * @memberof com.raven.common.protos.ConverInfo
                     * @instance
                     */
                    ConverInfo.prototype.type = 0;

                    /**
                     * ConverInfo uidList.
                     * @member {Array.<string>} uidList
                     * @memberof com.raven.common.protos.ConverInfo
                     * @instance
                     */
                    ConverInfo.prototype.uidList = $util.emptyArray;

                    /**
                     * ConverInfo groupId.
                     * @member {string} groupId
                     * @memberof com.raven.common.protos.ConverInfo
                     * @instance
                     */
                    ConverInfo.prototype.groupId = "";

                    /**
                     * ConverInfo unCount.
                     * @member {number|Long} unCount
                     * @memberof com.raven.common.protos.ConverInfo
                     * @instance
                     */
                    ConverInfo.prototype.unCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * ConverInfo lastContent.
                     * @member {com.raven.common.protos.IMessageContent|null|undefined} lastContent
                     * @memberof com.raven.common.protos.ConverInfo
                     * @instance
                     */
                    ConverInfo.prototype.lastContent = null;

                    /**
                     * Creates a new ConverInfo instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.ConverInfo
                     * @static
                     * @param {com.raven.common.protos.IConverInfo=} [properties] Properties to set
                     * @returns {com.raven.common.protos.ConverInfo} ConverInfo instance
                     */
                    ConverInfo.create = function create(properties) {
                        return new ConverInfo(properties);
                    };

                    /**
                     * Encodes the specified ConverInfo message. Does not implicitly {@link com.raven.common.protos.ConverInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.ConverInfo
                     * @static
                     * @param {com.raven.common.protos.IConverInfo} message ConverInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConverInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.converId);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                        if (message.uidList != null && message.uidList.length)
                            for (var i = 0; i < message.uidList.length; ++i)
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uidList[i]);
                        if (message.groupId != null && message.hasOwnProperty("groupId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.groupId);
                        if (message.unCount != null && message.hasOwnProperty("unCount"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.unCount);
                        if (message.lastContent != null && message.hasOwnProperty("lastContent"))
                            $root.com.raven.common.protos.MessageContent.encode(message.lastContent, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ConverInfo message, length delimited. Does not implicitly {@link com.raven.common.protos.ConverInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.ConverInfo
                     * @static
                     * @param {com.raven.common.protos.IConverInfo} message ConverInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConverInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ConverInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.ConverInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.ConverInfo} ConverInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConverInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.ConverInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.converId = reader.string();
                                break;
                            case 2:
                                message.type = reader.int32();
                                break;
                            case 3:
                                if (!(message.uidList && message.uidList.length))
                                    message.uidList = [];
                                message.uidList.push(reader.string());
                                break;
                            case 4:
                                message.groupId = reader.string();
                                break;
                            case 5:
                                message.unCount = reader.uint64();
                                break;
                            case 6:
                                message.lastContent = $root.com.raven.common.protos.MessageContent.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ConverInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.ConverInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.ConverInfo} ConverInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConverInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ConverInfo message.
                     * @function verify
                     * @memberof com.raven.common.protos.ConverInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ConverInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            if (!$util.isString(message.converId))
                                return "converId: string expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.uidList != null && message.hasOwnProperty("uidList")) {
                            if (!Array.isArray(message.uidList))
                                return "uidList: array expected";
                            for (var i = 0; i < message.uidList.length; ++i)
                                if (!$util.isString(message.uidList[i]))
                                    return "uidList: string[] expected";
                        }
                        if (message.groupId != null && message.hasOwnProperty("groupId"))
                            if (!$util.isString(message.groupId))
                                return "groupId: string expected";
                        if (message.unCount != null && message.hasOwnProperty("unCount"))
                            if (!$util.isInteger(message.unCount) && !(message.unCount && $util.isInteger(message.unCount.low) && $util.isInteger(message.unCount.high)))
                                return "unCount: integer|Long expected";
                        if (message.lastContent != null && message.hasOwnProperty("lastContent")) {
                            var error = $root.com.raven.common.protos.MessageContent.verify(message.lastContent);
                            if (error)
                                return "lastContent." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a ConverInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.ConverInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.ConverInfo} ConverInfo
                     */
                    ConverInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.ConverInfo)
                            return object;
                        var message = new $root.com.raven.common.protos.ConverInfo();
                        if (object.converId != null)
                            message.converId = String(object.converId);
                        switch (object.type) {
                        case "SINGLE":
                        case 0:
                            message.type = 0;
                            break;
                        case "GROUP":
                        case 1:
                            message.type = 1;
                            break;
                        }
                        if (object.uidList) {
                            if (!Array.isArray(object.uidList))
                                throw TypeError(".com.raven.common.protos.ConverInfo.uidList: array expected");
                            message.uidList = [];
                            for (var i = 0; i < object.uidList.length; ++i)
                                message.uidList[i] = String(object.uidList[i]);
                        }
                        if (object.groupId != null)
                            message.groupId = String(object.groupId);
                        if (object.unCount != null)
                            if ($util.Long)
                                (message.unCount = $util.Long.fromValue(object.unCount)).unsigned = true;
                            else if (typeof object.unCount === "string")
                                message.unCount = parseInt(object.unCount, 10);
                            else if (typeof object.unCount === "number")
                                message.unCount = object.unCount;
                            else if (typeof object.unCount === "object")
                                message.unCount = new $util.LongBits(object.unCount.low >>> 0, object.unCount.high >>> 0).toNumber(true);
                        if (object.lastContent != null) {
                            if (typeof object.lastContent !== "object")
                                throw TypeError(".com.raven.common.protos.ConverInfo.lastContent: object expected");
                            message.lastContent = $root.com.raven.common.protos.MessageContent.fromObject(object.lastContent);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ConverInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.ConverInfo
                     * @static
                     * @param {com.raven.common.protos.ConverInfo} message ConverInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ConverInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.uidList = [];
                        if (options.defaults) {
                            object.converId = "";
                            object.type = options.enums === String ? "SINGLE" : 0;
                            object.groupId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.unCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.unCount = options.longs === String ? "0" : 0;
                            object.lastContent = null;
                        }
                        if (message.converId != null && message.hasOwnProperty("converId"))
                            object.converId = message.converId;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.com.raven.common.protos.ConverType[message.type] : message.type;
                        if (message.uidList && message.uidList.length) {
                            object.uidList = [];
                            for (var j = 0; j < message.uidList.length; ++j)
                                object.uidList[j] = message.uidList[j];
                        }
                        if (message.groupId != null && message.hasOwnProperty("groupId"))
                            object.groupId = message.groupId;
                        if (message.unCount != null && message.hasOwnProperty("unCount"))
                            if (typeof message.unCount === "number")
                                object.unCount = options.longs === String ? String(message.unCount) : message.unCount;
                            else
                                object.unCount = options.longs === String ? $util.Long.prototype.toString.call(message.unCount) : options.longs === Number ? new $util.LongBits(message.unCount.low >>> 0, message.unCount.high >>> 0).toNumber(true) : message.unCount;
                        if (message.lastContent != null && message.hasOwnProperty("lastContent"))
                            object.lastContent = $root.com.raven.common.protos.MessageContent.toObject(message.lastContent, options);
                        return object;
                    };

                    /**
                     * Converts this ConverInfo to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.ConverInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ConverInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ConverInfo;
                })();

                protos.NotifyMessage = (function() {

                    /**
                     * Properties of a NotifyMessage.
                     * @memberof com.raven.common.protos
                     * @interface INotifyMessage
                     * @property {number|Long|null} [id] NotifyMessage id
                     * @property {string|null} [type] NotifyMessage type
                     * @property {string|null} [targetUid] NotifyMessage targetUid
                     * @property {string|null} [content] NotifyMessage content
                     * @property {number|Long|null} [time] NotifyMessage time
                     */

                    /**
                     * Constructs a new NotifyMessage.
                     * @memberof com.raven.common.protos
                     * @classdesc Represents a NotifyMessage.
                     * @implements INotifyMessage
                     * @constructor
                     * @param {com.raven.common.protos.INotifyMessage=} [properties] Properties to set
                     */
                    function NotifyMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NotifyMessage id.
                     * @member {number|Long} id
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @instance
                     */
                    NotifyMessage.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * NotifyMessage type.
                     * @member {string} type
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @instance
                     */
                    NotifyMessage.prototype.type = "";

                    /**
                     * NotifyMessage targetUid.
                     * @member {string} targetUid
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @instance
                     */
                    NotifyMessage.prototype.targetUid = "";

                    /**
                     * NotifyMessage content.
                     * @member {string} content
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @instance
                     */
                    NotifyMessage.prototype.content = "";

                    /**
                     * NotifyMessage time.
                     * @member {number|Long} time
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @instance
                     */
                    NotifyMessage.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new NotifyMessage instance using the specified properties.
                     * @function create
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @static
                     * @param {com.raven.common.protos.INotifyMessage=} [properties] Properties to set
                     * @returns {com.raven.common.protos.NotifyMessage} NotifyMessage instance
                     */
                    NotifyMessage.create = function create(properties) {
                        return new NotifyMessage(properties);
                    };

                    /**
                     * Encodes the specified NotifyMessage message. Does not implicitly {@link com.raven.common.protos.NotifyMessage.verify|verify} messages.
                     * @function encode
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @static
                     * @param {com.raven.common.protos.INotifyMessage} message NotifyMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotifyMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUid);
                        if (message.content != null && message.hasOwnProperty("content"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
                        if (message.time != null && message.hasOwnProperty("time"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.time);
                        return writer;
                    };

                    /**
                     * Encodes the specified NotifyMessage message, length delimited. Does not implicitly {@link com.raven.common.protos.NotifyMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @static
                     * @param {com.raven.common.protos.INotifyMessage} message NotifyMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotifyMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NotifyMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.raven.common.protos.NotifyMessage} NotifyMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NotifyMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.raven.common.protos.NotifyMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                message.type = reader.string();
                                break;
                            case 3:
                                message.targetUid = reader.string();
                                break;
                            case 4:
                                message.content = reader.string();
                                break;
                            case 5:
                                message.time = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a NotifyMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.raven.common.protos.NotifyMessage} NotifyMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NotifyMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NotifyMessage message.
                     * @function verify
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NotifyMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            if (!$util.isString(message.type))
                                return "type: string expected";
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            if (!$util.isString(message.targetUid))
                                return "targetUid: string expected";
                        if (message.content != null && message.hasOwnProperty("content"))
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                                return "time: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a NotifyMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.raven.common.protos.NotifyMessage} NotifyMessage
                     */
                    NotifyMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.raven.common.protos.NotifyMessage)
                            return object;
                        var message = new $root.com.raven.common.protos.NotifyMessage();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.type != null)
                            message.type = String(object.type);
                        if (object.targetUid != null)
                            message.targetUid = String(object.targetUid);
                        if (object.content != null)
                            message.content = String(object.content);
                        if (object.time != null)
                            if ($util.Long)
                                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                            else if (typeof object.time === "string")
                                message.time = parseInt(object.time, 10);
                            else if (typeof object.time === "number")
                                message.time = object.time;
                            else if (typeof object.time === "object")
                                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a NotifyMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @static
                     * @param {com.raven.common.protos.NotifyMessage} message NotifyMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NotifyMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.type = "";
                            object.targetUid = "";
                            object.content = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.time = options.longs === String ? "0" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = message.type;
                        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                            object.targetUid = message.targetUid;
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (typeof message.time === "number")
                                object.time = options.longs === String ? String(message.time) : message.time;
                            else
                                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                        return object;
                    };

                    /**
                     * Converts this NotifyMessage to JSON.
                     * @function toJSON
                     * @memberof com.raven.common.protos.NotifyMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NotifyMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return NotifyMessage;
                })();

                return protos;
            })();

            return common;
        })();

        return raven;
    })();

    return com;
})();

module.exports = $root;
