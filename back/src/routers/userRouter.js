import is from "@sindresorhus/is";
import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { userAuthService } from "../services/userService";

/**
 * @swagger
 *   components:
 *     schemas:
 *       User:
 *         type: object
 *         required:
 *           - loginId
 *           - password
 *         properties:
 *           id:
 *             type: int
 *             description: 자동 생성되는 숫자
 *           name:
 *             type: string
 *             description: 닉네임
 *           loginId:
 *             type: string
 *             description: 이메일
 *           password:
 *             type: string
 *             description: 비밀번호
 *           createdAt:
 *             type: date
 *             description: 생성 날짜
 */
/**
 *  @swagger
 *  tags:
 *    name: User
 *    description: 회원 관리
 */
/**
 *  @swagger
 *  paths:
 *   /user/register:
 *     post:
 *       summary: 회원가입
 *       tags: [User]
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - in: header
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: 닉네임
 *                 loginId:
 *                   type: string
 *                   description: 이메일
 *                 password:
 *                   type: string
 *                   description: 비밀번호
 *       responses:
 *         "200":
 *           description: Register user.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */

const userAuthRouter = Router();

userAuthRouter.post("/user/register", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // req (request) 에서 데이터 가져오기
    const name = req.body.name;
    const loginId = req.body.loginId;
    const password = req.body.password;
    const birthday = req.body.birthday;
    const sex = req.body.sex;
    const phoneNum = req.body.phoneNumber;
    console.log(name, loginId, password);
    // 위 데이터를 유저 db에 추가하기
    const newUser = await userAuthService.addUser({
      name,
      loginId,
      password,
      birthday,
      sex,
      phoneNum,
    });

    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.post("/user/login", async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const loginId = req.body.loginId;
    const password = req.body.password;

    // 위 데이터를 이용하여 유저 db에서 유저 찾기
    const user = await userAuthService.getUser({ loginId, password });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get("/userlist", loginRequired, async function (req, res, next) {
  try {
    // 전체 사용자 목록을 얻음
    const users = await userAuthService.getUsers();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get(
  "/user/current",
  loginRequired,
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      const userId = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        userId,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).send(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.put(
  "/users/:id",
  loginRequired,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      const userId = req.params.id;
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const name = req.body.name ?? null;
      const loginId = req.body.loginId ?? null;
      const password = req.body.password ?? null;

      const toUpdate = { name, loginId, password, description };

      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedUser = await userAuthService.setUser({ userId, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.get(
  "/users/:id",
  loginRequired,
  async function (req, res, next) {
    try {
      const userId = req.params.id;
      const currentUserInfo = await userAuthService.getUserInfo({ userId });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).send(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }
);

export { userAuthRouter };
