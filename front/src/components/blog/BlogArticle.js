import React, {useState, uesEffect, useEffect}  from 'react'
import {useNavigatge, useParams} from 'react-router-dom'
import '../../css/blog/BlogArticle.css'
import * as Api from '../../api'

function BlogArticle() {


// 기사의 고유 id값이 param으로 되어있고 이걸 가져온다.


  const params = useParams()
  const id = params.id


// Params에서 아티클의 고유정보를 받아옴 

  useEffect(() => {
      
      async function getArticleInfo(){
      const res = await Api.get(`article/${id}`)
      console.log(res.data)
      setArticleInfo(res.data)
      setUpdatedTime(res.data.updatedAt.split('T')[0])
      }; 
      getArticleInfo();
    }, [id])
  
  const [articleInfo, setArticleInfo] = useState('')
  const [updatedTime, setUpdatedTime] = useState('')


// 좋아요, 싫어요 기능 관련 함수. 백으로 좋아요와 싫어요 숫자가 늘어난 정보 Put요청으로 보낸다.

  const [recomendNumber, setRecomendNumber] = useState(0)
  const [decomendNumber, setDecomendNumver] = useState(0)
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const recommendButton = () => {
    setRecomendNumber((state) => state+1)
    setIsButtonClicked(true)
  }

  const decommendButton = () => {
    setDecomendNumver((state) => state+1)
    setIsButtonClicked(true)
  }

 
 // 밑에는 백으로 좋아요 관련 put요청 보내는건데 일단 보류 
 
  // useEffect(() =>{
    
  //   const userComment = async() => {
      
  //     const res = await Api.put(`article/${id}` , {

  //     })
    
  //   }
  
  
  // }, [])


// -------------------------------------------------------- 컴포넌트  -----------------------------------------------------//

  return (
    
    <div className="articleWrapper">
      <div className="articleContainer">
        <div className="aritcleTitleBox">
          <div className="articleTitle">제목: {articleInfo.title}</div>
          <div className="articleDate">작성일: {updatedTime}</div>
          <div className="articleAuthor">글쓴이: {articleInfo.nickName}</div>
        </div>
        <div className="articleImageBox">
        <div className="articleImage">
          <img src={articleInfo.filePath} alt="사진" style={{width: '100%', height: '100%'}} />
          </div> 
        </div>
        <div className="articleContent" dangerouslySetInnerHTML={{ __html: articleInfo.content }}>  
        </div>
        <div className="articleRecommand">
          <button onClick={recommendButton} disabled={isButtonClicked}>개념</button>
          <button onClick={decommendButton} disabled={isButtonClicked}>비추</button>
        </div>
      </div>
    </div>


  )

}

export default BlogArticle
