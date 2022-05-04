import React from 'react'
import '../../css/blog/BlogArticlePreview.css'

function BlogArticlePreview(props) {

  return (

    <div className="PreviewContainer">
      <div className="PreviewimageBox">
        <img src={props.src} alt='사진'></img>
      </div>
      <div className="titleBox">{props.title}</div>
    </div>
  )

}

export default BlogArticlePreview