import React from 'react'
import '../../css/blog/BlogMiddleAritcle.css'
import BlogArticlePreview from '../blog/BlogArticlePreview'


function BlogMiddleArticle({latestArticleList}) {

  return (
  <>
    <p className="mainTitle">최신 기사</p>
    <div className="blogMiddleArticleContainer">
      <div className="blogMiddleAritcleBox">
        {latestArticleList.map((article) => (
          <BlogArticlePreview
            key = {article.id}
            id = {article.id}
            nickname = {article.nickName}
            title = {article.title}
            src = {article.filePath}
            vistied = {article.visited}
          />
        ))} 
      </div>
    </div>
  </>
  )

}

export default BlogMiddleArticle

