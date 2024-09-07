import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className={`${styles.topBar}`}>
          <nav>
            <ul>
              <li>
                <Link to="/loginPage">로그인</Link>
              </li>
              <li>
                <Link to="/register">회원가입</Link>
              </li>
              <li>
                <Link to="/myPage">마이페이지</Link>
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
            onClick={() => {
              navigate('/');
            }}
          ></img>
          <div className={`${styles.searchBox}`}>
            {/* <label htmlFor="search">전체</label> */}
            <input
              type="text"
              id="search"
              name="search"
              placeholder="찾고 싶은 상품을 검색해보세요!"
            ></input>
          </div>
          <img
            src={require('../../assets/mypage.png')}
            alt="마이페이지"
            width="40px"
            height={'40px'}
            onClick={() => {
              navigate('/myPage');
            }}
          ></img>
        </div>
      </header>
    </>
  );
};

export default Header;
