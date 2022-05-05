import { Router } from "express";
import { graphService } from "../services/graphService";
import { foodService } from "../services/foodService";
import { errorMiddleware } from "../middlewares/errorMiddleware";

const graphRouter = Router();

// ------------------- 사이드바 -------------------

// 음식 카테고리 리스트 조회
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
graphRouter.get("/food/category", errorMiddleware, async (req, res, next) => {
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
});

// 음식 이름 리스트 조회
/**
 * @swagger
 * /food/foodname?category=desserts:
 *   get:
 *     summary: 카테고리 하위 음식 이름 리스트 조회
 *     tags:
 *     - Food
 *     description: 유저가 선택한 카테고리에 속한 음식이름(영&한) 전체 목록이 반환
 *     produces:
 *     - application/json
 *     parameters:
 *       - name: category
 *         in: query
 *         required: true
 *         description: 카테고리명(소문자로 작성)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: success
 */
graphRouter.get("/food/foodname", errorMiddleware, async (req, res, next) => {
  try {
    const currentCategoryOriginal = req.query.category;
    const foodNames = await foodService.getFoodNames({
      currentCategoryOriginal,
    });

    // 조회된 데이터가 없으면 에러 반환
    if (foodNames.error) {
      throw new Error(foodNames.errorMessage);
    }
    // 조회된 데이터가 있으면 결과와 함께 반환
    res.status(200).json(foodNames);
  } catch (error) {
    next(error);
  }
});

// 영양성분 리스트 조회
/**
 * @swagger
 * /food/nutrients:
 *   get:
 *     summary: 영양성분 리스트 조회
 *     tags:
 *     - Food
 *     description: 칼로리, 단백질, 지방, 포화지방, 섬유질, 탄수화물
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: success
 */
graphRouter.get("/food/nutrients", errorMiddleware, async (req, res, next) => {
  try {
    const nutrientsNames = await foodService.getNutrients();

    // 조회된 데이터가 없으면 에러 반환
    if (nutrientsNames.error) {
      throw new Error(nutrientsNames.errorMessage);
    }
    // 조회된 데이터가 있으면 결과와 함께 반환
    res.status(200).json(nutrientsNames.nutrients);
  } catch (error) {
    next(error);
  }
});

// ------------------- 시각화 -------------------

// 도넛차트 -- 특정 카테고리의 영양성분 평균 구성 시각화
/**
 * @swagger
 * /nutrients-avg?category=desserts:
 *   get:
 *     summary: 도넛차트 - 해당 카테고리의 평균 영양성분 구성 조회
 *     tags:
 *     - Graph
 *     description: 유저가 선택한 카테고리의 평균 영양성분 수치들이 반환
 *     produces:
 *     - application/json
 *     parameters:
 *       - name: category
 *         in: query
 *         required: true
 *         description: 카테고리명(소문자로 작성)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: success
 */
graphRouter.get("/nutrients-avg", errorMiddleware, async (req, res, next) => {
  try {
    const currentCategoryOriginal = req.query.category;
    const nutrientsAvg = await graphService.getNutrientsAvg({
      currentCategoryOriginal,
    });

    // 조회된 데이터가 없으면 에러 반환
    if (nutrientsAvg.error) {
      throw new Error(nutrientsAvg.errorMessage);
    }
    // 조회된 데이터가 있으면 결과와 함께 반환
    res.status(200).json(nutrientsAvg);
  } catch (error) {
    next(error);
  }
});

// 레이더차트 -- 특정 음식 영양성분 구성 시각화
/**
 * @swagger
 * /nutrients?food=almonds:
 *   get:
 *     summary: 레이더차트 - 특정 음식의 영양성분 조회
 *     tags:
 *     - Graph
 *     description: 유저가 선택한 음식의 영양성분 수치들을 반환
 *     produces:
 *     - application/json
 *     parameters:
 *       - name: food
 *         in: query
 *         required: true
 *         description: 음식명 (소문자)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: success
 */
graphRouter.get("/nutrients", errorMiddleware, async (req, res, next) => {
  try {
    const currentFoodOriginal = req.query.food;
    const nutrients = await graphService.getFoodNutrients({
      currentFoodOriginal,
    });

    // 조회된 데이터가 없으면 에러 반환
    if (nutrients.error) {
      throw new Error(nutrients.errorMessage);
    }
    // 조회된 데이터가 있으면 결과와 함께 반환
    res.status(200).json(nutrients);
  } catch (error) {
    next(error);
  }
});

// 막대차트 -- 특정 카테고리 음식들의 특정 영양성분 순위
/**
 * @swagger
 * /food-rank?category=desserts&nutrients=fat:
 *   get:
 *     summary: 막대차트 - 특정 카테고리 음식들의 특정 영양성분 순위 조회
 *     tags:
 *     - Graph
 *     description: 유저가 선택한 카테고리에 속한 음식들의 유저가 선택한 영양성분 순서를 반환
 *     produces:
 *     - application/json
 *     parameters:
 *       - name: category
 *         in: query
 *         required: true
 *         description: 카테고리명(소문자로 작성)
 *         schema:
 *           type: string
 *       - name: nutrients
 *         in: query
 *         required: true
 *         description: 영양성분명
 *     responses:
 *       200:
 *         description: success
 */
graphRouter.get("/food-rank", errorMiddleware, async (req, res, next) => {
  try {
    const currentCategoryOriginal = req.query.category;
    const currentNutrient = req.query.nutrients;
    const foodsRank = await graphService.getFoodsRank({
      currentCategoryOriginal,
      currentNutrient,
    });

    // 조회된 데이터가 없으면 에러 반환
    if (foodsRank.error) {
      throw new Error(foodsRank.errorMessage);
    }
    // 조회된 데이터가 있으면 결과와 함께 반환
    res.status(200).json(foodsRank);
  } catch (error) {
    next(error);
  }
});


export { graphRouter };
