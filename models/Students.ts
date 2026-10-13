import { User } from "./User.js";

export class Student extends User{
    constructor(
        id : string,
        name : string,
        email : string,
        public course : string
    ){
        super(id, name, email);
    }

    getRole(): string {
        return 'Student';
    }
}

