import Header from 'components/layout/Header';
import styles from './MainPage.module.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Header></Header>
      <div>
        <img src={require('../assets/banner.jpg')} alt="오늘단하루 할인" />
      </div>
      <div className={`${styles.mainContainer}`}>
        <h2 className={`${styles.categoryProductLabel}`}>
          HOT! TREND
          <br />
          카테고리별
          <span className={`${styles.textBlue}`}> 추천 광고상품</span>
        </h2>
        <section className={`${styles.productSection}`}>
          <span className={`${styles.textRed}`}>여성패션</span>
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
          </ul>
        </section>
        <section className={`${styles.productSection}`}>
          <span className={`${styles.textBlue}`}>남성패션</span>
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
          </ul>
        </section>
      </div>
    </>
  );
};

export default MainPage;
