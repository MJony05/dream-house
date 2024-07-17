import mongoose from "mongoose";

// Track the connection status
let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("Please add your MONGODB_URI to .env.local");
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "just",
    });
    isConnected = true;
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
