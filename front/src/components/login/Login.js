import React, {useState, useContext} from 'react'
import {useNavigate} from "react-router-dom";

import * as Api from '../../api'
import { dispatchContext } from '../../App';

import LoginHeader from './LoginHeader';
import LoginBottom from './LoginBottom';
import LoginBottomAd from './LoginBottomAd';
import '../../css/login/Login.css'


function Login() {
  
  const dispatch = useContext(dispatchContext)
  const Navigate = useNavigate();

  const [ loginId, setLoginId ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ alert, setAlert ] = useState('')
  
  //id가 공백인지 확인함
  const isIdBlank = (id) => id.length <= 0

  //위 isIdBlank 함수를 통해 Id가 입력이 되었는지를 확인함.
  const isIdValid = isIdBlank(loginId)

  //password가 공백인지 확인함
  const isPasswordBlank = (password) => password.length <= 0

  //위 isPasswordBlank 함수를 통해 Password가 입력이 되었는지를 확인함.
  const isPasswordValid = isPasswordBlank(password)



/// ------------------------------------ 여기서부터 백엔드 전달 부분 --------------------------------- /// 



async function handleSubmit() {
    
  if (isIdValid) {
      setAlert('아이디를 입력해 주세요.')
    }
    else if (isPasswordValid) {
      setAlert('비밀번호를 입력해 주세요.')
    }
  // 백엔드 전달하는 부분 //
    else {
      try {
        // "user/login" 엔드포인트로 post요청함.
        const res = await Api.post("user/login", {
          loginId,
          password,
        });

        // 유저 정보는 response의 data임.
        const user = res.data;

        // JWT 토큰은 유저 정보의 token임.
        const jwtToken = user.token;

        // sessionStorage에 "userToken"이라는 키로 JWT 토큰을 저장함.
        sessionStorage.setItem("userToken", jwtToken);

        // dispatch 함수를 이용해 로그인 성공 상태로 만듬.
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: user,
        })

        // 시작 페이지로 이동함.
        Navigate("/blog", {replace: true});
      } catch (err) {
        console.log("로그인에 실패하였습니다.\n", err);
      }
    }
  }


  //  ----------------------------------------------- 여기 까지 --------------------------------------------



  return (
    <div className='loginWrapper'>
      <div className='loginContainer'>
        <LoginHeader />
        <div className='middleContainer'>
          <input className='idBox' type='text' name='loginId' placeholder='아이디' value={loginId} onChange={(e) => setLoginId(e.target.value)} />
          <input className="passwordBox" type='password' name='password' placeholder='패스워드' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className='alertBox'>{alert}</div>
          <button className="loginButton" name="loginButton" onClick={handleSubmit}>Login</button>
        </div>
        <LoginBottom />
        <LoginBottomAd />
      </div>
    </div>
  )
}

export default Login