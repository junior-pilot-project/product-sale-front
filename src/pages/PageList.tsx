import React from 'react';
import { Link } from 'react-router-dom';

const PageList = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>페이지 리스트</h1>
      <ul className="pageList">
        <li>
          <Link to="/loginPage">로그인 (완료)</Link>
        </li>
        <li>
          <Link to="/register">회원가입 (완료)</Link>
        </li>
        <li>
          <Link to="/">메인 (완료)</Link>
        </li>
        <li>
          <Link to="/detail">상세보기 (완료)</Link>
        </li>
        <li>
          <Link to="">결제하기 (미완료)</Link>
        </li>
        <li>
          <Link to="">쿠폰상세 및 다운로드 (완료)</Link>
        </li>
        <li>
          <Link to="/myPage">마이페이지 - 주문목록 (완료,수정필요)</Link>
        </li>
        <li>
          <Link to="/myPage">마이페이지 - 개인정보확인/수정 (진행중)</Link>
        </li>
        <li>
          <Link to="">마이페이지 - 배송지관리 (미완료)</Link>
        </li>
        <li>
          <Link to="">마이페이지 - 리뷰관리 (미완료)</Link>
        </li>
      </ul>
    </>
  );
};

export default PageList;
