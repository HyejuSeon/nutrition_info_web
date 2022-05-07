import React, {useEffect, useState} from 'react'
import '../../css/blog/Blog.css'

import BlogHeader from './BlogHeader';
import BlogMiddleArticle from './BlogMiddleArticle';
import BlogTail from './BlogTail';
import * as Api from '../../api'


function Blog() {
  
  const [latestArticleList, setLatestArticleList] = useState([]) 
  const [topviewedArticleList, setTopviewedArticleList] = useState([])

  useEffect(() => {
    Api.get("articlelist").then((res) => {
      const arrData = res.data
      const newArr = [...arrData]
      const reversedArr = newArr.reverse()  
      const latesteArticleData = reversedArr.slice(0,6)
      setLatestArticleList(latesteArticleData)
    
      const newArr2 = [...arrData]
      const selectedArr = newArr2.sort((a, b) => {
        if (a.visited > b.visited) return -1;
        if (a.visited < b.visited) return 1;
        return 0  
      })
      const topviewedArticleData = selectedArr.slice(0,5)
      setTopviewedArticleList(topviewedArticleData)}) 
    }, [])

  return (
  <>
    {latestArticleList && topviewedArticleList &&
      <div className="blogWrapper">
        <div className="blogHeaderContainer">
          <BlogHeader />
        </div>
        <div className="blogMiddleContainer">
          <div className='blogMiddleInner'>
            <BlogMiddleArticle latestArticleList={latestArticleList} />
          </div>
        </div>
        <div className="blogTailContainer">
          <BlogTail topviewedArticleList={topviewedArticleList} />
        </div>
      </div> 
    }
  </>
  )

}

export default Blog
