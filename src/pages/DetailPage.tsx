import Header from 'components/layout/Header';
import styles from './DetailPage.module.css';
import Button from 'components/common/Button';
import Modal from 'components/common/Modal';
import { useState } from 'react';

const DetailPage = () => {
  const [onModal, setOnModal] = useState(false);

  const onCloseModal = () => {
    setOnModal(false);
  };

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
                onClick={() => setOnModal(true)}
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
        <div>
          <div className={`${styles.menubar}`}>
            <a href="#section1" className={`${styles.menu1}`}>
              상품상세
            </a>
            <a
              href="#section2"
              className={`${styles.menu2} ${styles.whiteButton}`}
            >
              상품평
            </a>
            <a href="#section3" className={`${styles.menu3}`}>
              상품문의
            </a>
          </div>
          <div className={`${styles.sectionContent}`}>
            <div id="section1" style={{ paddingTop: '70px' }}>
              <label>상품상세</label>
              <div>
                상품상세상품상세상품상세상품상세상품상세상품상세상품상세상품상세상품상세상품상세
                상품상세상품상세상품상세상품상세
              </div>
            </div>

            <div id="section2" style={{ paddingTop: '70px' }}>
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
                  <p>
                    따뜻하고 좋아요 이거산이후로 이거만 입게되는거같네요 ㅎㅎㅎ
                  </p>
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
            <div id="section3" style={{ paddingTop: '70px' }}>
              <label>상품문의</label>
              <div>
                상품문의상품문의상품문의상품문의상품문의상품문의상품문의상품문의상품문의상품문의상품문의상품문의
                상품문의상품문의상품문의상품문의
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={onModal} close={onCloseModal}></Modal>
    </>
  );
};

export default DetailPage;
