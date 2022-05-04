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