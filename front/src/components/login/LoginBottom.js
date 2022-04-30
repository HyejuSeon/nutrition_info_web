import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/login/LoginBottom.css'

function LoginBottom() {
  return (
    <div className='bottomContainer'>
      <div className='bottomContents'>
        <a className="searchPassword">비밀번호 찾기</a>
        <a className="searchId">아이디 찾기</a>  
        <a className="registration">회원 가입</a>
      </div>

    </div>
  )
}

export default LoginBottom