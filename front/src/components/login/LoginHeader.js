import React from 'react'
import { useNavigate } from "react-router-dom";
import '../../css/login/LoginHeader.css'

function LoginHeader() {
  const navigate = useNavigate()  

  return (
    <div className='loginHeaderContainer'>
      <div className='loginHeaderTitle' onClick={() => navigate('/blog')}>Foodlog</div>
    </div>
  )
}

export default LoginHeader