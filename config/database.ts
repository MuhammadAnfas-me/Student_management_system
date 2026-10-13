import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config()

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGODB_URI
        if(!mongoURI){
            throw new Error("MONGODB_URI is not defined in .env")
        }
        await mongoose.connect(mongoURI)
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:",error)
        process.exit(1);
    }
}

export default connectDB;