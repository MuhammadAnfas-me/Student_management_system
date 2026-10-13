export class StudentRecord{
    constructor(
        public readonly studentId : string,
        private marks : number
    ){}

    getMarks(): number {
        return this.marks;
    }

    updateMarks(newMarks : number):void{
        if(newMarks < 0 || newMarks > 100){
            throw new Error("Marks must be between 0 and 100");
        }
        this.marks = newMarks;
    }
}