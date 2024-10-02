import { setInterceptor } from 'module/cookie';
import LoginPage from 'pages/auth/LoginPage';
import RegisterPage from 'pages/auth/RegisterPage';
import DetailPage from 'pages/DetailPage';
import MainPage from 'pages/MainPage';
import MyPage from 'pages/MyPage';
import MyPageLocation from 'pages/MyPageLocation';
import MyPageLocationList from 'pages/MyPageLocationList';
import MyPageMod from 'pages/MyPageMod';
import MyPagePassword from 'pages/MyPagePassword';
import PageList from 'pages/PageList';
import QuestionPage from 'pages/QuestionPage';
import ReviewPage from 'pages/ReviewPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    const fristToken = localStorage.getItem('토큰');
    console.log('fristToken: ', fristToken);
    if (fristToken) {
      setInterceptor(fristToken);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pageList" element={<PageList />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/myPageMod" element={<MyPageMod />} />
        <Route path="/myPageLocation" element={<MyPageLocation />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/myPageLocationList" element={<MyPageLocationList />} />
        <Route path="/myPagePassword" element={<MyPagePassword />} />
        <Route path="/questionPage" element={<QuestionPage />} />
      </Routes>
    </div>
  );
};

export default App;
