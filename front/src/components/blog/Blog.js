import React from 'react'
import '../../css/blog/Blog.css'

import BlogHeader from './BlogHeader';
import BlogMiddleArticle from './BlogMiddleArticle';
import BlogTail from './BlogTail';

function Blog() {
  return (
    <div className="blogWrapper">
      <div className="blogContainer">
        <BlogHeader />
        <BlogMiddleArticle />
        <BlogTail />
      </div>
    </div>

  )

}

export default Blog