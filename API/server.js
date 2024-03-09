import express from "express";
import mongoose from "mongoose";
import data_base_config from "./config/db.js";
import dotenv from 'dotenv';
import user_route from './routes/user.route.js'
dotenv.config();


// calling the mongo connection string
const connection = process.env.MONGO_DB_URI;

const app = express();
// Connect to MongoDB database using Mongoose ORM
data_base_config(connection);

app.use('/api/user', user_route)
app.listen(2323, () => {
  console.log("Server running on port 2323");
});
