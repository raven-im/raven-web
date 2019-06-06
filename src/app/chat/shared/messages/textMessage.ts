
export class TextMsg {
    constructor(private content: string){}
  
    getContent(): string {
      return this.content;
    }

    // toJSON is automatically used by JSON.stringify
    toJSON(): TextMsgJson {
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this, {
            // convert fields that need converting
            content: this.content
        });
    }

    // fromJSON is used to convert an serialized version
    // of the User to an instance of the class
    static fromJSON(json: TextMsgJson|string): TextMsg {
        if (typeof json === 'string') {
        // if it's a string, parse it first
        return JSON.parse(json, TextMsg.reviver);
        } else {
            // create an instance of the User class
            let user = Object.create(TextMsg.prototype);
            // copy all the fields from the json object
            return Object.assign(user, json, {
                // convert fields that need converting
                content: json.content
            });
        }
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    static reviver(key: string, value: any): any {
        return key === "" ? TextMsg.fromJSON(value) : value;
    }
}

interface TextMsgJson {
    content: string;
}