import { createUser } from "@/lib/actions/user.actions";
import { connectToDatabase } from "@/lib/database";
import Test from "@/lib/database/models/test.model";
import User from "@/lib/database/models/user.model";
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

    const newTest = await Test.create({ title, content });
    const newUser = await createUser({
      clerkId: "ckp2q3q3q0000h0jx5q2q3q3q",
      email: "test",
      username: "test",
      firstName: "test",
      lastName: "last_name",
      photo: "image_url",
    });
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
