import styles from './Auth.module.css';
import { Link, useLocation } from 'react-router-dom';
import AuthForm from './AuthForm';

const AuthPage = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const type = currentUrl === '/login' ? 'login' : 'register';

  return (
    <>
      <div className={`${styles.authTemplateBlock}`}>
        <div className={`${styles.whiteBox}`}>
          <div className={`${styles.logoArea}`}>
            <Link to="/">
              <img src={require('../../assets/main_logo.png')} alt="" />
            </Link>
          </div>
          <div>
            <AuthForm type={type}></AuthForm>
          </div>
        </div>
      </div>
      <div className="borderLine"></div>
    </>
  );
};

export default AuthPage;
