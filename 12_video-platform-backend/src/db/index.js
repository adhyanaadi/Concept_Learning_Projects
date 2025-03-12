// process.exit(1)
// When MongoDB fails to connect, it’s a critical error. If the database isn't available:
// The app cannot function properly.
// There’s no point in keeping the server running if it depends on MongoDB.
import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(
      `MongoDB is connected with host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection failed ", error);
    process.exit(1);
  }
};

export default connectDB;
