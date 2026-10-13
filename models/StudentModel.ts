import mongoose, { Schema, type InferSchemaType } from "mongoose";

const studentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        course: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

export type StudentDocument = InferSchemaType<typeof studentSchema>;

export const StudentModel = mongoose.model("Student", studentSchema);