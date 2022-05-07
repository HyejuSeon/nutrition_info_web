import React, { useState, useEffect} from 'react'
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import Donut from '../../Apex/Donut';
import './NavSelect.css'
import axios from "axios";


const DonutNav = () => {
  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
  const [data, setData] = useState("")

  useEffect(() => {
    Api.get("food/category")
    .then((res) => {
      setCategories(res.data)
    })
  }, [])


  useEffect(()=> {
    if(selectedCategroy){
      axios.get(`http://localhost:5001/nutrients-avg?category=${selectedCategroy}`)
      .then((res) => {
        setData(res.data);
      });
    }
  }, [selectedCategroy])


  return (
    <div className='content'>
      <div className='Aside'>
        {categories && <Sidebar data={categories} setData={setSelectedCategory}></Sidebar>}
      </div>
      <div className="Graph">
        {data && <Donut data={data}></Donut>}
      </div>
    </div>
  )
}

export default DonutNav