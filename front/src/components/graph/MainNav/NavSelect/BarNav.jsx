import React, { useState, useEffect } from 'react'
import BarLine from '../../Apex/BarLine';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import './NavSelect.css'
import axios from "axios";
import qs from 'qs';

const BarNav = () => {
  const [categories, setCategories] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")  // 실제 선택한거
  const [nutrients, setNutrients] = useState("")
  const [selectedNutrient, setSelectedNutrient] = useState("")
  const [data, setData] = useState("")



  useEffect(() => {
    Api.get("food/category")
    .then((res) => {
      console.log('바차트누름')
      setCategories(res.data)
    })
  }, [])

  useEffect(() =>{
      // const params = {category :'desserts'}; //categpry=카테고리명
    if(selectedCategory){
    Api.get("food/nutrients")
      .then((res) => {
        console.log('2번째 사이드바_예제 디저트')
        console.log(res.data)
        setNutrients(res.data)
        setSelectedNutrient('')
      })
    }
  }, [selectedCategory])

  useEffect(() => {
    if(selectedCategory && selectedNutrient){
      axios.get(`http://localhost:5001/food-rank`,{
            params: {
              category: selectedCategory, //rank1
              nutrients: selectedNutrient    // rank2
            }
          })
          .then((res) => {
            // console.log(res.data)
            console.log('axios Test')
            console.log(res.data)
            setData(res.data)
            // console.log(res.data)
          });
    }
  }, [selectedNutrient])

  
  return (
    <div className='content'>
      <div className='Aside'>
        {categories && <Sidebar data={categories} setData={setSelectedCategory}></Sidebar>}
        {nutrients && <Sidebar data={nutrients.map(nutrient => {return nutrient})} setData={setSelectedNutrient}></Sidebar>}
      </div>

      <div className="Graph">
        {data && <BarLine data={data}></BarLine>}
      </div>
    </div>
  )
}

export default BarNav