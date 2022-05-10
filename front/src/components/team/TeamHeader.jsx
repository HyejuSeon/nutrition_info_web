import React from "react";
import '../../css/team/TeamHeader.css'
import { useNavigate } from "react-router-dom";


const TeamHeader = () => {
    const navigate = useNavigate();

  return (
      <div className="teamHeaderContainer">
      <div className="teamHeader">
        <div className="naviBarG">
        <div className='navi1G' />
        <button onClick={() => navigate('/main')} className='naviTitleG'>FoodLog</button>
        <div className='navi2G' />
        <div className="NaviContentT">
            <button onClick={() => navigate('/blog')}>블로그</button> 
            <button onClick={() => navigate('/graph')}>그래프</button>
        </div>
        </div>
        </div>
      </div>
  );
};

export default TeamHeader;
