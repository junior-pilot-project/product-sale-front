import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
