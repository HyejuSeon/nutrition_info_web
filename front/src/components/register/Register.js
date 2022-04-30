import React, { useEffect } from 'react'
import {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import * as Api from '../../api'
import '../../css/register/Register.css'


function Register() {
  
  const navigate = useNavigate()
  const [loginId, setLoginId] = useState('###')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [birthday, setBirthday] = useState('')
  const [sex, setSex] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  
  useEffect(() => {
      const birthdayInfo = String(year) + month + String(day) 
      setBirthday(birthdayInfo)
    }, [year, month, day]
  )

  
// ---------------------------------------- //
// --- Backend에 회원가입 정보 전달 함수 -------------------//

async function handleSubmit() {
  

  try {
    // "user/register" 엔드포인트로 post요청함.
    await Api.post("user/register", {
      name,
      loginId,
      password,
      birthday,
      sex,
      phoneNumber
    }); 

    // 로그인 페이지로 이동함.
    navigate("/login");
  } catch (err) {
    console.log("회원가입에 실패하였습니다.", err);
  }
};



//---- ----------------- ---------//
// -- 칸이 공란일 경우 체크 ---

  function blankCheck(id) {
    if(id.length === 0) {
      return true
    } else return false
  }

// ---------------------------  //
// -- ID 체크 --------

  function idCheck(loginId) {
    const idRegex = /^[-_a-z0-9]{6,20}$/g;
    return loginId.match(idRegex) } 
  
  const idBlankValid = blankCheck(loginId)
  const isIdValid = idCheck(loginId)
  

// -------------------------------------------------------//
// ---- Passowrd 체크, Password 다시 입력 체크 ------


  function passwordCheck(password) {
    // '8~20자 영문과 숫자 조합을 사용하세요.'
    const passwordRegex = /^(?=.{0,28}[0-9])[0-9a-zA-Z]{8,20}$/g
    return password.match(passwordRegex)
  }
  
  const passwordBlankValid = blankCheck(password)
  const isPasswordValid = passwordCheck(password)

  function confirmPasswordCheck(confirmPassword) {
    if(password === confirmPassword) {
      return '비밀번호 확인이 완료되었습니다.'
    }
      else {
        return '비밀번호가 일치하지 않습니다.'
      }
  }

  const isconfirmPasswordValid = confirmPasswordCheck(confirmPassword)

// -------------------------------------------------//
// ------- Name 체크 ----------


  function nameCheck(name) {
    // 한글과 영문 대 소문자를 사용하세요.
    const nameRegex = /^[a-zA-Z가-힣]{1,30}/g;
    return name.match(nameRegex)
  }

  const nameBlankValid = blankCheck(name)
  const isNameValid = nameCheck(name)


  // ----------------------------------------------------//
  // -------- Birthday 체크 (year, month, day) ----


  function birthdayCheck(year, month, day){

    if (year.length !== 4) {
    return '태어난 년도 4자리를 정확하게 입력하세요.'
   } 
    else if (month.length === 0) {
    return '태어난 월을 선택하세요'
    } 
    else if (day.length !== 2) {
    return '태어난 일(날짜) 2자리를 정확하게 입력하세요.'
    }
    else if ( year % 1 !== 0 || year < 1920 || year > 2022 || day % 1 !== 0 || day < 1 || day > 31 ) {
    return '생년월일을 다시 확인해주세요.'
    } 
    else {
      return true
    }
  }
  
  const isBirthdayValid = birthdayCheck(year, month, day)


  // --------------------------------------------------------------//
  // ---------------- sex 체크 -----------------

  function sexCheck(sex) {

    if (sex.length === 1) {
      return true
    }
  }

    const isSexValid = sexCheck(sex)
  
  // --------------------------------------------------------------//
  // ------------ PhoneNumber 체크 -----------------

  function phoneNumberCheck(phoneNumber) {

    if (phoneNumber.length === 11) {
      return true
    }
  }

  const isPhoneNumberValid = phoneNumberCheck(phoneNumber)

/// -------------------------------------------------------------------//
// ----------------- 여기부터 컴퍼넌트 ------------------//

  return (
    <div className='RegisterContainer'>
      <div className='headerContainer'>
        <div className='headerTitle'>Foodlog</div>
      </div>
      
      <div className="idContainer">
        <div className="idTitle">아이디</div>
        <input className='idBox' type='text' onBlur={(e) => setLoginId(e.target.value)} />
        <div className='checker'>{idBlankValid ? '필수 정보입니다.' : isIdValid ? '멋진 아이디네요!' : '6~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용해주세요.'}</div>
      </div>

      <div className="passwordContainer">
        <div className="passowrdTitle">비밀번호</div>
        <input className='passwordBox' type='password' onBlur={(e)=> setPassword(e.target.value)} />
        <div className='checker'>{passwordBlankValid ? '필수 정보입니다' : isPasswordValid ? '멋진 비밀번호네요!' : '8~20자로 영문과 숫자를 조합해주세요.'}</div>
        
        <div className='confirmTitle'>비밀번호 재확인</div>
        <input className="confirmBox" type='password' onInput={(e)=>setConfirmPassword(e.target.value)} onBlur={confirmPasswordCheck} />
        <div className="checker">{isconfirmPasswordValid}</div>
      </div>

      <div className="nameContainer">
        <div className="nameTitle">이름</div>
        <input className='nameBox' type='name' maxLength={30} onBlur={(e) => setName(e.target.value)}></input>
        <div className='checker'>{nameBlankValid ? '필수 정보입니다.' : !isNameValid && '한글과 영문 대 소문자를 사용하세요'}</div>
      </div>

      <div className="birthContainer">
        <div className="birthTitle">생년월일</div>
        <input className='yearBox' type='number' onBlur={(e) => setYear(e.target.value)}></input>
        <select className='monthBox' aria-label='월' onBlur={(e) => setMonth(e.target.value)}>
          <option value='' selected>달</option>
          <option value='01'>1</option>
          <option value='02'>2</option>
          <option value='03'>3</option>
          <option value='04'>4</option>
          <option value='05'>5</option>
          <option value='06'>6</option>
          <option value='07'>7</option>
          <option value='08'>8</option>
          <option value='09'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
        </select>
        <input className='dayBox' type='number' onBlur={(e) => setDay(e.target.value)}></input>
        <div className='checker'>{isBirthdayValid}</div>
      </div>

      <div className="sexContainer">
        <div className="sexTitle">성별</div>
        <select className='sexBox' id='gender' name='gender' aria-label='성별' onInput={(e) => setSex(e.target.value)}>
          <option value='' selected>성별</option>
          <option value='M'>남자</option>
          <option value='F'>여자</option>
          <option value='U'>선택 안함</option>
        </select>
        <div className='checker'>{!isSexValid && '성별을 입력해주세요.'}</div>
      </div>

      <div className="phoneNumberContainer">
        <div className="phoneNumberTitle">휴대전화</div>
        <input className='phoneNumberBox' type='number'onBlur={(e) => setPhoneNumber(e.target.value)}></input>
        <div className='phoneNumberChecker'>{!isPhoneNumberValid && '휴대폰 번호를 다시 확인해주세요' }</div>
      </div>

      <button className="registerButton" 
        onClick={handleSubmit}
      disabled={!(isIdValid&&isPasswordValid&&isconfirmPasswordValid&&isNameValid&&isBirthdayValid&&isSexValid&&isPhoneNumberValid)}>가입하기</button>
    </div>


  )


}

export default Register