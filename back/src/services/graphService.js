import { User, Graph, Food} from "../db";

class graphService {
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

    // 데이터세트 전체
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

export { graphService };