import mongoose from "mongoose";

import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/model/foodsModel";
import { NextResponse } from "next/server";

export async function GET(_, { params: { restaurantId } }) {
  try {
    await mongoose.connect(connectionStr);
    const response = await foodSchema.find({
      restaurantId,
    });
    if (response.status === 200) {
      console.log(response);
      return NextResponse.json(response);
    } else {
      return NextResponse.json({ status: response.status, message: response });
    }
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}

export async function DELETE(_, { params: { restaurantId } }) {
  await mongoose.connect(connectionStr);
  const response = await foodSchema.deleteOne({ _id: restaurantId });
  if (response) return NextResponse.json(response);
  else return NextResponse.json({ status: response.status });
}
