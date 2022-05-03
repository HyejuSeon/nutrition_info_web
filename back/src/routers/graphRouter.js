import { Router } from "express";
import { graphService } from "../services/graphService";
import { foodService } from "../services/foodService";
import { errorMiddleware } from "../middlewares/errorMiddleware";

const graphRouter = Router();

// 도넛차트 - 특정 카테고리의 영양성분 구성 비율 시각화

// ------- 음식 카테고리 리스트 조회 -------
/**
 * @swagger
 * /food/category:
 *   get:
 *     summary: 음식 카테고리 리스트 조회
 *     tags:
 *     - Food
 *     description: 유저가 선택할 음식 카테고리 전체 목록이 반환
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: success
 */
 graphRouter.get(
  "/food/category",
   errorMiddleware,
  async (req, res, next) => {
    try {
      const categories = await foodService.getCategories();
      
      // 조회된 데이터가 없으면 에러 반환
      if (categories.error) {
        throw new Error(categories.errorMessage);
      }
      // 조회된 데이터가 있으면 결과와 함께 반환
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }
);




// 방사형차트 - 특정 음식 영양성분 구성 비율 시각화

// ------- 음식 이름 리스트 조회 -------
/**
 * @swagger
 * /food/foodName:
 *   get:
 *     summary: 음식 이름(영어) 리스트 조회
 *     tags:
 *     - Food
 *     description: 유저가 선택할 음식이름(영어) 전체 목록이 반환
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: success
 */
 graphRouter.get(
  "/food/foodName",
   errorMiddleware,
  async (req, res, next) => {
    try {
      const foodNames = await foodService.getFoodNames();
      
      // 조회된 데이터가 없으면 에러 반환
      if (foodNames.error) {
        throw new Error(foodNames.errorMessage);
      }
      // 조회된 데이터가 있으면 결과와 함께 반환
      res.status(200).json(foodNames);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /food/foodKorName:
 *   get:
 *     summary: 음식 이름(한글) 리스트 조회
 *     tags:
 *     - Food
 *     description: 유저가 선택할 음식이름(한글) 전체 목록이 반환
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: success
 */
 graphRouter.get(
  "/food/foodKorName",
   errorMiddleware,
  async (req, res, next) => {
    try {
      const foodKorNames = await foodService.getFoodKorNames();
      
      // 조회된 데이터가 없으면 에러 반환
      if (foodKorNames.error) {
        throw new Error(foodKorNames.errorMessage);
      }
      // 조회된 데이터가 있으면 결과와 함께 반환
      res.status(200).json(foodKorNames);
    } catch (error) {
      next(error);
    }
  }
);







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
 * /data:
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
  "/data",
   errorMiddleware,
  async (req, res, next) => {
    try {
      const foodList = await foodService.getFood();
      
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