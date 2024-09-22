import mongoose from "mongoose";

import { NextResponse } from "next/server";

import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/model/restaurants";

export async function GET(_, { params: { restaurantId } }) {
  try {
    await mongoose.connect(connectionStr);
    const response = await restaurantSchema.findOne({ _id: restaurantId });
    if (!response.message) {
      return NextResponse.json(response);
    } else return NextResponse.json({ message: response.message });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
