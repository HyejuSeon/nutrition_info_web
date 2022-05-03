import { User, Graph} from "../db";

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
}

export { graphService };