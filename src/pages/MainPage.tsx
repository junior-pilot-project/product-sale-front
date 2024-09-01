import Header from 'components/layout/Header';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <Header></Header>
        <div className={`${styles.banner}`}>
          <img src={require('../assets/banner.jpg')} alt="" />
        </div>
        <div className={`${styles.mainPage}`}>
          <h2>
            HOT! TREND
            <br />
            카테고리별{' '}
            <span className={`${styles.textRecommend}`}>추천 광고상품</span>
          </h2>
          <div className={`${styles.borderline}`}></div>
          <section>
            <h1 className={`${styles.textRed}`}>여성패션</h1>
            <div className={`${styles.container}`}>
              <div className={`${styles.boxContainer}`}>
                <div className={`${styles.box}`}>Box 1</div>
                <div className={`${styles.boxDescription}`}>
                  Box 1<div>18000원</div>
                </div>
              </div>
              <div className={`${styles.boxContainer}`}>
                <div className={`${styles.box}`}>Box 1</div>
                <div className={`${styles.boxDescription}`}>
                  Box 1<div>18000원</div>
                </div>
              </div>
              <div className={`${styles.boxContainer}`}>
                <div className={`${styles.box}`}>Box 1</div>
                <div className={`${styles.boxDescription}`}>
                  Box 1<div>18000원</div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className={`${styles.textRecommend}`}>남성패션</h1>
            <div className={`${styles.container}`}>
              <div className={`${styles.boxContainer}`}>
                <div className={`${styles.box}`}>Box 1</div>
                <div className={`${styles.boxDescription}`}>
                  Box 1<div>18000원</div>
                </div>
              </div>
              <div className={`${styles.boxContainer}`}>
                <div className={`${styles.box}`}>Box 1</div>
                <div className={`${styles.boxDescription}`}>
                  Box 1<div>18000원</div>
                </div>
              </div>
              <div className={`${styles.boxContainer}`}>
                <div className={`${styles.box}`}>Box 1</div>
                <div className={`${styles.boxDescription}`}>
                  Box 1<div>18000원</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MainPage;
