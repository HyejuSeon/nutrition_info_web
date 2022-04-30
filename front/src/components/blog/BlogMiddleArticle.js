import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/blog/BlogMiddleAritcle.css'
import FoodArticle1 from '../../images/blog/FoodArticle1.jpg'
import FoodArticle2 from '../../images/blog/FoodArticle2.jpg'
import FoodArticle3 from '../../images/blog/FoodArticle3.jpg'
import FoodArticle4 from '../../images/blog/FoodArticle4.jpg'
import FoodArticle5 from '../../images/blog/FoodArticle5.jpg'
import FoodArticle6 from '../../images/blog/FoodArticle6.jpg'

function BlogMiddleArticle() {

  return (
    <div className="blogMiddleArticleContainer">
      <div className="blogMiddleAritcleBox">
        <div className="articleBoxTitle">최신 기사</div>
        
        <div className="articleColumn1">
          <div className='article1'>
            <a className='articleImage'>
              <img src={FoodArticle1} alt="기사1 이미지"></img>  
            </a>
            <div className='articleTitle'>
              택배 파업에 대처하는 와이즐리의 3가지 방법
              <p className='articleTitleDate'>2022년 4월 27일</p>  
            </div>
          </div>
          <div className='article2'>
            <a className='articleImage'>
              <img src={FoodArticle2} alt="기사2 이미지"></img> 
            </a>
            <div className='articleTitle'>
              생초짜 신입에서 와이즐리 PM으로 거듭나기
              <p className='articleTitleDate'>2022년 4월 27일</p>  
            </div>
          </div>
        </div>
        
        <div className="articleColumn2">
          <div className='article3'>
            <a className='articleImage' >
              <img src={FoodArticle3} alt="기사3 이미지"></img>    
            </a>
            <div className='articleTitle'>
              WISELY PRO 런칭, 1년 동안 PM으로서 배운 것들
              <p className='articleTitleDate'>2022년 4월 27일</p>  
            </div>
          </div>
          <div className='article4'>
            <a className='articleImage'>
              <img src={FoodArticle4} alt="기사4 이미지"></img>    
            </a>
            <div className='articleTitle'>
              탈모 샴푸, 효과 있을까?
              <p className='articleTitleDate'>2022년 4월 27일</p>  
            </div> 
          </div>
        </div>
        
        <div className="articleColumn3">
          <div className='article5'>
            <a className='articleImage'>
              <img src={FoodArticle5} alt="기사5 이미지"></img>  
            </a>
            <div className='articleTitle'>
              '칼의 도시' 졸링겐으로 면도날 공장 투어
              <p className='articleTitleDate'>2022년 4월 27일</p>    
            </div>
          </div>
          <div className='article6'>
            <a className='articleImage'>
              <img src={FoodArticle6} alt="기사6 이미지"></img>  
            </a>
            <div className='articleTitle'>
              와이즐리가 제품을 만드는 원칙과 과정
              <p className='articleTitleDate'>2022년 4월 27일</p>  
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )

}

export default BlogMiddleArticle

