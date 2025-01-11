import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1/TaskMagnetBrains");
        console.log("DB connected");
    } catch (error) {
        console.log("Connection error: ",error);
    }
}

export default connectDB;