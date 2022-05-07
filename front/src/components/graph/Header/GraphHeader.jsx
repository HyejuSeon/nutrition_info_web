import React, {useContext} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../../css/graph/GraphHeader.css'
import { UserStateContext, dispatchContext } from "../../../App";


function GraphHeader() {
  const navigate = useNavigate()
  const userState = useContext(UserStateContext);
  const dispatch = useContext(dispatchContext)

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃시 작동되는 함수 작성
  
    function logout() {
      //sessionStorage에 저장되었던 JWT토큰을 삭제함.
      sessionStorage.removeItem("userToken")
      // dispatch 함수를 이용해 로그아웃함. 
      dispatch({type: "LOGOUT"})
      // 블로그 페이지로 돌아감. 
      navigate('/main');
    }

  return (
    <div className="graphHeaderContainer">
      <div className="graphHeader">
        <div className='naviBarG'>
          <div className='navi1G' />
          <button onClick={() => navigate('/main')} className='naviTitleG'>FoodLog</button>
          <div className='navi2G' />
          <div className='naviContentG'>
            {!isLogin && <button onClick={() => navigate('/register')}>회원가입</button>}
            {!isLogin && <button onClick={() => navigate('/login')}>로그인</button>} 
            {isLogin && <button onClick={() => navigate('/blogPost')}>글작성</button>}
            {isLogin && <button onClick={logout}>로그아웃</button>}
            <button onClick={() => navigate('/blog')}>블로그</button> 
            <button onClick={() => navigate('/team')}>팀페이지</button>
          </div>
          {/* <div className='navi3' /> */}
        </div>

      </div>
    </div>
  )

}

export default GraphHeader