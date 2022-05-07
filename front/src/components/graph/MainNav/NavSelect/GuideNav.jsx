import React, { useState, useEffect } from 'react'
import * as Api from '../../../../api';
import axios from "axios";
import Sample1 from '../../Apex/Sample';
import qs from 'qs';

const GuideNav = () => {

  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
  useEffect(() => {


    const params = {food :'rice'};
    axios.get(`http://localhost:5001/nutrients?${qs.stringify(params)}`)
    .then((res) => {
    });
    
  }, [])


  return (
    <div>
      <span>가이드네비</span>
      <Sample1 />
      <p data = {categories}>차트에 대한 가벼운 설명 부분 {categories}</p>
      
    </div>
  )
}

export default GuideNav