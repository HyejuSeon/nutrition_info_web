import { Router } from "express";
import { graphService } from "../services/graphService";
import { errorMiddleware } from "../middlewares/errorMiddleware";

const graphRouter = Router();


// ------- 그래프 ID로 이미지 파일 조회 -------

/**
 * @swagger
 * /graph/{graphId}:
 *   get:
 *     summary: 그래프 ID 로 이미지 파일 조회
 *     tags:
 *     - Graph
 *     description: 그래프 이미지 파일 URL 경로를 반환
 *     produces:
 *     - application/json
 *     parameters:
 *       - name: graphId
 *         in: path
 *         required: true
 *         description: 현재 데이터는 id 1 또는 2만 검색 가능 (그 외는 에러 출력)
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: success
 */
graphRouter.get('/graph/:graphId', 
  errorMiddleware,
  async (req, res, next) => {
    try {

      // 프론트엔드에서 요청한 graphId와 동일한 데이터 조회
      const graphId = req.params.graphId;
      const currentGraph = await graphService.getGraph({ graphId });

      // 조회된 데이터가 없으면 에러 반환
      if (currentGraph.error) {
        throw new Error(currentGraph.errorMessage);
      }
      
      // 조회된 데이터가 있으면 결과와 함께 반환
      res.status(200).json(currentGraph);
    }
    catch(error) {
      next(error);
    }
});


// ------- 음식 영양성분 데이터 전체 조회 -------

/**
 * @swagger
 * /food:
 *   get:
 *     summary: 데이터 전체 조회
 *     tags:
 *     - Food
 *     description: 그래프에 사용될 음식 영양성분 데이터 전체를 반환
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: success
 */
graphRouter.get(
  "/food",
   errorMiddleware,
  async (req, res, next) => {
    try {
      const foodList = await graphService.getFood();
      
      // 조회된 데이터가 없으면 에러 반환
      if (foodList.error) {
        throw new Error(foodList.errorMessage);
      }
      // 조회된 데이터가 있으면 결과와 함께 반환
      res.status(200).json(foodList);
    } catch (error) {
      next(error);
    }
  }
);


export { graphRouter };