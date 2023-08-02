import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export const User = mongoose.models.user || mongoose.model("user", UserSchema);
