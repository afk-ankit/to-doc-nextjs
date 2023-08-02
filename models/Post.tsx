import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  topic: String,
  description: String,
  tags: [String],
});

export const Post = mongoose.models.post || mongoose.model("post", PostSchema);
