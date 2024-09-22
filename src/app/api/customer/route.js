import mongoose from "mongoose";

import { NextResponse } from "next/server";

import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/model/restaurants";

export async function GET({ nextUrl: { searchParams } }) {
  try {
    await mongoose.connect(connectionStr);
    let response;
    if (searchParams.get("location")) {
      response = await restaurantSchema.find({
        city: searchParams.get("location").toLowerCase(),
      });
    } else {
      response = await restaurantSchema.find();
    }
    if (response.length > 0) return NextResponse.json(response);
    else return NextResponse.json({ message: "Data Not Found" });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
