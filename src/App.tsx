import LoginPage from 'pages/auth/LoginPage';
import RegisterPage from 'pages/auth/RegisterPage';
import MainPage from 'pages/MainPage';
import MyPage from 'pages/MyPage';
import PageList from 'pages/PageList';
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
        </Routes>
      </div>
    );
  }
}

export default App;
