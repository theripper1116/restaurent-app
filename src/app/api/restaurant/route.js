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
  let result;
  await mongoose.connect(connectionStr);
  let signUpFormData = new restaurantSchema(payload);

  if (payload.login) {
    result = await restaurantSchema.findOne({
      email: payload.email,
      password: payload.password,
    });
  } else {
    result = await signUpFormData.save();
  }
  return NextResponse.json(result);
}
