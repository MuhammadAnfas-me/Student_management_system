import type { IStudentRepository } from "../interfaces/IStudentRepository.js";
import type { IStudent, UpdateStudentInput, createStudentInput, StudentContact, ReadonlyStudent } from "../interfaces/StudentInterface.js";

export class StudentService {
    constructor(
        private readonly studentRepository: IStudentRepository
    ) { }

    async getAllStudent(): Promise<IStudent[]> {
        return this.studentRepository.findAll();
    }

    async getAllStudentsContact(): Promise<StudentContact[]>{
        return this.studentRepository.findAllStudentsContact()
    }

    async getStudentById(id: string): Promise<IStudent | null> {
        return this.studentRepository.findById(id);
    }

    async createStudent(student: createStudentInput): Promise<ReadonlyStudent> {
        if (!student.name.trim()) {
            throw new Error("Student name is required");
        }

        if (!student.email.includes("@")) {
            throw new Error("Please provide valid email")
        }

        if (!student.course.trim()) {
            throw new Error("Course is required");
        }


        return this.studentRepository.create(student)
    }

    async updateStudent(id: string, student: UpdateStudentInput): Promise<IStudent | null> {
        if (!id.trim()) {
            throw new Error("Student ID is required");
        }

        if (Object.keys(student).length === 0) {
            throw new Error("Provide at least one field to update");
        }

        if (student.name !== undefined && !student.name.trim()) {
            throw new Error("Name cannot be empty");
        }

        if (student.email !== undefined && !student.email.includes("@")) {
            throw new Error("Invalid email");
        }

        if (student.course !== undefined && !student.course.trim()) {
            throw new Error("Course cannot be empty");
        }

        return this.studentRepository.update(id, student);
    }

}