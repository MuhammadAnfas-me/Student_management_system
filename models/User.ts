export abstract class User{
    constructor(
        public readonly id : string,
        public name : string,
        public email : string
    ){}

    abstract getRole(): string;

    getDetails(): string {
        return `${this.name} - ${this.email}`;
    }
}