import React from 'react'
import '../../css/blog/BlogTail.css'
import BlogSlider from './BlogSlider';

function BlogTail({topviewedArticleList}) {

  return (
    <>
      <div className="blogTailTitleBox">
        <p className="blogTailTitle">조회수 Top5</p>
      </div>
      <div className="blogTailSliderBox">
        <div className="blogTailSlider">        
        <BlogSlider topviewedArticleList={topviewedArticleList} />
        </div>
      </div>
    </>
  )   

}

export default BlogTail

