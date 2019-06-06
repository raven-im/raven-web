
export class FileMsg {
    constructor(
        private name: string,
        private size: number,
        private url: string,
    ){}
  
    getFileName(): string {
      return this.name;
    }

    getFileSize(): number {
    return this.size;
    }

    getFileUrl(): string {
        return this.url;
    }

    // toJSON is automatically used by JSON.stringify
    toJSON(): FileMsgJson {
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this, {
            // convert fields that need converting
            name: this.name,
            size: this.size,
            url: this.url
        });
    }

    // fromJSON is used to convert an serialized version
    // of the User to an instance of the class
    static fromJSON(json: FileMsgJson|string): FileMsg {
        if (typeof json === 'string') {
        // if it's a string, parse it first
        return JSON.parse(json, FileMsg.reviver);
        } else {
            // create an instance of the User class
            let user = Object.create(FileMsg.prototype);
            // copy all the fields from the json object
            return Object.assign(user, json, {
                // convert fields that need converting
                name: json.name,
                size: json.size,
                url: json.url
            });
        }
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    static reviver(key: string, value: any): any {
        return key === "" ? FileMsg.fromJSON(value) : value;
    }
}

interface FileMsgJson {
    name: string,
    size: number,
    url: string,
}