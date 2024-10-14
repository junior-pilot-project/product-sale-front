import Header from 'components/layout/Header';
import LeftTab from 'components/myPage/LeftTab';
import styles from './ReviewPageList.module.css';
import { useEffect } from 'react';
import { reviewListApi } from 'api';

const ReviewPageList = () => {
  useEffect(() => {
    reviewListApi();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My 정보</div>
        <hr></hr>
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
        </div>
      </div>
    </div>
  );
};

export default ReviewPageList;
