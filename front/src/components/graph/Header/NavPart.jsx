import React, {useContext} from 'react'
import { UserStateContext, dispatchContext } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";
import '../../../css/graph/NavPart.css'

const NavPart = () => {
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
      navigate('/blog');
    }
  
  return (
    <div>
      <div className='naviPart'>
        {!isLogin && <button onClick={() => navigate('/register')}>회원가입</button>}
        {!isLogin && <button onClick={() => navigate('/login')}>로그인</button>} 
        {isLogin && <button>마이페이지</button>}
        {isLogin && <button onClick={logout}>로그아웃</button>}
        <button onClick={() => navigate('/graph')}>그래프</button> 
        <button onClick={() => navigate('/main')}>메인화면</button>
      </div>
    </div>
  )
}

export default NavPart