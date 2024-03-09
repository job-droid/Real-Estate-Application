import express from "express";
import mongoose from "mongoose";
import data_base_config from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

// calling the mongo connection string
const connection = process.env.MONGO_DB_URI;

const app = express();
// Connect to MongoDB database using Mongoose ORM
data_base_config(connection);

// middleware
app.use(express.json());



app.listen(2323, () => {
  console.log("Server running on port 2323");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});