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
    let response;
    let payload = await request.json();
    await mongoose.connect(connectionStr);
    let signUpFormData = new restaurantSchema(payload);

    if (payload.login) {
      response = await restaurantSchema.findOne({
        email: payload.email,
        password: payload.password,
      });
    } else {
      response = await signUpFormData.save();
    }
    if (response) {
      return NextResponse.json(response);
    } else return NextResponse.json({ error: "error" });
  } catch (err) {
    return NextResponse.json({ error: "User Not Found" });
  }
}
