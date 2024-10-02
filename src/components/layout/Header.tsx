import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = ({ handleClickSearch }: any) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <header>
        <article className={`${styles.topBar}`}>
          <nav>
            <ul>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <Link to="/myPage">마이페이지</Link>
              </li>
            </ul>
          </nav>
        </article>
        <div className={`${styles.headerMain}`}>
          <div className={`${styles.categoryBtn}`}>
            <img
              src={require('../../assets/category.png')}
              alt="카테고리"
            ></img>
          </div>
          <Link to={'/'} className={`${styles.logo}`}>
            <img src={require('../../assets/main_logo.png')} alt="로고"></img>
          </Link>
          <div className={`${styles.searchBox}`}>
            <div className={`${styles.searchArea}`}>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="찾고 싶은 상품을 검색해보세요!"
                onChange={(e) => handleChange(e)}
              ></input>
              <img
                src={require('../../assets/search_btn.png')}
                alt="검색"
                onClick={() => handleClickSearch(inputValue)}
              ></img>
            </div>
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
