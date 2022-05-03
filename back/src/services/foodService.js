import { User, Food} from "../db";

class foodService {

    // 카테고리 목록 전체
    static async getCategories() {
        const categoriesList = await Food.findCategories();
        if (!categoriesList) {
                const errorMessage =
                "데이터를 찾을 수 없습니다. 다시 확인해주세요.";
                return { errorMessage };
            }
            categoriesList.errorMessage = null;
        return categoriesList
    }

    // 음식 이름(영어) 목록 전체
    static async getFoodNames() {
        const foodNamesList = await Food.findFoodNames();
        if (!foodNamesList) {
                const errorMessage =
                "데이터를 찾을 수 없습니다. 다시 확인해주세요.";
                return { errorMessage };
            }
            foodNamesList.errorMessage = null;
        return foodNamesList
    }
    // 음식 이름(한글) 목록 전체
    static async getFoodKorNames() {
        const foodNamesList = await Food.findFoodKorNames();
        if (!foodNamesList) {
                const errorMessage =
                "데이터를 찾을 수 없습니다. 다시 확인해주세요.";
                return { errorMessage };
            }
            foodNamesList.errorMessage = null;
        return foodNamesList
    }





    // TEST: 데이터세트 전체
    static async getFood() {
        const food = await Food.findAll();
        if (!food) {
                const errorMessage =
                "데이터를 찾을 수 없습니다. 다시 확인해주세요.";
                return { errorMessage };
            }
        food.errorMessage = null;
        return food
    }
}

export { foodService };