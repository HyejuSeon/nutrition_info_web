import { FoodModel } from "../schemas/food";

class Food {
    // 데이터 전체 조회
    static async findAll() {
        const foodsList = await FoodModel.find({});
        return foodsList;
    }
}

export { Food };