import mongoose from "mongoose";

import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/model/restaurants";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const result = await restaurantSchema.find();
    const cityList = new Set();
    result.forEach((restaurantDetails) => {
      cityList.add(
        restaurantDetails.city.charAt(0).toUpperCase() +
          restaurantDetails.city.slice(1)
      );
    });
    return NextResponse.json({ cityList: Array.from(cityList) });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
