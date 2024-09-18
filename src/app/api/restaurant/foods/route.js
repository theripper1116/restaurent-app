import mongoose from "mongoose";

import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/model/foodsModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    await mongoose.connection(connectionStr);
    const food = new foodSchema(payload);
    const response = await food.save();
    return NextResponse.json(response);
  } catch (err) {
    console.error(err.message);
  }
}
