import type { IStudent, createStudentInput, UpdateStudentInput, StudentContact, ReadonlyStudent } from "./StudentInterface.js";

export interface IStudentRepository {
    findAll() : Promise<IStudent[]>;
    findAllStudentsContact() : Promise<StudentContact[]>;
    findById(id : string) : Promise<IStudent | null> ;
    create(student : createStudentInput) : Promise<ReadonlyStudent>;
    update(id : string, student : UpdateStudentInput) : Promise<IStudent | null>
}

