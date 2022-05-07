import React, {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import '../../css/blog/BlogHeader.css'
import { UserStateContext, dispatchContext } from "../../App";


function BlogHeader() {
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
    <div className="blogHeaderContainer">
      <div className="blogHeader">
        <div className='naviBar'>
          <div className='navi1' />
          <div className='naviTitle' onClick={() => navigate('/main')}>FoodLog</div>
          <div className='navi2' />
          <div className='naviContent'>
            {!isLogin && <button onClick={() => navigate('/register')}>회원가입</button>}
            {!isLogin && <button onClick={() => navigate('/login')}>로그인</button>} 
            {isLogin && <button onClick={() => navigate('/BlogPost')}>글작성</button>}
            {isLogin && <button onClick={logout}>로그아웃</button>}
            <button onClick={() => navigate('/graph')}>그래프</button> 
            <button onClick={() => navigate('/team')}>팀페이지</button>
          </div>
          <div className='navi3' />
        </div>

      </div>
    </div>
  )

}

export default BlogHeader