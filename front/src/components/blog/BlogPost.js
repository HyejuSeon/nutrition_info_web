import React, {useEffect, useState} from 'react'
import ReactQuill from 'react-quill'
import '../../../node_modules/react-quill/dist/quill.snow.css'
import '../../css/blog/BlogPost.css'
import * as Api from '../../api'

function BlogPost() {
  
  const [titleUploadComplete, setTitleUploadComplete] = useState(false)
  const [title, setTitle] = useState('')
  
  const [imageUploadComplete, setImageUploadComplete] = useState(false)
  const [image, setImage] = useState('')
  
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState('')


  // user/current로 현재 유저 정보를 백에서 불러옴. 그 뒤 loginid를 받아온다.

    async function userInfo() {
      const res = await Api.get('user/current')
      const userInfo = res.data.loginId
      console.log(userInfo) 
      setUserId(userInfo)
  }

  // Quill에 작성한 글자 정보. body라는 스테이트에 저장.

  const handleBody = (e) => {

    setBody(e);
    console.log(e);
  }


  // 이미지 선택 함수 .. 버튼 클릭시 이미지를 선택. image 스테이트에 저장. 
  
    const handleImage = (e) => {
      
      setImageUploadComplete(true)
      setImage(e.target.files[0]);
    }


  // 제목 선택 함수 .. Onchange로 제목값을 업데이트 받음. title 스테이트저장.

    const handleTitle = (e) => {
      setTitleUploadComplete(true)
      setTitle(e.target.value)
    }


  // 이미지 업로드 함수.. 버튼 클릭시 입력된 이미지를 폼데이터 형식으로 전환, // APi로 백으로 전송, // 관련 Api는 이름이랑 주소를 몰라 아직 작성 안했습니다. multer는 가칭입니다. // 백에서 맞춰고 알려주세요.
  
  // const handleUpload = async (e) => {
  //   const formData = new FormData()
  //   formData.append("thumbnail", image)
  //   const res = await Api.multer('user/upload', formData)  
  // }

  return (
  <div className="QuillContainer">
    <div className="QuillHeaderContainer" >
    <input className="QuillTitle" type="text" placeHolder="제목을 입력해주세요" onChange={handleTitle}></input>
    <div className="rowSpace"></div>
    <button className="summitTextButton" 
      disabled={!(imageUploadComplete && titleUploadComplete)}>글 입력</button>
    </div>
    
    <ReactQuill
      placeholder='write something amazing....'
      theme="snow"
      style={{
        height: 480,
        width: 560,
        marginTop: '16px',
        marginBottom: '8px',
        display: 'flex',
        flexDirection: 'column'
      }}
      
      value={body}

      modules={{
        toolbar: [
            [{ 'font': [] }],
            [{'align': []} , 'bold', 'italic', 'underline', { 'color': [] }, 'image'],
           
          ],
        }}

        formats={[
          'font', 
          'bold', 'italic','color', 
          'image',
        ]}
      
        onChange={handleBody}
      />

    <div className="postingSumnailHeader">
      포스팅 썸네일
    </div>
    
  <div className="postingSumanil">
      <input 
        type="file" 
        accept="image/png, image/jpeg"
        onChange={handleImage}/>
  </div>
</div>
  );
}

export default BlogPost

