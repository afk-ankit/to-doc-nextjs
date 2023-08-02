"use server";
import { Post } from "@/models/Post";
import { User } from "@/models/User";
import { connectDb } from "@/utils/Connection";
import { revalidateTag } from "next/cache";

export const addProduct = async (e: FormData) => {
  try {
    const name = e.get("name")?.toString();
    const price = e.get("price")?.toString();
    if (!name || !price) return;
    const newProduct = {
      name,
      price,
    };
    connectDb();
    const newUser = new User({
      ...newProduct,
    });
    await newUser.save();
    revalidateTag("users");
  } catch (e: any) {
    console.log(e.message);
  }
};
export const addPost = async (e: FormData) => {
  try {
    const topic = e.get("topic")?.toString();
    const description = e.get("description")?.toString();
    const tag = e.get("tag")?.toString();
    const tags = tag?.split(" ");

    const post = {
      topic,
      description,
      tags,
    };

    connectDb();
    const newPost = new Post({
      ...post,
    });
    await newPost.save();
    revalidateTag("posts");
  } catch (e: any) {
    console.log(e.message);
  }
};
