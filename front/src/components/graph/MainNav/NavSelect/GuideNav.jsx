import React from 'react'
import Sample1 from '../../Apex/Sample';
import Bubble from './../../Apex/Bubble';
import './NavSelect.css'

const GuideNav = () => {

  return (
    <div className='content'>
      <div className='contentIn'>
        <div className='TopSpace'>💜</div>
        <Sample1 />
        <div className='MidSpace'>💚</div>
        <div>
        <Bubble></Bubble>
        </div>
      </div>

    </div>
  )
}

export default GuideNav