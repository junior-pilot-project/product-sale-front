import Header from 'components/layout/Header';
import React from 'react';
import styles from './MainPageSearch.module.css';
import { Link } from 'react-router-dom';

// 검색기능
const handleSearchBtn = (value: string) => {
  console.log(value);
};

const MainPageSearch = () => {
  return (
    <>
      <Header handleClickSearch={handleSearchBtn}></Header>
      <div className={`${styles.mainSearchContainer}`}>
        <div className={`${styles.mainSearchLabel}`}>
          '키보드'에 대한 검색결과
        </div>
        <div className={`${styles.filterBox}`}>
          <div>
            <ul className={`${styles.filterLi}`}>
              <li>이름순</li>
              <li>낮은가격순</li>
              <li>높은가격순</li>
              <li>판매량순</li>
              <li>최신순</li>
            </ul>
          </div>
          <div>10개씩보기</div>
        </div>
        <section className={`${styles.productSection}`}>
          <ul className={`${styles.productList}`}>
            <li>
              <Link to="/detail" className={`${styles.productUnit}`}>
                <img
                  src={require('../assets/cloth1.png')}
                  width={'160px'}
                  height={'150px'}
                  alt=""
                ></img>
                <span className={`${styles.productName}`}>
                  [GRA/엑설런트] 14k.p 캐럿미 파인주얼리 모이사나이트 랩 러블리
                  플라워 팔찌
                </span>
                <span>14000원</span>
              </Link>
            </li>
            <li>
              <Link to="/detail" className={`${styles.productUnit}`}>
                <img
                  src={require('../assets/cloth1.png')}
                  width={'160px'}
                  height={'150px'}
                  alt=""
                ></img>
                <span className={`${styles.productName}`}>
                  [GRA/엑설런트] 14k.p 캐럿미 파인주얼리 모이사나이트 랩 러블리
                  플라워 팔찌
                </span>
                <span>14000원</span>
              </Link>
            </li>
            <li>
              <Link to="/detail" className={`${styles.productUnit}`}>
                <img
                  src={require('../assets/cloth1.png')}
                  width={'160px'}
                  height={'150px'}
                  alt=""
                ></img>
                <span className={`${styles.productName}`}>
                  [GRA/엑설런트] 14k.p 캐럿미 파인주얼리 모이사나이트 랩 러블리
                  플라워 팔찌
                </span>
                <span>14000원</span>
              </Link>
            </li>
            <li>
              <Link to="/detail" className={`${styles.productUnit}`}>
                <img
                  src={require('../assets/cloth1.png')}
                  width={'160px'}
                  height={'150px'}
                  alt=""
                ></img>
                <span className={`${styles.productName}`}>
                  [GRA/엑설런트] 14k.p 캐럿미 파인주얼리 모이사나이트 랩 러블리
                  플라워 팔찌
                </span>
                <span>14000원</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default MainPageSearch;
