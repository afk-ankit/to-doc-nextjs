import { User } from "@/models/User";
import { connectDb } from "@/utils/Connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectDb();
    const data = await User.find();
    return NextResponse.json([...data]);
  } catch (error: any) {
    return new Response("can't connect to db and get users", {
      status: 500,
    });
  }
}
