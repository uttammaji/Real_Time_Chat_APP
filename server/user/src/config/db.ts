import mongoose from "mongoose";

const connectDB=async()=>{
    const uri=process.env.MONGO_URI;

    if(!uri){
        throw new Error("MONGO_URI is not defined in environment variables");
    }


    try{

        await mongoose.connect(uri,{
            dbName:"chat_app"
        });
        console.log("MongoDB connected successfully");

    }catch(err){
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}


export default connectDB;