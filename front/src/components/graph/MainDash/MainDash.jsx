import React from 'react'
import Donut from './../Apex/Donut';
import BarLine from './../Apex/BarLine';
import Radar from './../Apex/Radar';
import Bubble from './../Apex/Bubble';


const MainDash = () => {
  return (
      <div>
          <h1>Dashboard</h1>
          <Donut></Donut>
          {/* <BarLine></BarLine> */}
          {/* <Radar></Radar> */}
          <Bubble></Bubble>
    </div>
  )
}

export default MainDash