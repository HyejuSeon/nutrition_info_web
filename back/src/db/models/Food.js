import { FoodModel } from "../schemas/food";

class Food {

    // 카테고리 전체 조회
    static async findCategories() {
        const categoriesList = await FoodModel.distinct('category');
        return categoriesList;
    }

    // 음식이름(영어) 전체 조회
    static async findFoodNames() {
        const foodNamesList = await FoodModel.distinct('foodName');
        return foodNamesList;
    }
    // 음식이름(한글) 전체 조회
    static async findFoodKorNames() {
        const foodNamesList = await FoodModel.distinct('foodKorName');
        return foodNamesList;
    }




    // 데이터 전체 조회
    static async findAll() {
        const foodsList = await FoodModel.find({});
        return foodsList;
    }
}

export { Food };