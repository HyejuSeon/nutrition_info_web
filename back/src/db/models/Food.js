import { FoodModel } from "../schemas/food";
import { GraphModel } from "../schemas/graph";

class Food {
  // 카테고리 전체 조회
  static async findCategories() {
    const categoriesList = await FoodModel.distinct("category");
    return categoriesList;
  }

  // 음식이름(영&한) 전체 조회
  static async findFoodNames({ currentCategory }) {
    const fieldCondition =  { category: currentCategory }; // 필드 조건
    const fieldProjection =  { _id: 0, foodName: 1, foodKorName: 1 } ; // foodName, foodKorName 만 표시 
    const foodNamesList = await FoodModel.find(
      fieldCondition, 
      fieldProjection,
    );
    return foodNamesList;
  }

  // 영양성분 전체 조회
  static async findNutrientNames() {
    const fieldProjection =  { _id: 0, nutrients: 1 } ; // nutrients만 표시
    // cf. Graph Model에 영양성분 값만 따로 저장해둠
    const nutrientsNamesList = await GraphModel.findOne(
      {},
      fieldProjection,
    );
    return nutrientsNamesList;
  }

  // 카테고리의 평균 영양성분 조회
  static async findByCategory({ currentCategory }) {
    const nutrientsAvgCategory = await FoodModel.aggregate([
      { $match: { category: currentCategory } }, // 필드 조건
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
    const fieldCondition =  { foodName: currentFood }; // 필드 조건
    const fieldProjection =  { _id: 0, foodId: 0, category: 0, measure: 0 } ; // 필요 없는 필드는 표시하지 않음
    const nutrientsFood = await FoodModel.find(
      fieldCondition,
      fieldProjection
    );
    return nutrientsFood;
  }

  // 카테고리 음식의 영양성분 순위
  static async findFoodsRank({ currentCategory, currentNutrient }) {
    const fieldCondition =  { category: currentCategory }; // 필드 조건
    const fieldProjection = {
      _id: 0,
      foodName: 1,
      foodKorName: 1,
      grams: 1,
      [currentNutrient]: 1,
    };
    const foodRank = await FoodModel.find(
      fieldCondition,
      fieldProjection
    ).sort({ [currentNutrient]: -1 });
    return foodRank;
  }

  // 두 영양성분 비교
  static async findByNutrients({ x, y }) {
    const fieldProjection = {
      _id: 0,
      foodName: 1,
      foodKorName: 1,
      calories: 1,
      [x]: 1,
      [y]: 1,
    };
    const nturientsResult = await FoodModel.find({}, fieldProjection);
    return nturientsResult;
  }

}

export { Food };
