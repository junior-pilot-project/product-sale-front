import { useRef } from 'react';
import styles from './FileInput.module.css';
import { imgDeleteApi, imgUploadApi } from 'api';

const FileInput = ({ onChangeFile, onClearFile, name, files }: any) => {
  const inputRef = useRef(null);

  const handleFileChange = async (e: any) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('image', files[i]);
      formData.append('imageType', 'review');

      try {
        const data = await imgUploadApi(formData);
        onChangeFile(data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleClearClick = async (fileToDelete: File) => {
    try {
      await imgDeleteApi(fileToDelete);
      onClearFile(fileToDelete);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <div className={`${styles.pictureAttach}`}>
        <input
          id="file"
          type="file"
          name={name}
          onChange={handleFileChange}
          accept=".jpg, .jpeg"
          className={`${styles.fileInput}`}
          // multiple
          ref={inputRef}
        />
        <label htmlFor="file" className={`${styles.reviewPageButton}`}>
          사진 첨부하기
        </label>
        <span className={`${styles.count}`}>{files.length}/3</span>
      </div>
      <div className={`${styles.pictureArea}`}>
        {files.map((file: any) => (
          <div className={`${styles.pictureBox}`}>
            <img src={file.imageUrl} alt="이미지 미리보기" />
            <button
              className={`${styles.cancelButton}`}
              onClick={() => handleClearClick(file)}
            ></button>
          </div>
        ))}
      </div>
      <div className={`${styles.paragraph}`}>
        사진은 최대 20MB 이하의 JPG 파일만 3장까지 첨부가능 합니다.
      </div>
    </>
  );
};

export default FileInput;
