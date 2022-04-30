import cors from "cors";
import express from "express";
import { swaggerUi, specs } from "./modules/swagger";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { articleRouter } from "./routers/articleRouter";
import { graphRouter } from "./routers/graphRouter";
import { userAuthRouter } from "./routers/userRouter";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Swagger API
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// 기본 페이지
app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

app.use(userAuthRouter);
app.use(graphRouter);
app.use(articleRouter);
// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(errorMiddleware);

export { app };
