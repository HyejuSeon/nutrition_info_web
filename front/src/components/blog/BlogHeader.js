import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import FoodLogBlog from '../../images/blog/FoodLogBlog3.jpg'
import '../../css/blog/BlogHeader.css'


function BlogHeader() {

  return (
    <div className="blogHeaderContainer">
      <div className="blogHeader">
        <div className='naviBar'>
          <div className='navi1' />
          <div className='naviTitle'>FoodLog</div>
          <div className='navi2' />
          <div className='naviContent'>
            <a>회원가입</a> 
            <a>로그인</a> 
            <a>그래프</a> 
            <a>제품보기</a>
          </div>
          <div className='navi3' />
        </div>

      </div>
    </div>
  )

}

export default BlogHeader