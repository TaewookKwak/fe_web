import { connectToDatabase } from "@/lib/database";
import Test from "@/lib/database/models/test.model";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    name: "John Doe",
  });
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json();

    const { title, content } = body;

    const newUser = await Test.create({ title, content });
    // const test = new tests({ title, content });
    // await test.save();
    return NextResponse.json({
      message: "Test created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.next();
  }
}
