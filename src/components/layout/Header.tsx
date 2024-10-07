import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { getCookie, removeCookie } from 'utils/cookie';
import axiosInstance, { PROXY } from 'utils/apiConfig';

const Header = () => {
  const handleLogout = () => {
    axiosInstance
      .post(`${PROXY}/api/user/logout`)
      .then((res) => {
        removeCookie('accessToken');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <header>
        <article className={`${styles.topBar}`}>
          <nav>
            <ul>
              <li>
                {!getCookie('accessToken') ? (
                  <Link to="/loginPage">로그인</Link>
                ) : (
                  <Link to="" onClick={handleLogout}>
                    로그아웃
                  </Link>
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
        </article>
        <div className={`${styles.headerMain}`}>
          <div className={`${styles.categoryBtn}`}>
            <Link to={''} className={`${styles.logo}`}>
              <img
                src={require('../../assets/category.png')}
                alt="카테고리"
              ></img>
            </Link>
          </div>
          <Link to={'/'} className={`${styles.logo}`}>
            <img src={require('../../assets/main_logo.png')} alt="로고"></img>
          </Link>
          <div className={`${styles.searchBox}`}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="찾고 싶은 상품을 검색해보세요!"
            ></input>
          </div>
          <Link to={'/myPage'}>
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
