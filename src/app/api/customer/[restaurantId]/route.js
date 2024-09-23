import mongoose from "mongoose";

import { NextResponse } from "next/server";

import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/model/restaurants";
import { foodSchema } from "@/app/lib/model/foodsModel";

export async function GET(_, { params: { restaurantId } }) {
  try {
    await mongoose.connect(connectionStr);
    const restaurantDetailsResponse = await restaurantSchema.findOne({
      _id: restaurantId,
    });
    const foodItemDetailResponse = await foodSchema.find({
      restaurantId,
    });
    if (!restaurantDetailsResponse.message) {
      if (!foodItemDetailResponse.message) {
        return NextResponse.json({
          restaurantDetails: restaurantDetailsResponse,
          foodItems: foodItemDetailResponse,
        });
      } else
        return NextResponse.json({
          restaurantDetails: restaurantDetailsResponse,
          foodItems: [],
        });
    } else return NextResponse.json({ message: response.message });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
