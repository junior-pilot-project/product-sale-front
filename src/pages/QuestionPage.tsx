import Header from 'components/layout/Header';
import styles from './QuestionPage.module.css';

const QuestionPage = () => {
  return (
    <div>
      <Header></Header>
      <main className={` ${styles.mainContainer}`}>
        <section className={` ${styles.section1}`}>
          <div className={`${styles.label}`}>문의하기</div>
          <hr></hr>
          <div className={`${styles.orderInfo}`}></div>
          <div className={`${styles.orderBox}`}>
            <div className={`${styles.orderBoxProduct}`}>
              <img
                src={require('../assets/cloth1.png')}
                width={'146px'}
                height={'146px'}
                alt="버튼"
              ></img>
            </div>
            <div className={`${styles.orderBoxInfo}`}>
              <div className={`${styles.productName}`}>
                어택존 방한 기모 발열 목 폴라 로카 군인 티 남자 목티 긴팔 티셔츠
              </div>
              <div className={`${styles.productPrice}`}>15,850원</div>
            </div>
          </div>
        </section>
        <div className={` ${styles.qaContent}`}>
          <label htmlFor="select" className={`${styles.label}`}>
            문의내용
          </label>
          <div className={` ${styles.qaContentBox}`}>
            <div className={` ${styles.qaContentBoxLeft}`}>
              <select id="select" className={`${styles.selectBox}`}>
                <option value="">문의할 유형을 선택해주세요</option>
                <option value="dog">주문 상품 문의</option>
                <option value="dog">배송 문의</option>
                <option value="dog">결제 문의</option>
                <option value="dog">기타 문의</option>
              </select>
            </div>
            <div className={` ${styles.qaContentBoxRight}`}>
              <div className={` ${styles.qaLabel}`}>주문상품문의</div>
              <div className={`${styles.section}`}>
                <textarea
                  placeholder="다른 고객님들에게 도움이 되도록 상세한 평가를 남겨주세요."
                  className={`${styles.textarea}`}
                ></textarea>
                <div className={`${styles.borderLine}`}></div>
              </div>
              <div className={`${styles.qaFileAttachBox}`}>
                <div className={`${styles.pictureAttach}`}>
                  <button
                    className={`${styles.reviewPageButton} ${styles.button}`}
                  >
                    사진 첨부하기
                  </button>
                  <span className={`${styles.count}`}>0/10</span>
                </div>
                <div className={`${styles.paragraph}`}>
                  사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 10장까지 첨부가능
                  합니다.
                </div>
                <div className={`${styles.borderLine} `}></div>
              </div>
              <div className={`${styles.buttonArea} `}>
                <button
                  className={`${styles.button} ${styles.buttonFillBlue} `}
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuestionPage;
