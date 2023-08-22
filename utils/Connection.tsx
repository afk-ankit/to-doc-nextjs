import mongoose from "mongoose";

let connected = false;
export const connectDb = async () => {
  try {
    if (!connected) {
      await mongoose.connect(
        "mongodb+srv://ankit:ankit501@cluster0.wt0xt6q.mongodb.net/ankit"
      );
      console.log("db connected successfully");
      connected = true;
    }
  } catch (e) {
    console.log("mongodb connection error");
  }
};
