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
        <div>
          <h2 className={`${styles.label}`}>
            HOT! TREND
            <br />
            카테고리별
            <span className={`${styles.textBlue}`}> 추천 광고상품</span>
          </h2>
        </div>
        <section className={`${styles.productSection}`}>
          <div className={`${styles.productCategory}`}>여성패션</div>
          <img src={require('../assets/product.png')} alt=""></img>
          <div className={`${styles.productList}`}>
            <Link to="/detail" className={`${styles.productBox}`}>
              <div>
                <img src={require('../assets/cloth1.png')} alt=""></img>
                <div className={`${styles.productName}`}>roka 군인 옷</div>
                <div className={`${styles.productPrice}`}>14,000원</div>
              </div>
            </Link>
            <Link to="/detail" className={`${styles.productBox}`}>
              <div>
                <img src={require('../assets/cloth1.png')} alt=""></img>
                <div className={`${styles.productName}`}>roka 군인 옷</div>
                <div className={`${styles.productPrice}`}>14,000원</div>
              </div>
            </Link>
            <Link to="/detail" className={`${styles.productBox}`}>
              <div>
                <img src={require('../assets/cloth1.png')} alt=""></img>
                <div className={`${styles.productName}`}>roka 군인 옷</div>
                <div className={`${styles.productPrice}`}>14,000원</div>
              </div>
            </Link>
            <Link to="/detail" className={`${styles.productBox}`}>
              <div>
                <img src={require('../assets/cloth1.png')} alt=""></img>
                <div className={`${styles.productName}`}>roka 군인 옷</div>
                <div className={`${styles.productPrice}`}>14,000원</div>
              </div>
            </Link>
            <Link to="/detail" className={`${styles.productBox}`}>
              <div>
                <img src={require('../assets/cloth1.png')} alt=""></img>
                <div className={`${styles.productName}`}>roka 군인 옷</div>
                <div className={`${styles.productPrice}`}>14,000원</div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
