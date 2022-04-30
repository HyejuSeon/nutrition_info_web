import React from "react";
import '../../css/main/MainTail.css'
import { useNavigate, useParams } from "react-router-dom";
import foodCommunity from '../../images/main/MainTail/foodComunity.jpg'

function MainBottom() {
  return (
    <div className="MainTail">
      <div className="TailBox1">
        <div className="TailBox1-1">
          <div className="row1">커뮤니티</div>
          <div className="row2">사용자 <b>300만명</b></div>
          <div className="row3">다양한 건강관련 의견을 공유하세요</div>
          <div className="row4">빅데이터에 기반한 정보들을 공유하세요.</div>
          <div className="row5">다양한 정보를 아티클에서 확인하고</div>
          <div className="row6">자신의 입력정보를 바탕으로</div>
          <div className="row7">부족한 영양분을 확인해보세요.</div>
        </div>
      </div>
      <div className="TailBox2">
        <div className="TailBox2-1">
          <img className="imageBox" src={foodCommunity} alt='음식모임' />
        </div>
      </div>
    </div>
  )
}

export default MainBottom