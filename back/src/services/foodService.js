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

    // 음식 이름(영&한) 목록 전체
    static async getFoodNames({ currentCategoryOriginal }) {
        // DB의 저장 형식으로 문자열 형태 변경 (첫 자리만 대문자)
        const currentCategory = currentCategoryOriginal[0].toUpperCase() + currentCategoryOriginal.slice(1);

        const foodNamesList = await Food.findFoodNames({ currentCategory });
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