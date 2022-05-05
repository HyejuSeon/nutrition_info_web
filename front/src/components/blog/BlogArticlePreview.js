import React from 'react'
import '../../css/blog/BlogArticlePreview.css'
import { useNavigate } from "react-router-dom";

function BlogArticlePreview({id, src, title}) {
  const navigate = useNavigate()
 
  return (  

    <div className="PreviewContainer" onClick={() => navigate(`/blogArticle/${id}`)}>
      <div className="PreviewimageBox">
        <img src={src} alt='사진'></img>
      </div>
      <div className="titleBox">{title}</div>
    </div>
  )

}

export default BlogArticlePreview