import React from 'react'
import '../../css/blog/BlogArticlePreview.css'
import { useNavigate } from "react-router-dom";

function BlogArticlePreview({id, src, title, nickname, vistied}) {
  const navigate = useNavigate()
 
  return (  

    <div className="PreviewContainer" onClick={() => navigate(`/blogArticle/${id}`)}>
      <div className="PreviewimageBox">
        <img src={src} alt='사진'></img>
      </div>
      <div className="previewArticleInfoBox">
        <div className="previewArticleTitle0">{title}</div>
      </div>
    </div>
  )

}

export default BlogArticlePreview