// import './App.css';
import React, { useState, useEffect, useReducer, createContext } from 'react';
import { useParams, BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Api from "./api";
import { loginReducer } from "./reducer";

import GraphPage from './components/graph/GraphPage';
import Main from './components/main/Main'
import Login from './components/login/Login'
import Register from "./components/register/Register";
import BlogArticlePreview from "./components/blog/BlogArticlePreview"
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost'
import BlogArticle from './components/blog/BlogArticle';

export const UserStateContext = createContext(null);
export const dispatchContext = createContext(null);

function App() {
    
  // useReducer 훅을 통해 userState 상태와 dispatch함수를 생성함.
    const [userState, dispatch] = useReducer(loginReducer, {
      user: null,
    });
  
    // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
    // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  
    const fetchCurrentUser = async () => {
      try {
        // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
        const res = await Api.get("user/current");
        const currentUser = res.data;
  
        // dispatch 함수를 통해 로그인 성공 상태로 만듦.
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: currentUser,
        });
  
        console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
      } catch {
        console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
      }
      // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
      setIsFetchCompleted(true);
    };
  
    // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
    useEffect(() => {
      fetchCurrentUser();
    }, []);
  
    if (!isFetchCompleted) {
      return "loading...";
    }

  return (
      <dispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider value={userState}>
          <Router>
            <Routes>
              <Route path="/main" exact element={<Main />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blogPost" element={<BlogPost />} />
              <Route path="/graph" element={<GraphPage />} />
              <Route path="/blogArticle" element={<BlogArticle/>} />
              <Route path="/blogArticlePreview" element={<BlogArticlePreview/>} />
              <Route path="/blogArticle/:id" element={<BlogArticle/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Main />} />
            </Routes>
          </Router>
       </UserStateContext.Provider>
     </dispatchContext.Provider>
  );
}

export default App;


{/* <Route path="/users/:userId" element={<Portfolio />} /> */}