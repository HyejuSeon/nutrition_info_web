import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/login/LoginHeader.css'

function LoginHeader() {
  return (
    <div className='headerContainer'>
      <div className='headerTitle'>Foodlog</div>
    </div>
  )
}

export default LoginHeader