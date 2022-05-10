import React from 'react'
import '../../css/team/Team.css'
import TeamHeader from './TeamHeader';
import Team from './Team';


const TeamPage = () => {
  return (
    <div className="TeamPageWrap">
        <TeamHeader></TeamHeader>
      {/* </div> */}
      <div className='TeamPage'>
        <Team></Team>
      </div>
    </div>
  )
}

export default TeamPage