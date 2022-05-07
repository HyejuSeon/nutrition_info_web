import React from "react";
import '../../css/main/Main.css'
import MainHeader from './MainHeader'
import MainMiddle from './MainMiddle'
import MainTail from './MainTail'

function Main() {  
  return(
  <div className="mainWrapper">
    <div className="mainHeaderContainer">
      <MainHeader />
    </div> 

    <div className="mainMiddleContainer">  
      <MainMiddle />
    </div>
      
    <div className="mainTailContainer">
      <MainTail />
    </div>
  </div>
  ) 
}

export default Main