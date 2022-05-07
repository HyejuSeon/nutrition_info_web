import React from "react";
import '../../css/main/MainHeader.css'
import mainHeaderImg1_1 from '../../images/main/MainHeader/mainHeader1-1.jpg'
import mainHeaderImg2_1 from '../../images/main/MainHeader/mainHeader2-1.jpg'
import mainHeaderImg3_1 from '../../images/main/MainHeader/mainHeader3-1.jpg'

import { useNavigate } from "react-router-dom";




function MainHeader() {
  const navigate = useNavigate();
  
  return (
  
    <div className="MainHeader">
      <div className="headerColumn1"></div>
      <div className="headerColumn2">
      <div className="HeaderTitle">Foodlog</div>
      <div className="HeaderTitle2">빅데이터 기반으로 한 식품 영양소와 관련 기사 </div>
      <div className="imageBox">
        <img className="image1" 
          src={mainHeaderImg1_1} alt="블루베리" />
        
        <img className="image2" 
          src={mainHeaderImg2_1} alt="아몬드" />
        
        <img className="image3" 
          src={mainHeaderImg3_1} alt="야채" />   
      </div>
      <button className="linkButton" onClick={() => navigate('/blog')}>블로그 링크 바로가기</button>
      </div>
    </div>
  
    )
}

export default MainHeader