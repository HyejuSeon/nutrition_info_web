import React, { useState, useEffect } from 'react'
import Radar from '../../Apex/Radar';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import './NavSelect.css'
import axios from "axios";


const RadarNav = () => {
  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
  const [foods, setFoods] = useState("")
  const [selectedFood, setSelectedFood] = useState("")
  const [data, setData] = useState("")

  useEffect(() => {
    Api.get("food/category")
    .then((res) => {
      setCategories(res.data)
    })
  }, [])
  useEffect(() =>{
      // const params = {category :'desserts'}; //categpry=카테고리명
    if(selectedCategroy){
      axios.get(`http://localhost:5001/food/foodname?category=${selectedCategroy}`)
      .then((res) => {
        console.log('2번째 사이드바_예제 디저트')
        console.log(res.data)
        setFoods(res.data)
        setSelectedFood('')
      })
    }
  }, [selectedCategroy])

  useEffect(() => {
    if(selectedFood){
      // const params = {food :'cocoa'}; //food=음식이름
      axios.get(`http://localhost:5001/nutrients?food=${selectedFood}`)
      .then((res) => {
        setData(res.data)
      });
    }
  },[selectedFood])


  return (
    <div className='content'>
      <div className='Aside'>
        {categories && <Sidebar data = {categories} setData={setSelectedCategory}></Sidebar>}
        {foods && <Sidebar data = {foods.map(food => {return food.foodName})} setData={setSelectedFood}></Sidebar>}
      </div>

      <div className='Graph'>
        {data && <Radar data={data}></Radar>}
      </div>
    </div>
  )
}

export default RadarNav