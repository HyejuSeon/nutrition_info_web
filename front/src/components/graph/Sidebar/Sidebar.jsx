import React, { useState } from 'react'
import '../../../css/graph/Sidebar.css'
// import Logo from '../../../images/graph/logo.png'

import { SidebarData } from '../Data/Data'


const Sidebar = () => {

  const [selected, setSelected] = useState(0)


  return (
    <div className="Sidebar">

      {/* 사이드 바 부분 */}
      <div className='menu'>
        {SidebarData.map((item, index) => {
          return (
            <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
              <item.icon />
              <span>
                {item.heading}
              </span>
              
            </div>
            )
        })}
        

        </div>
      </div>

  )
}

export default Sidebar
