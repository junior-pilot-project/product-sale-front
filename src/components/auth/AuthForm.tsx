import Button from 'components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Auth.module.css';
import { AuthType, LoginType } from 'types/ConstType';
import { setCookie } from 'utils/cookie';
import axios from 'axios';

/**
 * 회원가입 또는 로그인 폼
 *
 */

const AuthForm = ({ type }: AuthType) => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<LoginType>({
    id: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginInput = (e: any) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

    axios
      .post(`${PROXY}/login`, loginForm)
      .then((res) => {
        const { accessToken, refreshToken } = res.data;

        setCookie('accessToken', accessToken, { path: '/' });
        setCookie('refreshToken', refreshToken, { path: '/' });

        navigate('/');
      })
      .catch((error) => {
        if (error.response.data.status === 500) {
          setErrorMsg('아이디 또는 비밀번호가 틀렸습니다.');
        }
      });
  };

  return (
    <div className={`${styles.authFormBlock}`}>
      <div className={`${styles.label}`}>
        {type === 'register' ? '회원정보를 입력해주세요' : '로그인'}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={`${styles.styledInput}`}
          name="id"
          placeholder="아이디"
          onChange={handleLoginInput}
          required
        ></input>
        <input
          className={`${styles.styledInput}`}
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={handleLoginInput}
          required
        ></input>
        {type === 'register' && (
          <>
            <input
              className={`${styles.styledInput}`}
              name="email"
              placeholder="이메일"
              type="email"
              required
            ></input>
            <input
              className={`${styles.styledInput}`}
              placeholder="이름"
              required
            ></input>
          </>
        )}
        <div className={`${styles.errorMsg}`}>{errorMsg}</div>
        <div className={`${styles.authButton}`}>
          {type === 'register' ? (
            <Button onClick={() => navigate('/register')}>회원가입</Button>
          ) : (
            <Button
              disabled={
                loginForm.id.length === 0 || loginForm.password.length === 0
              }
            >
              로그인
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
