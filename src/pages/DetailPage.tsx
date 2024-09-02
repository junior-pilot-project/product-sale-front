import Header from 'components/layout/Header';
import styles from './DetailPage.module.css';
import Button from 'components/common/Button';

const DetailPage = () => {
  return (
    <>
      <Header></Header>
      <div className={`${styles.detailWrapper}`}>
        <div className={`${styles.detailContent}`}>
          <img
            src={require('../assets/cloth1.png')}
            alt=""
            style={{ width: '300px', height: '300px' }}
          />
          <div>
            <div className={`${styles.productName}`}>
              어택존 방한 기모 발열 목 폴라 로카 군인 티 남자 목티 긴팔 티셔츠
            </div>
            <div className={`${styles.price}`}>
              <strong>15,850원</strong>
            </div>
            <div>
              <Button
                style={{
                  width: '200px',
                  height: '50px',
                  backgroundColor: '#D9D9D9',
                  color: 'black',
                }}
              >
                쿠폰 다운로드
              </Button>
            </div>
            <div>
              <input className={`${styles.inputPrice}`} value="1"></input>
            </div>
            <div className={`${styles.buttonArea}`}>
              <Button style={{ width: '200px', height: '50px' }}>
                바로구매
              </Button>
              <Button
                className={`${styles.whiteButton}`}
                style={{
                  width: '200px',
                  height: '50px',
                }}
              >
                문의하기
              </Button>
            </div>
          </div>
        </div>
        <div className={`${styles.menubar}`}>
          <Button>상품상세</Button>
          <Button className={`${styles.whiteButton}`}>상품평</Button>
          <Button>상품문의</Button>
        </div>
        <div className={`${styles.detailReview}`}>
          <label>상품평</label>
          <div className={`${styles.reviewStar}`}>
            <img src={require('../assets/review_star.png')} alt="" />
            <span>771</span>
          </div>
          <div className={`${styles.reviewList}`}>
            <div className={`${styles.reviewPeople}`}>
              <img
                src={require('../assets/people.png')}
                alt=""
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
              <span>홍길동</span>
            </div>
            <div className={`${styles.date}`}>2024.08.22</div>
            <div className={`${styles.imageArea}`}>
              <img src={require('../assets/image.png')} alt="" />
              <img src={require('../assets/image.png')} alt="" />
              <img src={require('../assets/image.png')} alt="" />
              <img src={require('../assets/image.png')} alt="" />
              <img src={require('../assets/image.png')} alt="" />
              <img src={require('../assets/image.png')} alt="" />
              <img src={require('../assets/image.png')} alt="" />
            </div>
            <div className={`${styles.reviewContent}`}>
              <p>따뜻하고 좋아요 이거산이후로 이거만 입게되는거같네요 ㅎㅎㅎ</p>
            </div>
            <hr></hr>
          </div>
          <div className={`${styles.reviewList}`}>
            <div className={`${styles.reviewPeople}`}>
              <img
                src={require('../assets/people.png')}
                alt=""
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
              <span>홍길동</span>
            </div>
            <div className={`${styles.date}`}>2024.08.22</div>
            <div className={`${styles.reviewContent}`}>
              따뜻하고 좋아요 이거산이후로 이거만 입게되는거같네요 ㅎㅎㅎ
            </div>
            <hr></hr>
          </div>
          <div className={`${styles.reviewList}`}>
            <div className={`${styles.reviewPeople}`}>
              <img
                src={require('../assets/people.png')}
                alt=""
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
              <span>홍길동</span>
            </div>
            <div className={`${styles.date}`}>2024.08.22</div>
            <div className={`${styles.reviewContent}`}>
              따뜻하고 좋아요 이거산이후로 이거만 입게되는거같네요 ㅎㅎㅎ
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
