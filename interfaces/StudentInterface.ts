export interface IStudent{
    id : string,
    name : string,
    email : string,
    course : string
}

export type createStudentInput = Omit<IStudent, "Id">
export type UpdateStudentInput = Partial<IStudent>;
export type StudentContact = Pick<IStudent, "name" | "email">;
export type ReadonlyStudent = Readonly<IStudent>