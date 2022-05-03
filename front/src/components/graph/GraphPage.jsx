import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import '../../css/graph/GraphPage.css'
import MainDash from './MainDash/MainDash'
import LogoPart from './Header/LogoPart'
import NavPart from './Header/NavPart';


const GraphPage = () => {
  return (
    <div>
      <div className="Header">
        <div className="HeaderGlass">
          <LogoPart></LogoPart>
          <NavPart></NavPart>
        </div>
      </div>
      <div className='GraphPage'>
        <div className="GraphPageGlass">
          <Sidebar></Sidebar>
          <MainDash></MainDash>
        </div>
      </div>      
    </div>

  )
}

export default GraphPage