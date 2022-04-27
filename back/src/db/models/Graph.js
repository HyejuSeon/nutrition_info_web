import { GraphModel } from "../schemas/graph";

class Graph {
    // 그래프 ID로 DB에서 검색
    static async findById({ graphId }) {
        const graph = await GraphModel.findOne({ graphId });
        return graph;
    }
}

export { Graph };