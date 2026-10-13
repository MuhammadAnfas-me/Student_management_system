import { User } from "./User.js";

export class Admin extends User{
    constructor(
        id : string,
        name : string,
        email : string,
        public permissions : string[]
    ){
        super(id, name, email)
    }

    getRole(): string {
        return 'Admin'
    }
}