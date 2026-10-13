import  express  from "express";
import { Student } from "./models/Students.js";
import studentRoutes from "./routes/studentRoute.js"


const app = express();
app.use(express.json())

app.use("/api/students", studentRoutes);

app.get('/',(_req,res)=>{
    res.json({message : "Student Management API is running"})
})

export default app