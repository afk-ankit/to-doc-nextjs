import { Post } from "@/models/Post";
import { connectDb } from "@/utils/Connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectDb();
    const posts = await Post.find();
    return NextResponse.json([...posts]);
  } catch (error) {
    return new Response("Server error", {
      status: 500,
    });
  }
}
