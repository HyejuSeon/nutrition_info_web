import React, {useState, useEffect}  from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/blog/BlogArticle.css'
import * as Api from '../../api'

function BlogArticle() {

// useNavigate 함수

const navigate = useNavigate()


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



// -------------------------------------------------------- 컴포넌트  -----------------------------------------------------//

  return (
    
  <>
    {articleInfo&&
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
            <button className='blogNavigaion' onClick={() => navigate('/blog')}>블로그</button>
        </div>
      </div>
    </div> 
    }
  </>

  )
  
}

export default BlogArticle
