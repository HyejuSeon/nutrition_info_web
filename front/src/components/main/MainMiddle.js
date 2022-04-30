import React from "react";
import '../../css/main/MainMiddle.css' 
import FoodImg from '../../images/main/MainMiddle/foodImg.jpg'
import { useNavigate, useParams } from "react-router-dom";


function MainMiddle () {
  return (
  <div className='mainMiddleContainer'>  
    <div className="MainMiddle">
      <div className="middleBox1">
        <div className="middleBox1-1">
          <div className="row1">빅데이터</div>
          <div className="row2">식품종류 <b>300개</b></div>
          <div className="row3">식품 영양분 정보를 한자리에 모아놨습니다.</div>
          <div className="row4">빅데이터에 기반한 정보들을 확인해보세요.</div>
          <div className="row5">다양한 정보를 아티클에서 확인하고</div>
          <div className="row6">자신의 입력정보를 바탕으로</div>
          <div className="row7">부족한 영양분을 확인해보세요.</div>
        </div>
      </div>
      <div className="middleBox2">
        <div className="middleBox2-1">
          <img className="imageBox" src={FoodImg} alt="푸드피라미드" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainMiddle
