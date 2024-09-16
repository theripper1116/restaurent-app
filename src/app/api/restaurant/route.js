import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/model/restaurants";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await restaurantSchema.find();
  return NextResponse.json(data);
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(connectionStr);
  let signUpFormData = new restaurantSchema(payload);
  const result = await signUpFormData.save();
  return NextResponse.json(result);
}
