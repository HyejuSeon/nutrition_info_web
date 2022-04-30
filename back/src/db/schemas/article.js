import { Schema, model } from "mongoose";

const articleSchema = new Schema(
    {
    // 게시글 작성자
    loginId: {
        type: String,
        required: true,
    },
    // 게시글 제목
    title: {
      type: String,
      required: true,
    },
    // 게시글 내용
    content: {
      type: String,
      required: true,
    },
    // 게시글의 고유 id
    id: {
      type: String,
      required: true,
    },
    // 게시글 작성자의 고유 id
    userId: {
      type: String,
      required: true,
    },
    // 게시글 좋아요 수
    likeCount: {
        type: Number,
        required: false,
        default: 0,
      },
    // 게시글 조회수
    visited: {
        type: Number,
        required: false,
        default: 0,
    },
  },
  {
      // createdAt, updatedAt 자동 생성
    timestamps: true,
  }
);

const ArticleModel = model("Article", articleSchema);

export { ArticleModel };