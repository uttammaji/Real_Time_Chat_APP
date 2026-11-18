import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { connectRedis } from "./config/redis.js";

dotenv.config();



const app=express();

const port=process.env.PORT;

connectDB();
connectRedis();


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});