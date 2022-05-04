import React, {useEffect, useState} from 'react'
import ReactQuill from 'react-quill'
import '../../../node_modules/react-quill/dist/quill.snow.css'
import '../../css/blog/BlogPost.css'
import * as Api from '../../api'

function BlogPost() {
  
  const [titleComplete, setTitleComplete] = useState(false)
  const [title, setTitle] = useState('')
  
  const [imageComplete, setImageComplete] = useState(false)
  const [image, setImage] = useState('')

  const [nicknameComplete, setNicknameComplete] = useState(false)
  const [nickname, setNickname] = useState('')

  const [body, setBody] = useState('')
  const [userId, setUserId] = useState('')



  // Quill에 작성한 글자 정보. body라는 스테이트에 저장.

  const handleBody = (e) => {

    setBody(e);
    console.log(e);
  }


  // 이미지 선택 함수: 버튼 클릭시 이미지를 선택. image 스테이트에 저장. 
  
    const handleImage = (e) => {
      
      setImageComplete(true)
      setImage(e.target.files[0]);
    }


  // 제목 선택 함수: onChange로 제목값을 업데이트 받음. title 스테이트 저장. 

    const handleTitle = (e) => {
      setTitleComplete(true)
      setTitle(e.target.value)
    }


  // 닉네임 선택 함수: onChange로 닉네임값을 업데이트 받음. nickname 스테이트 저장.

  const handleNickname = (e) => {
    setNicknameComplete(true)
    setNickname(e.target.value)
  }


  // 이미지 업로드 함수.. 버튼 클릭시 입력된 이미지를 폼데이터 형식으로 전환, // APi로 백으로 전송, // 관련 Api는 이름이랑 주소를 몰라 아직 작성 안했습니다. multer는 가칭입니다. // 백에서 맞춰고 알려주세요.
  
  const handleUpload = async () => {
    
    const formData = new FormData()
    formData.append("image", image)
    const filePath = await Api.imagePost("article/uploadFile", formData)
     
    const data = {
      nickName: nickname,
      title: title,
      content: body,
      filePath: filePath.data,
    }

    const res = await Api.post("article/create", data)
    console.log(res)
  }
 

  return (
  <div className="QuillContainer">
    <div className="QuillHeaderContainer" >
    <input className="QuillTitle" type="text" placeHolder="제목을 입력해주세요" onChange={handleTitle}></input>
    <input className="QuillNickname" type='text' placeholder='닉네임' onChange={handleNickname} ></input>
    <button className="summitTextButton" 
      onClick={handleUpload}
      disabled={!(imageComplete && titleComplete && nicknameComplete)}>글 입력</button>
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

