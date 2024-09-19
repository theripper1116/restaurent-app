import mongoose from "mongoose";

import { NextResponse } from "next/server";

import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/model/foodsModel";

export async function POST(request) {
  try {
    let payload = await request.json();
    await mongoose.connect(connectionStr);
    let food = new foodSchema(payload);
    const response = await food.save();
    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json({ message: err.message });
  }
}
