import { Link } from 'react-router-dom';
import styles from './Auth.module.css';
/**
 * 회원가입/로그인 페이지의 레이아웃
 */

const AuthTemplate = ({ children }: any) => {
  return (
    <>
      <div className={`${styles.authTemplateBlock}`}>
        <div className={`${styles.whiteBox}`}>
          <div className={`${styles.logoArea}`}>
            <Link to="/">
              <img src={require('../../assets/main_logo.png')} alt="" />
            </Link>
          </div>
          <div> {children}</div>
        </div>
      </div>
      <div className="borderLine"></div>
    </>
  );
};

export default AuthTemplate;
