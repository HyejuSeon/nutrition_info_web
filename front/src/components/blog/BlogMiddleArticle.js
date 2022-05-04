import React, {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/blog/BlogMiddleAritcle.css'
import BlogArticlePreview from '../blog/BlogArticlePreview'

// import FoodArticle1 from '../../images/blog/FoodArticle1.jpg'
// import FoodArticle2 from '../../images/blog/FoodArticle2.jpg'
// import FoodArticle3 from '../../images/blog/FoodArticle3.jpg'
// import FoodArticle4 from '../../images/blog/FoodArticle4.jpg'
// import FoodArticle5 from '../../images/blog/FoodArticle5.jpg'
// import FoodArticle6 from '../../images/blog/FoodArticle6.jpg'

function BlogMiddleArticle() {

  const [src, setSrc] = useState('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDdfNjgg%2FMDAxNjQ5Mjk1MDU3MTc4.RCR84sazKB0a5ITWjV8WMjgNEUG0XMfEFepWPiSCtOMg.WGTVyxbRGDd9G9JGpPD7TnIFVoYFB8JSbMU7snNlB-Ig.JPEG.funny7660%2F137.jpg&type=sc960_832')

  const [title, setTitle] = useState('기본타이틀')

  const [nickname, setNickName] = useState('기본닉네임')

  return (
  <>
    <p className="mainTitle">최신 기사</p>
    <div className="blogMiddleArticleContainer">
      <div className="blogMiddleAritcleBox">
        <BlogArticlePreview src={src} title={title} nickname={nickname}></BlogArticlePreview>
        <BlogArticlePreview></BlogArticlePreview>
        <BlogArticlePreview></BlogArticlePreview>
        <BlogArticlePreview></BlogArticlePreview>
        <BlogArticlePreview></BlogArticlePreview>
        <BlogArticlePreview></BlogArticlePreview>       
      </div>
    </div>
  </>
  )

}

export default BlogMiddleArticle

