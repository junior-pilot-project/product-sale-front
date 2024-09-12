import LoginPage from 'pages/auth/LoginPage';
import RegisterPage from 'pages/auth/RegisterPage';
import DetailPage from 'pages/DetailPage';
import MainPage from 'pages/MainPage';
import MyPage from 'pages/MyPage';
import MyPageLocation from 'pages/MyPageLocation';
import MyPageMod from 'pages/MyPageMod';
import PageList from 'pages/PageList';
import ReviewPage from 'pages/ReviewPage';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
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
        </Routes>
      </div>
    );
  }
}

export default App;
