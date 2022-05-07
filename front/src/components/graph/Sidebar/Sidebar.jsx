import React, { useState, useEffect } from 'react'
import '../../../css/graph/Sidebar.css'

const Sidebar = (props) => {
  const [data, setData] = useState('o')
  const [selected, setSelected] = useState(0)

  useEffect(()=>{
    if(props.data[selected]){
      props.setData(props.data[selected])
    }
  }, [selected])

  useEffect(() => {

  },[props.data])
  return (
    <div className="Sidebar">
      <div className='menu'>
        {props.data && props.data.map((item, index) => {
          return (
            <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
              <span>
                {item}
              </span>
              
            </div>
            )
        })}
        

        </div>
      </div>

  )
}

export default Sidebar
