import { Article } from "../db";
import { v4 as uuidv4 } from "uuid";

class ArticleService {
    static async addArticle({ userId, loginId, title, content }){
        const id = uuidv4();
        
        // id : article 고유 id
        // userId : user 고유 id
        // loginId : 게시글 작성자
        // title : 게시글 제목
        // content : 게시글 내용
        
        const newArticle = { id, userId, loginId, title, content };
        const createdNewArticle = await Article.create({ newArticle });

        return createdNewArticle
    }

    static async getArticle({ articleId }) {
        // 해당 id를 가진 데이터가 db에 존재 여부 확인
        const article = await Article.findById({ articleId });
        if (!article){
            const errorMessage = "해당 id를 가진 게시글은 없습니다. 다시 한 번 확인해주세요.";
            return { errorMessage }
        }
        return article
      }
    
    static async getArticleList(){
        const articles = await Article.findAll();
        return articles;
    }

    static async setArticle({ articleId, toUpdate }) {
        let article = await Article.findById({ articleId })
    
        if (!article) {
            const errorMessage = "해당 id를 가진 게시글은 없습니다. 다시 한 번 확인해주세요.";
            return { errorMessage }
        }
    
        if(toUpdate.title){
            const fieldToUpdate = "title";
            const newValue = toUpdate.title;
            article = await Article.update({ articleId, fieldToUpdate, newValue });
        }
        if(toUpdate.content){
            const fieldToUpdate = "content";
            const newValue = toUpdate.content;
            article = await Article.update({ articleId, fieldToUpdate, newValue });
        }
        return article;
      }

    static async deleteArticle({ articleId }) {
      const isDataDeleted = await Article.deleteById({ articleId });
  
      // db에서 찾지 못한 경우, 에러 메시지 반환
      if (!isDataDeleted) {
        const errorMessage =
          "해당 id를 가진 게시글은 없습니다. 다시 한 번 확인해 주세요.";
        return { errorMessage };
      }
  
      return { status: "ok" };
    }

    static async addFileInfo({ articleId, filePath }) {
      const article = await Article.findById({ articleId });

      if (!article) {
        const errorMessage = "해당 게시글은 등록 내역이 없습니다. 다시 한 번 확인해 주세요.";
        return errorMessage;
      }

      const addArticleFile = await Article.addFileById({ articleId, filePath });
      addArticleFile.errorMessage = null;

      return addArticleFile;
    }

}
export { ArticleService }