import React, { useState } from 'react'
import BarNav from './NavSelect/BarNav';
import DonutNav from './NavSelect/DonutNav';
import RadarNav from './NavSelect/RadarNav';
import GuideNav from './NavSelect/GuideNav';
import './MainNav2.css'

const Guide = (props) => {
  return <div style={{display: 'inline-block'}}>
    <button className='GuideButton'><a href="/" onClick={function (event) {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></button>
  </div>
}

const Donut = (props) => {
  return <div>
  <button className='DonutButton'><a href="/" onClick={function (event) {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></button>
</div>
}
const Radar = (props) => {
  return <div>
  <button className='RadarButton'><a href="/" onClick={function (event) {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></button>
</div>
}

const Bar = (props) => {
  return <div>
  <button className='BarButton'><a href="/" onClick={function (event) {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></button>
</div>
}


/////////////////////////////
const MainNav2 = () => {
  const [mode, setMode] = useState('GUIDE');

  let content = null;
  if (mode === 'GUIDE') {
    content = <GuideNav></GuideNav>
  }else if (mode === 'DONUT') {
    content = <DonutNav></DonutNav>;
  }else if (mode === 'RADAR') {
    content = <RadarNav></RadarNav>
  }else if (mode === 'BAR') {
    content = <BarNav></BarNav>
  }

  return (
    <div className='MainNav' >
      <div className='MainNavButton'>
        <div className='MainNavGlass1'>
          <Guide title="Start_" onChangeMode={() => {
            setMode((mode) => 'GUIDE');
          }}></Guide>
          <Donut title="Donut_" onChangeMode={() => {
            setMode((mode) => 'DONUT');
          }}></Donut>
          <Radar title="Radar_" onChangeMode={() => {
            setMode((mode) => 'RADAR');
          }}></Radar>       
          <Bar title="Bar__" onChangeMode={() => {
            setMode((mode) => 'BAR');
          }}></Bar>
        </div>
      </div>

      <div className='MainNavGlass2'>
        {content}
      </div> 
    </div>


  )
}

export default MainNav2