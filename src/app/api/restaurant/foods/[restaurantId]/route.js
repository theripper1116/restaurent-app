import mongoose from "mongoose";

import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/model/foodsModel";
import { NextResponse } from "next/server";

export async function GET(_, { params: { restaurantId } }) {
  await mongoose.connect(connectionStr);
  const response = await foodSchema.find();
  if (response.status === 200) {
    return NextResponse.json(response);
  } else {
    console.log(reponse);
  }
}
