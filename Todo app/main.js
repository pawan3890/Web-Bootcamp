// commonjs → require
// es module → import express from "express";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// class SomethingExample{

// }
// const SomethingObject = new SomethingExample();
// Schema for the todo item
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
} , { 
    timestamps: true 
}); //
//schema -> model 
const TodoModel = mongoose.model("Todo", todoSchema);

const app = express();

const dbConnectionString = process.env.MONGODB_CONNECTION_STRING;

function connectDb() {
  mongoose.connect(dbConnectionString);
  console.log("Database connected successfully");
}

connectDb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); // port_number + callback function