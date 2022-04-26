import cors from "cors";
import express from "express";
import { swaggerUi, specs } from "./modules/swagger";
import { graphRouter } from "./routers/graphRouter";

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

app.use(graphRouter);


export { app };
