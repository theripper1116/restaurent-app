import mongoose from "mongoose";

import { NextResponse } from "next/server";

import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/model/restaurants";

export async function GET({ nextUrl: { searchParams } }) {
  try {
    await mongoose.connect(connectionStr);
    let response;
    const selectedRestaurant = searchParams.get("restaurantName");
    if (selectedRestaurant) {
      response = await restaurantSchema.find({
        name: selectedRestaurant,
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
