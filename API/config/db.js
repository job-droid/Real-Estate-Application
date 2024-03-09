import mongoose from "mongoose";
// import dotenv from "dotenv";
// import path from 'path'

// dotenv.config();

// const connectionString = process.env.MONGO_DB_URI;

const mongodb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('MongoDb connected successfully');
  } catch (error) {
    console.log(`error connecting to mongodb`, error);
    process.exit(1);
  }
};

export default mongodb;
