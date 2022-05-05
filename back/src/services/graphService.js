import { User, Graph, Food} from "../db";

class graphService {
    // 도넛 차트 -- 카테고리의 평균 영양성분 구성
    static async getNutrientsAvg({ currentCategoryOriginal }) {
        // DB의 저장 형식으로 문자열 형태 변경 (첫 자리만 대문자)
        const currentCategory = currentCategoryOriginal[0].toUpperCase() + currentCategoryOriginal.slice(1);
        
        const nutrientsAvgList = await Food.findByCategory({ currentCategory });
        if (!nutrientsAvgList) {
                const errorMessage =
                "데이터를 찾을 수 없습니다. 다시 확인해주세요.";
                return { errorMessage };
            }
        nutrientsAvgList.errorMessage = null;
        return nutrientsAvgList
    }

    // 레이터 차트 -- 음식의 영양성분 구성
    static async getFoodNutrients({ currentFoodOriginal }) {
        // DB에 저장된 형태로 변경 (첫 자리만 대문자)
        const currentFood = currentFoodOriginal[0].toUpperCase() + currentFoodOriginal.slice(1);
        
        const nutrientsList = await Food.findByFood({ currentFood });
        if (!nutrientsList) {
                const errorMessage =
                "데이터를 찾을 수 없습니다. 다시 확인해주세요.";
                return { errorMessage };
            }
        nutrientsList.errorMessage = null;
        return nutrientsList
    }

    // 막대 차트 -- 특정 카테고리 음식들의 특정 영양성분 순위
    static async getFoodsRank({ currentCategoryOriginal, currentNutrient }) {
        // DB의 저장 형식으로 문자열 형태 변경 (첫 자리만 대문자)
        const currentCategory = currentCategoryOriginal[0].toUpperCase() + currentCategoryOriginal.slice(1);

        const foodsRankList = await Food.findFoodsRank({ currentCategory, currentNutrient });
        
        const foodsList = foodsRankList.map(foods => {
            let perGrams = Math.round(foods[currentNutrient] / foods['grams'] * 100) / 100; // 소수점 둘째자리까지 반올림
            let foodPerGrams = { 'perGrams': perGrams };
            return Object.assign(foods['_doc'], foodPerGrams); // 모델에서 가져온 객체에 'grams당 영양성분' 요소 추가
        })

        if (!foodsList) {
                const errorMessage =
                "데이터를 찾을 수 없습니다. 다시 확인해주세요.";
                return { errorMessage };
            }
            foodsList.errorMessage = null;
        return foodsList
    }

    // 그래프 static 이미지
    static async getGraph({ graphId }) {
        // 그래프 ID 로 조회
        const graph = await Graph.findById({ graphId });
        if (!graph) {
            const errorMessage =
            "해당 그래프를 찾을 수 없습니다. 다시 확인해주세요.";
            return { errorMessage };
        }
        graph.errorMessage = null;
        return graph
    }
}

export { graphService };