import Header from 'components/layout/Header';
import styles from './ReviewPage.module.css';
import LeftTab from 'components/myPage/LeftTab';

const ReviewPage = () => {
  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My쿠팡</div>
        <hr></hr>
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.contentRight}`}>
            <section>
              <div className={`${styles.label}`}>리뷰 관리</div>
              <div className={`${styles.sectionInfo}`}>
                <img
                  src={require('../../assets/cloth1.png')}
                  alt=""
                  style={{ width: '115px', height: '115px' }}
                />
                <div>
                  <p className={`${styles.sectionDt}`}>
                    어택존 방한 기모 발열 목 폴라 로카 군인 티 남자 목티 긴팔
                    티셔츠
                  </p>
                  <img
                    src={require('../../assets/review_star.png')}
                    alt=""
                    style={{ width: '267px', height: '60px' }}
                  />
                </div>
              </div>
              <div className={`${styles.borderLine}`}></div>
            </section>
            <section>
              <div className={`${styles.label}`}>상세 리뷰</div>
              <textarea
                placeholder="다른 고객님들에게 도움이 되도록 상세한 평가를 남겨주세요."
                className={`${styles.textarea}`}
              ></textarea>
              <div className={`${styles.borderLine}`}></div>
            </section>
            <section>
              <div className={`${styles.label}`}>사진첨부</div>
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
            </section>
            <div className={`${styles.bottom} `}>
              <button className={`${styles.button} ${styles.buttonFillWhite} `}>
                취소하기
              </button>
              <button className={`${styles.button} ${styles.buttonFillBlue} `}>
                저장
              </button>
            </div>
          </div>
          {/* rightContainer end --- */}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
