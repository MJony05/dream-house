import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/db/database";
import User from "@/models/User";

export async function POST(request: any) {
  try {
    await connectToDatabase();
    const { name, number } = await request.json();
    const newUser = new User({ name, number });
    await newUser.save();
    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
