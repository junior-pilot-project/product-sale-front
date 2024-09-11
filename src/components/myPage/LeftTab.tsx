import React from 'react';
import styles from './LeftTab.module.css';
import { Link } from 'react-router-dom';

const LeftTab = () => {
  return (
    <div className={`${styles.borderBox}`}>
      <ul className={`${styles.menuList}`}>
        <li>
          <Link to={'/myPage'}>주문목록</Link>
        </li>
        <li className={`${styles.textBlue}`}>
          <Link to={'/myPageMod'}>개인정보확인/수정</Link>
        </li>
        <li>
          <Link to={'/myPageLocation'}>배송지 관리</Link>
        </li>

        <li>
          <Link to={'/'}>리뷰 관리</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftTab;
