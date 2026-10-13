import { Router } from "express";
import { StudentRepository } from "../repository/StudentRepository.js";
import { StudentController } from "../controllers/StudentController.js";
import { StudentService } from "../service/StudentService.js";

const router = Router();

const studentRepository = new StudentRepository()
const studentService = new StudentService(studentRepository)
const studentController = new StudentController(studentService)

router.get("/",studentController.getAllStudent);
router.get("/contacts", studentController.getAllStudentsContact)
router.get("/:id", studentController.getStudentsById);
router.post("/", studentController.createStudent);
router.patch("/:id", studentController.updateStudent)

export default router