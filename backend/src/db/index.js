import { DB_NAME } from "../constant.js";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance}`);
        console.log(connectionInstance)
    } catch (error) {
        console.log("MongoDB connection failed !!. Error: ", error);
        // process.exit(1);
        throw error;
    }
}

export default connectDB;