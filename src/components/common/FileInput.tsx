import React from 'react';
import styles from './FileInput.module.css';

const FileInput = ({ onChange, name }: any) => {
  return (
    <>
      <div className={`${styles.pictureAttach}`}>
        <input
          type="file"
          name={name}
          onChange={onChange}
          accept=".jpg, .jpeg"
        />
        <button className={`${styles.reviewPageButton} ${styles.button}`}>
          사진 첨부하기
        </button>
        <span className={`${styles.count}`}>0/10</span>
      </div>
      <div className={`${styles.paragraph}`}>
        사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 10장까지 첨부가능 합니다.
      </div>
    </>
  );
};

export default FileInput;
