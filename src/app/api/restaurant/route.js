import mongoose from "mongoose";

import { NextResponse } from "next/server";

import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/model/restaurants";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const data = await restaurantSchema.find();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}

export async function POST(request) {
  try {
    let result;
    let payload = await request.json();
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
    if (result) {
      return NextResponse.json(result);
    } else return NextResponse.json({ error: "error" });
  } catch (err) {
    return NextResponse.json({ error: "User Not Found" });
  }
}
