import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { getCookie, removeCookie } from 'utils/cookie';
import axiosInstance, { PROXY } from 'utils/apiConfig';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!getCookie('accessToken');

  const handleLogout = async () => {
    try {
      await axiosInstance.post(`${PROXY}/api/user/logout`);
      removeCookie('accessToken');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <header>
        <div className={`${styles.topBar}`}>
          <nav>
            <ul>
              <li>
                {isLoggedIn ? (
                  <Link to="/" onClick={handleLogout}>
                    로그아웃
                  </Link>
                ) : (
                  <Link to="/loginPage">로그인</Link>
                )}
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
        <div className={`${styles['header-main']}`}>
          <div className={`${styles['category-box']}`}>
            <img
              src={require('../../assets/category.png')}
              alt="카테고리"
            ></img>
          </div>
          <Link to={'/'} className={`${styles.logo}`}>
            <img src={require('../../assets/main_logo.png')} alt="로고"></img>
          </Link>
          <div className={`${styles['search-box']}`}>
            <img
              src={require('../../assets/icon/search-btn.svg').default}
              alt="검색"
              className={`${styles['search-btn']}`}
            ></img>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="찾고 싶은 상품을 검색해보세요!"
              className={`${styles['input-area']}`}
            ></input>
          </div>
          <Link to={'myPage'}>
            <img
              src={require('../../assets/mypage.png')}
              alt="마이페이지"
            ></img>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
