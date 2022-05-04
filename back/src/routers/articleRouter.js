import is from "@sindresorhus/is";
import { Router } from "express";
import { Article } from "../db";
import { loginRequired } from "../middlewares/loginRequired";
import { ArticleService } from "../services/articleService";
import { userAuthService } from "../services/userService";

const articleRouter = Router();
const viewObj = new Object()
const upload = require("../modules/multer")

/**
 *  @swagger
 *  paths:
 *   /article/create:
 *     post:
 *       summary: 게시글 작성
 *       tags: [Article]
 *       produces:
 *         - "application/json"
 *       parameters:
 *         - in: body
 *           name: article
 *           description: 게시글 작성
 *           schema:
 *             type: object
 *             required:
 *               - loginId
 *                 title
 *                 content
 *             properties:
 *               loginId:
 *                 type: string
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   description: 사용자 고유 id
 *                 loginId:
 *                   type: string
 *                   description: 게시글 작성자
 *                 title:
 *                   type: string
 *                   description: 게시글 제목
 *                 content:
 *                   type: string
 *                   description: 게시글 내용
 *       responses:
 *         "200":
 *           description: Register article.
 */

articleRouter.post("/article/create", loginRequired, async function(req, res, next){
    try {
        if (is.emptyObject(req.body)) {
          throw new Error(
            "headers의 Content-Type을 application/json으로 설정해주세요"
          );
        }
    const {title, content, nickName, filePath} = req.body;
    
    const newArticle = await ArticleService.addArticle({
        nickName,
        title,
        content,
        filePath,
    });
    if (newArticle.errorMessage) {
        throw new Error(newArticle.errorMessage);
    }
      res.status(201).json(newArticle);
    } catch (error) {
      next(error);
    }
  });


articleRouter.post("/article/uploadFile", //loginRequired, 
  upload.single('image'), async function(req, res, next){
  try{
    // const userId = req.currentUserId;
    // const currentUserInfo = await userAuthService.getUserInfo({ userId });

    // if (currentUserInfo.errorMessage){
    //   throw new Error(currentUserInfo.errorMessage);
    // }

    const fileData = req.file;


    if (fileData === undefined){
      return res.status(202).json({
        error: false,
      });
    } else{
      res.status(200).send(fileData);
    }
  } catch (error) {
    next(error);
  }
});

articleRouter.put("/article/saveFile", //loginRequired, 
  async function(req, res, next) {
  try{
  //   const userId = req.currentUserId;
  //   const currentUserInfo = await userAuthService.getUserInfo({ userId });

  //   if (currentUserInfo.errorMessage){
  //     throw new Error(currentUserInfo.errorMessage);
  // }

  const { articleId, filePath } = req.body;

  const newArticleFile = await ArticleService.addFileInfo({ articleId, filePath });
  console.log(newArticleFile)
  if (newArticleFile){
    throw new Error(newArticleFile.errorMessage);
  }
  res.status(200).json(newArticleFile);
} catch (error){
  next(error);
}
});


/**
 * @swagger
 * /article/{id}:
 *   get:
 *     summary: 게시글 id로 조회
 *     tags:
 *     - Article
 *     description: des
 *     produces:
 *     - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 게시물 하나만 return
 *     responses:
 *       200:
 *         description: success
 */

articleRouter.get("/article/:id", async function (req, res, next) {
  try {
      // req (request) 에서 id 가져오기
      const articleId = req.params.id;

      // 위 id를 이용하여 db에서 데이터 찾기
      const article = await Article.findById({ articleId });
      const currentId = req.currentUserId

      // 조회수
      if (article){
        if (!viewObj[articleId]) {
               viewObj[articleId] = []
        }
        if (viewObj[articleId].indexOf(currentId) == -1){
          article.visited ++
          viewObj[articleId].push(currentId)
          setTimeout(() => {
            viewObj[articleId].splice(
              viewObj[articleId].indexOf(currentId),
              1
            )
          }, 86400000)
          for (let i in viewObj){
             if (i.length ==0){
               delete viewObj.i
             }
           }
        }
        console.log(viewObj)
        await article.save()
        console.log(article)
      // if (user.errorMessage) {
      //   throw new Error(user.errorMessage);
      // }
      res.status(200).send(article);
      }
    } catch (error) {
      next(error);
    }
  }
);


/**
 * @swagger
 * /articlelist:
 *   get:
 *     summary: 전체 게시글 list return
 *     tags:
 *     - Article
 *     description: 설명
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: success
 */

articleRouter.get("/articlelist", async function (req, res, next){
  try {
    // 전체 게시글 목록을 얻음
    const article = await ArticleService.getArticleList();
    res.status(200).send(article);
  } catch (error) {
    next(error);
  }
});


/**
 *  @swagger
 *  paths:
 *   /article/{id}:
 *     put:
 *       summary: 게시글 수정
 *       tags: [Article]
 *       produces:
 *         - "application/json"
 *       parameters:
 *         - in: path
 *           name: id
 *           description: 게시글 수정
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: 게시글 제목
 *                 content:
 *                   type: string
 *                   description: 게시글 내용
 *       responses:
 *         "200":
 *           description: Set article.
 */

articleRouter.put("/article/:id", loginRequired, async function (req, res, next) {
  try{
      const articleId = req.params.id;

      // loginId는 수정 불가능
      const title = req.body.title ?? null; // ??는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자 반환 그렇지 않으면 왼쪽 피연산자 반환
      const content = req.body.content ?? null;

      const toUpdate = { title, content };

      const article = await ArticleService.setArticle({ articleId, toUpdate });

      if (article.errorMessage) {
          throw new Error(article.errorMessage);
      }
      res.status(200).send(article);
  } catch(error) {
      next(error);
  }
});


/**
 *  @swagger
 *  paths:
 *   /article/{id}:
 *     delete:
 *       summary: 게시글 삭제
 *       tags: [Article]
 *       produces:
 *         - "application/json"
 *       parameters:
 *         - in: path
 *           name: id
 *           description: 게시글 삭제
 *       responses:
 *         "200":
 *           description: Delete article.
 */

articleRouter.delete("/article/:id", loginRequired, async function (req, res, next) {
  try {
    // req (request) 에서 id 가져오기
    const articleId = req.params.id;

    // 위 id를 이용하여 db에서 데이터 삭제하기
    const result = await ArticleService.deleteArticle({ articleId });

    if (result.errorMessage) {
      throw new Error(result.errorMessage);
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});


//pagination
articleRouter.get('/', async function(req, res){ // 1
  var page = Math.max(1, parseInt(req.query.page));   // 2
  var limit = Math.max(1, parseInt(req.query.limit)); // 2
  page = !isNaN(page)?page:1;                         // 3
  limit = !isNaN(limit)?limit:10;                     // 3

  var skip = (page-1)*limit; // 4
  var count = await Post.countDocuments({}); // 5
  var maxPage = Math.ceil(count/limit); // 6
  var posts = await Post.find({}) // 7
    .populate('author')
    .sort('-createdAt')
    .skip(skip)   // 8
    .limit(limit) // 8
    .exec();

  res.render('posts/index', {
    posts:posts,
    currentPage:page, // 9
    maxPage:maxPage,  // 9
    limit:limit       // 9
  });
});


  export { articleRouter }