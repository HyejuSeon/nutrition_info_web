import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/team/Team.css'
import Github from '../../images/team/GitHubMark.png'
import Junsu from '../../images/team/Junsu.jpeg'
import Hyemin from '../../images/team/Hyemin.jpeg'
import Hyeju from '../../images/team/Hyeju.jpeg'
import Kwanho from '../../images/team/Kwanho.jpeg'
import Jongchan from '../../images/team/Jongchan.jpeg'

function Team() {

  return (
      <div className=''>
      <div id="teamInfo">
          <div className="members">
              <ul>
                  <li>
                      <img className="profilePic" src={Junsu} alt="junsu-profile-pic"></img>
                      <h2>장준수</h2>
                      <p>Leader, BE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://github.com/jjs0211">jjs0211</a>
                      </div>
                  </li>
                  <li>
                      <img className="profilePic" src={Hyemin} alt="hyemin-profile-pic"></img>
                      <h2>남혜민</h2>
                      <p>BE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://kdt-gitlab.elice.io/Heyden">heyden</a>
                      </div>
                  </li>
                  <li>
                      <img className="profilePic" src={Hyeju} alt="hyeju-profile-pic"></img>
                      <h2>선혜주</h2>
                      <p>BE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://github.com/hyejuseon">HyeJuSeon</a>
                      </div>
                  </li>
                  <li>
                      <img className="profilePic" src={Kwanho} alt="kwanho-profile-pic"></img>
                      <h2>김관호</h2>
                      <p>FE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://github.com/KwanHoo">KwanHoo</a>
                      </div>
                  </li>
                  <li>
                      <img className="profilePic" src={Jongchan} alt="jongchan-profile-pic"></img>
                      <h2>노종찬</h2>
                      <p>FE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://kdt-gitlab.elice.io/aprilgarden34">aprilgarden34</a>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      </div>
  )

}

export default Team
