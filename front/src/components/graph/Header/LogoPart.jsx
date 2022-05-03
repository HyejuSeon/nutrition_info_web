import React from 'react'
import Logo from '../../../images/graph/logo.png'
import '../../../css/graph/LogoPart.css'


const LogoPart = () => {
  return (
      <div>
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Food<span>L</span>og
          </span>
        </div>
    </div>
  )
}

export default LogoPart