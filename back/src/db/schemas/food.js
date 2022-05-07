import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    foodId: {
      type: Number,
      required: true,
    },
    foodName: {
      type: String,
      required: true,
    },
    foodKorName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    measure: {
      type: String,
      required: false,
    },
    grams: {
      type: Number,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
    satFat: {
      type: Number,
      required: true,
    },
    fiber: {
      type: Number,
      required: true,
    },
    carbs: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "foods",
  }
);

FoodSchema.index({ foodId: 1 });

const FoodModel = model("Food", FoodSchema);

export { FoodModel };
