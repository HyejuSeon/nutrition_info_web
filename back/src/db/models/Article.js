import { ArticleModel } from "../schemas/article";

class Article {
    // 입력 받은 게시글 정보 생성
    static async create({ newArticle }) {
      const createdNewArticle = await ArticleModel.create(newArticle);
      return createdNewArticle;
    }

    // 게시글의 고유한 id로 게시글 검색(사용자가 작성한 게시글 검색)
    static async findById({ articleId }) {
      const article = await ArticleModel.findOne({ id : articleId });
      return article;
    }
    
    // // 게시글의 고유한 id로 게시글 검색(db에 저장되어 있는 게시글 검색)
    // static async findById({ articleId }) {
    //   const article = await ArticleModel.findOne({ _id: articleId });
    //   return article;
    // }

    static async findAll(){
      const articles = await ArticleModel.find({});
      return articles;
    }
    
    // 입력받은 값들로 게시글 업데이트(수정)
    static async update({ articleId, fieldToUpdate, newValue }) {
      const filter = { id: articleId };
      const update = { [fieldToUpdate]: newValue };
      const option = { returnOriginal: false };
  
      const updatedArticle = await ArticleModel.findOneAndUpdate(
        filter,
        update,
        option
      );
      return updatedArticle;
    }
    
    // 게시글 삭제
    static async deleteById({ articleId }) {
      const deleteResult = await ArticleModel.deleteOne({ id: articleId });
      const isDataDeleted = deleteResult.deletedCount === 1;
      return isDataDeleted;
    }

    static async addFileById({ articleId, filePath }) {
      const filter = { id : articleId };
      const update = { filePath : filePath };
      const option = { new: true };

      const addFileArticle = await ArticleModel.findOneAndUpdate(
        filter,
        update,
        option
      );
      return addFileArticle;
    }
}
  
export { Article };