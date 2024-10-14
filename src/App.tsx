import LoginPage from 'pages/auth/LoginPage';
import RegisterPage from 'pages/auth/RegisterPage';
import DetailPage from 'pages/DetailPage';
import MainPage from 'pages/MainPage';
import MyPage from 'pages/mypage/MyPage';
import MyPageLocation from 'pages/mypage/MyPageLocation';
import MyPageLocationList from 'pages/mypage/MyPageLocationList';
import MyPageMod from 'pages/mypage/MyPageMod';
import MyPagePassword from 'pages/mypage/MyPagePassword';
import PageList from 'pages/PageList';
import QuestionPage from 'pages/QuestionPage';
import ReviewPage from 'pages/mypage/ReviewPage';
import { Route, Routes } from 'react-router-dom';
import ReviewPageList from 'pages/mypage/ReviewPageList';

const App = () => {
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
        <Route path="/reviewList" element={<ReviewPageList />} />
        <Route path="/myPageLocationList" element={<MyPageLocationList />} />
        <Route path="/myPagePassword" element={<MyPagePassword />} />
        <Route path="/questionPage" element={<QuestionPage />} />
      </Routes>
    </div>
  );
};

export default App;
