import React from 'react'
import '../../css/graph/GraphPage.css'
import GraphHeader from './Header/GraphHeader';
import MainNav2 from './MainNav/MainNav2';


const GraphPage = () => {
  return (
    <div className="GraphPageWrap">
      <div className="graphHeaderContainer">
        <GraphHeader></GraphHeader>
      </div>
      <div className='GraphPage'>
        <div className="GraphPageGlass">
          <MainNav2></MainNav2>
        </div>
      </div>
      <div className="GraphPageFooter">
        <div className="GraphPageFooterImg">
        </div>
      </div>
    </div>
  )
}

export default GraphPage