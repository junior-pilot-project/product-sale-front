import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header>
        <div className={`${styles.topBar}`}>
          <nav>
            <ul>
              <li>
                <Link to="#">로그인</Link>
              </li>
              <li>
                <Link to="#">회원가입</Link>
              </li>
              <li>
                <Link to="#">고객센터</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${styles.headerMain}`}>
          <img
            src={require('../../assets/category.png')}
            alt="카테고리"
            width="120px"
            height={'120px'}
          ></img>
          <img
            src={require('../../assets/main_logo.png')}
            alt="로고"
            width="92px"
            height={'92px'}
          ></img>
          <div className={`${styles.searchBox}`}>
            {/* <label htmlFor="search">전체</label> */}
            <input type="text" id="search" name="search"></input>
          </div>
          <img
            src={require('../../assets/mypage.png')}
            alt="마이페이지"
            width="40px"
            height={'40px'}
          ></img>
        </div>
      </header>
    </>
  );
};

export default Header;
