import { connectionStr } from "@/app/lib/db";
import { userSignUpSchema } from "@/app/lib/model/userSignupModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const userSignUpData = new userSignUpSchema(payload);
    const response = userSignUpData.save();
    if (response) {
      return NextResponse.json(response);
    }
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
