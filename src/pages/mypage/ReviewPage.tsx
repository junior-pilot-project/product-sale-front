import Header from 'components/layout/Header';
import styles from './ReviewPage.module.css';
import LeftTab from 'components/myPage/LeftTab';
import Rating from 'components/myPage/Rating';
import { useState } from 'react';
import FileInput from 'components/common/FileInput';
import { reviewApi } from 'api';
import { useNavigate } from 'react-router';

const INITIAL_DATA = {
  reviewComment: '',
  reviewRating: '',
};

interface FileWithMeta {
  file: File; // 실제 File 객체
  imageId: string; // 추가적인 속성
  imageUrl: string; // 추가적인 속성
}

const ReviewPage = () => {
  const [reviewboard, setReviewboard] = useState(INITIAL_DATA);
  const [files, setFiles] = useState<FileWithMeta[]>([]);

  const navigate = useNavigate();

  const handleChange = (name: string, value: string) => {
    setReviewboard((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (file: any) => {
    setFiles((prevFiles) => [...prevFiles, file]);
  };

  const handleClearFile = (fileToDelete: any) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  };

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSaveClick = async () => {
    const { imageId, imageUrl } = files[0];
    const data = { productId: imageId, reviewImageUrl: imageUrl };

    const params = { ...data, ...reviewboard };
    try {
      await reviewApi(params);
      // 목록리스트
      navigate('/reviewList');
    } catch (error) {
      console.error('등록 실패했습니다:', error);
    }
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
            <FileInput
              name="image"
              onChangeFile={handleFileChange}
              onClearFile={handleClearFile}
              // onClearClick={handleClearClick}
              files={files}
            />
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
