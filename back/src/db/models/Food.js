import { FoodModel } from "../schemas/food";

class Food {
  // 카테고리 전체 조회
  static async findCategories() {
    const categoriesList = await FoodModel.distinct("category");
    return categoriesList;
  }

  // 음식이름(영&한) 전체 조회
  static async findFoodNames({ currentCategory }) {
    const foodNamesList = await FoodModel.find(
      { category: currentCategory }, // 카테고리 조건
      { _id: 0, foodName: 1, foodKorName: 1 } // foodName, foodKorName 만 표시 (1)
    );
    return foodNamesList;
  }

  // 카테고리의 평균 영양성분 조회
  static async findByCategory({ currentCategory }) {
    const nutrientsAvgCategory = await FoodModel.aggregate([
      { $match: { category: currentCategory } }, // 카테고리 조건
      {
        // 평균으로 영양성분 집계
        $group: {
          _id: "$category",
          protein: { $avg: "$protein" },
          fat: { $avg: "$fat" },
          satFat: { $avg: "$satFat" },
          fiber: { $avg: "$fiber" },
          carbs: { $avg: "$carbs" },
        },
      },
      {
        // 반올림 표시
        $project: {
          protein: { $round: ["$protein", 2] },
          fat: { $round: ["$fat", 2] },
          satFat: { $round: ["$satFat", 2] },
          fiber: { $round: ["$fiber", 2] },
          carbs: { $round: ["$carbs", 2] },
        },
      },
    ]);
    return nutrientsAvgCategory;
  }

  // 음식의 영양성분 조회
  static async findByFood({ currentFood }) {
    const nutrientsFood = await FoodModel.find(
      { foodName: currentFood },
      { _id: 0, foodId: 0, category: 0, measure: 0 }
    );
    return nutrientsFood;
  }

  // 데이터 전체 조회
  static async findAll() {
    const foodsList = await FoodModel.find({});
    return foodsList;
  }
}

export { Food };
