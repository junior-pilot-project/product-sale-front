import Header from 'components/layout/Header';
import styles from './ReviewPage.module.css';
import LeftTab from 'components/myPage/LeftTab';
import Rating from 'components/myPage/Rating';
import { useState } from 'react';
import FileInput from 'components/common/FileInput';
import { imgUploadApi, reviewApi } from 'api';

const INITIAL_DATA = {
  productId: 0,
  reviewComment: '',
  reviewRating: '',
  reviewImageUrl: '',
};

const ReviewPage = () => {
  const [reviewboard, setReviewboard] = useState(INITIAL_DATA);

  const handleChange = (name: string, value: string) => {
    setReviewboard((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleFileChange = (e: any) => {
    const { name } = e.target;
    const value = e.target.files[0];
    const formData = new FormData();
    formData.append(name, value);
    formData.append('imageType', 'review');
    imgUploadApi(formData);
  };

  const handleSaveClick = () => {
    reviewApi(reviewboard);
  };

  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My 정보</div>
        <hr></hr>
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.contentRight}`}>
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
                <Rating name="reviewRating" onClick={handleChange} />
              </div>
            </div>
            <div className={`${styles.borderLine}`}></div>
            <div className={`${styles.label}`}>상세 리뷰</div>
            <textarea
              placeholder="다른 고객님들에게 도움이 되도록 상세한 평가를 남겨주세요."
              className={`${styles.textarea}`}
              onChange={handleChangeInput}
              name="reviewComment"
            ></textarea>
            <div className={`${styles.borderLine}`}></div>
            <div className={`${styles.label}`}>사진첨부</div>
            <FileInput name="image" onChange={handleFileChange} />
            <div className={`${styles.borderLine} `}></div>
            <div className={`${styles.bottom} `}>
              <button className={`${styles.button} ${styles.buttonFillWhite} `}>
                취소하기
              </button>
              <button
                className={`${styles.button} ${styles.buttonFillBlue} `}
                onClick={handleSaveClick}
              >
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
