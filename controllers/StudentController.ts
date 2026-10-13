import type { Request, Response } from "express";
import type { StudentService } from "../service/StudentService.js";



export class StudentController {
    constructor(
        private readonly studentService: StudentService
    ) { }

    getAllStudent = async (_req: Request, res: Response): Promise<void> => {
        try {
            const students = await this.studentService.getAllStudent()
            res.status(200).json({
                success: true,
                data: students
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch students"
            });
        }
    };

    getAllStudentsContact = async(_req : Request, res: Response): Promise<void> => {
        try {
            const studentsContact = await this.studentService.getAllStudentsContact()
            res.status(200).json({
                success : true,
                data : studentsContact
            })
        } catch (error) {
            res.status(500).json({
                success : false,
                message : "Failed to fetch contacts"
            })
        }
    }

    getStudentsById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;

            if (typeof id !== "string") {
                res.status(400).json({
                    success: false,
                    message: "Invalid student ID"
                });
                return;
            }
            const student = await this.studentService.getStudentById(id);

            if (!student) {
                res.status(400).json({
                    success: false,
                    message: "Student not found"
                })
                return;
            }

            res.status(200).json({
                success: true,
                data: student
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch student"
            })
        }
    }

    createStudent = async (req: Request, res: Response): Promise<void> => {
        try {
            const student = await this.studentService.createStudent(req.body)

            res.status(201).json({
                success: true,
                message: "Student created successfuly",
                data: student
            })

        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "Failed to create student"

            res.status(400).json({
                success: false,
                message
            })
        }
    }

    updateStudent = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;

            if (typeof id !== "string") {
                res.status(400).json({
                    success: false,
                    message: "Invalid student ID"
                });
                return;
            }

            const student = await this.studentService.updateStudent(
                id,
                req.body
            );

            if (!student) {
                res.status(404).json({
                    success: false,
                    message: "Student not found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Student updated successfully",
                data: student
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to update student";

            res.status(400).json({
                success: false,
                message
            });
        }
    }
}