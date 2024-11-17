import Header from 'components/layout/Header';
import styles from './DetailPage.module.css';
import Button from 'components/common/Button';
import Modal from 'components/common/Modal';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { productApi } from 'api';
import { ProductListProps } from 'types/ResultDataType';

type Params = {
  id: string; // id는 string으로 반드시 존재해야 한다고 정의
};

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<Params>();
  const [onModal, setOnModal] = useState(false);
  const [detailDt, setDetailDt] = useState<ProductListProps>();

  const onCloseModal = () => {
    setOnModal(false);
  };

  useEffect(() => {
    const getDetailData = async () => {
      const param = {
        productId: id,
      };

      const data = await productApi(param);
      if (data) setDetailDt(data[0]);
    };

    getDetailData();
  }, [id]);

  return (
    <>
      <Header></Header>
      <div className={`${styles.detailWrapper}`}>
        <div className={`${styles.detailContent}`}>
          {!detailDt ? ( // `undefined` 또는 `null`이면 메시지를 표시
            <div>No product details available.</div>
          ) : (
            <>
              <img
                src={require('../assets/cloth1.png')}
                alt=""
                className={`${styles['detailcontent-image']}`}
              />
              <div>
                <div className={`${styles.productName}`}>
                  {detailDt.productName}
                </div>
                <div className={`${styles.price}`}>
                  <strong>
                    {Number(detailDt.productPrice).toLocaleString()}
                  </strong>
                  원
                </div>
                <div>
                  <input className={`${styles.inputPrice}`} value="1"></input>
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: '#D9D9D9',
                      color: 'black',
                    }}
                    onClick={() => setOnModal(true)}
                  >
                    쿠폰 다운로드
                  </Button>
                </div>
                <div className={`${styles.buttonArea}`}>
                  <Button>바로구매</Button>
                  <Button
                    className={`${styles.whiteButton}`}
                    onClick={() => navigate('/questionPage')}
                  >
                    문의하기
                  </Button>
                </div>
              </div>
            </>
          )}
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
            <div
              id="section3"
              className={`${styles.section3Box}`}
              style={{ paddingTop: '70px' }}
            >
              <label>상품문의</label>
              <div className={`${styles.categoryBtn}`}>
                <button className={`button ${styles.buttonCircle}`}>
                  주문상품
                </button>
                <button
                  className={`button ${styles.buttonCircle} ${styles.white}`}
                >
                  배송
                </button>
                <button
                  className={`button ${styles.buttonCircle} ${styles.white}`}
                >
                  결제
                </button>
                <button
                  className={`button ${styles.buttonCircle} ${styles.white}`}
                >
                  기타
                </button>
              </div>
              <div className={`${styles.reviewListBox}`}>
                <div className={`${styles.reviewLitag}`}>
                  상품 색상 다른색상은 없나요?
                  <img
                    className={`${styles['reviewLitag-button']}`}
                    src={require('../assets/icon/arrow.png')}
                    alt=""
                    width={'30px'}
                  />
                </div>
                <hr></hr>
              </div>
              <div className={`${styles.reviewListBox}`}>
                <div className={`${styles.reviewLitag}`}>
                  상품 색상 다른색상은 없나요?
                  <img
                    className={`${styles['reviewLitag-button']}`}
                    src={require('../assets/icon/arrow.png')}
                    alt=""
                    width={'30px'}
                  />
                </div>
                <hr></hr>
              </div>
              <div className={`${styles.reviewListBox}`}>
                <div className={`${styles.reviewLitag}`}>
                  상품 색상 다른색상은 없나요?
                  <img
                    className={`${styles['reviewLitag-button']}`}
                    src={require('../assets/icon/arrow.png')}
                    alt=""
                    width={'30px'}
                  />
                </div>
                <hr></hr>
              </div>
              <div className={`${styles.reviewListBox}`}>
                <div className={`${styles.reviewLitag}`}>
                  상품 색상 다른색상은 없나요?
                  <img
                    className={`${styles['reviewLitag-button']}`}
                    src={require('../assets/icon/arrow.png')}
                    alt=""
                  />
                </div>
                <hr></hr>
                <div className={`${styles.reviewListHiddenBox}`}>
                  <div
                    className={`${styles.hiddenBoxTop}`}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {`상품사이즈를 선택할수가 없네요\n그냥 프리사이즈로 제공하는건가요??`}
                  </div>
                  <div
                    style={{ whiteSpace: 'pre-wrap' }}
                    className={`${styles.hiddenBoxBottom}`}
                  >{`안녕하세요 상품관리시스템입니다.\n다름아니라 상품은 프리사이즈로 제공되고있습니다.\n\n추후에 물품이 추가되면 사이즈별로 제공할 계획입니다\n\n다양한 색상과 수량이 필요하다면 연말쯤에 제품이 추가될거같습니다.\n감사합니다.`}</div>
                </div>
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
