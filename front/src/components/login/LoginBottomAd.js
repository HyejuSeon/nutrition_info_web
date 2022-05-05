import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/login/LoginBottomAd.css'
import bottomAd from '../../images/login/loginBottomAd/bottomAd.jpg'

function LoginBottomAd() {
  return (
    <div className='bottomAdContainer'>
      <img className='bottomAdImage'
        src={bottomAd} alt="하단광고"></img>
    </div>
  )
}

export default LoginBottomAd