import Header from 'components/layout/Header';
import LeftTab from 'components/myPage/LeftTab';
import styles from './MyPagePassword.module.css';
import { Link } from 'react-router-dom';

const MyPagePassword = () => {
  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My쿠팡</div>
        <hr></hr>
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.contentRight}`}>
            <div className={`${styles.label}`}>비밀번호변경</div>
            <hr></hr>
            <div className={`${styles.passwordContainer}`}>
              <div className={`${styles.passwordInputBox}`}>
                <label
                  htmlFor="parentPassword"
                  className={`${styles.passwordLabel}`}
                >
                  현재 비밀번호
                </label>
                <input
                  type="password"
                  id="parentPassword"
                  className={`${styles.passwordInput}`}
                ></input>
              </div>
              <div className={`${styles.passwordInputBox}`}>
                <label htmlFor="password" className={`${styles.passwordLabel}`}>
                  새 비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  className={`${styles.passwordInput}`}
                ></input>
              </div>
              <div className={`${styles.passwordInputBox}`}>
                <label
                  htmlFor="passwordCk"
                  className={`${styles.passwordLabel}`}
                >
                  비밀번호 다시 입력
                </label>
                <input
                  type="password"
                  id="passwordCk"
                  className={`${styles.passwordInput}`}
                ></input>
              </div>
              <div className={`${styles.passwordButton}`}>
                <Link to="" className={`button ${styles.buttonLineBlue}`}>
                  취소하기
                </Link>
                <Link to="" className={`button ${styles.buttonBlue}`}>
                  저장
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPagePassword;
