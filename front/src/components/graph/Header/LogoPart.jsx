import React from 'react'
import Logo from '../../../images/graph/logo.png'
import '../../../css/graph/LogoPart.css'
import { UilCrockery } from '@iconscout/react-unicons'

const LogoPart = () => {
  return (
      <div>
        <div className="logo">
        <img src={Logo} alt="ImgFail" />
        <UilCrockery></UilCrockery>
          <span>
            Food<span>L</span>og
          </span>
        </div>
    </div>
  )
}

export default LogoPart