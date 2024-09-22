import mongoose from "mongoose";

import { NextResponse } from "next/server";

import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/model/foodsModel";

export async function GET(_, { params: { foodItemId } }) {
  try {
    await mongoose.connect(connectionStr);
    const response = await foodSchema.find({
      _id: foodItemId,
    });
    if (response) {
      return NextResponse.json(response);
    }
  } catch (err) {
    return NextResponse.json({ errorMessage: err.message });
  }
}

export async function PUT(request, { params: { foodItemId } }) {
  try {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const response = await foodSchema.updateOne(
      {
        _id: foodItemId,
      },
      payload
    );
    if (response) return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
