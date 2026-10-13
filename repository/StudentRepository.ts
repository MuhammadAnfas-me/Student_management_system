import type { IStudent, StudentContact, UpdateStudentInput , ReadonlyStudent} from "../interfaces/StudentInterface.js";
import type { IStudentRepository } from "../interfaces/IStudentRepository.js";
import { StudentModel } from "../models/StudentModel.js";
import type { Student } from "../models/Students.js";

export class StudentRepository implements IStudentRepository {
    async findAll(): Promise<IStudent[]> {
        const students = await StudentModel.find().lean()

        return students.map((student) => {
            return {
                id: student._id.toString(),
                name: student.name,
                email: student.email,
                course: student.course
            }
        });
    }

    async findAllStudentsContact(): Promise<StudentContact[]> {
        const studentsContact = await StudentModel.find(
            {},
            { name: 1, email: 1, _id: 0 }
        )

        return studentsContact.map((student) => {
            return {
                name: student.name,
                email: student.email
            }
        })
    }

    async findById(id: string): Promise<IStudent | null> {
        const student = await StudentModel.findById(id).lean();

        if (!student) {
            return null
        }

        return {
            id: student._id.toString(),
            name: student.name,
            email: student.email,
            course: student.course
        }
    }

    async create(student: IStudent): Promise<ReadonlyStudent> {
        const createStudent = await StudentModel.create({
            name: student.name,
            email: student.email,
            course: student.course
        })

        return {
            id: createStudent._id.toString(),
            name: createStudent.name,
            email: createStudent.email,
            course: createStudent.course
        };
    }

    async update(id: string, student: UpdateStudentInput): Promise<IStudent | null> {
        if (!/^[0-9a-fA-F]{24}$/.test(id)) {
            return null;
        }

        const updateStudent = await StudentModel.findByIdAndUpdate(
            id,
            { $set: student },
            {
                new: true,
                runValidators: true
            }
        ).lean()

        if (!updateStudent) {
            return null;
        }

        return {
            id: updateStudent._id.toString(),
            name: updateStudent.name,
            email: updateStudent.email,
            course: updateStudent.course
        }
    }
}