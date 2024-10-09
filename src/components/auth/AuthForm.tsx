import Button from 'components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Auth.module.css';
import { AuthType, LoginType, RegisterType } from 'types/ConstType';
import axios from 'axios';
import Input from 'components/common/Input';
import { PROXY } from 'utils/apiConfig';
import { setCookie } from 'utils/cookie';

/**
 * 회원가입 또는 로그인 폼
 *
 */

const AuthForm = ({ type }: AuthType) => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [loginForm, setLoginForm] = useState<LoginType>({
    id: '',
    password: '',
  });
  const [registerForm, setRegisterForm] = useState<RegisterType>({
    userId: '',
    userName: '',
    userPassword: '',
    userEmail: '',
  });

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleRegisterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const getLogin = () => {
    axios
      .post(`${PROXY}/login`, loginForm)
      .then((res) => {
        const { accessToken } = res.data;
        setCookie('accessToken', accessToken, { path: '/' });
        navigate('/');
      })
      .catch((error) => {
        if (error.response.data.status === 500) {
          setErrorMsg('아이디 또는 비밀번호가 틀렸습니다.');
        }
      });
  };

  const validation = () => {
    if (registerForm.userId === '') {
      alert('아이디를 입력해주세요');
      return false;
    }

    if (registerForm.userEmail === '') {
      alert('이메일을 입력해주세요');
      return false;
    }

    if (registerForm.userPassword === '') {
      alert('비밀번호 입력해주세요');
      return false;
    }

    if (registerForm.userName === '') {
      alert('이름을 입력해주세요');
      return false;
    }

    if (registerForm.userId === '') {
      alert('아이디를 입력해주세요');
      return false;
    }

    return true;
  };

  const getRegister = () => {
    if (!validation()) return;

    axios
      .post(`${PROXY}/api/user/join`, registerForm)
      .then((res) => {
        navigate('/');
      })
      .catch((e) => {
        if (e.response.data.status === 500) {
          alert(e.response.data.detail);
        }
        console.error(e);
        alert('Error데이터를 불러올 수 없습니다');
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const buttonType = e.nativeEvent.submitter.name;
    if (buttonType === 'signUp') {
      getRegister();
    } else if (buttonType === 'login') {
      getLogin();
    }
  };

  return (
    <div className={`${styles.authFormBlock}`}>
      <div className={`${styles.label}`}>
        {type === 'register' ? '회원정보를 입력해주세요' : '로그인'}
      </div>
      <form onSubmit={handleSubmit}>
        {type === 'login' && (
          <>
            <Input
              className={`${styles.styledInput}`}
              name="id"
              placeholder="아이디"
              onChange={handleLoginInput}
            />
            <Input
              className={`${styles.styledInput}`}
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={handleLoginInput}
            />
          </>
        )}
        {type === 'register' && (
          <>
            <Input
              className={`${styles.styledInput}`}
              name="userId"
              placeholder="아이디"
              onChange={handleRegisterInput}
              required
            />
            <Input
              className={`${styles.styledInput}`}
              name="userPassword"
              placeholder="비밀번호"
              type="password"
              onChange={handleRegisterInput}
              required
            />
            <Input
              className={`${styles.styledInput}`}
              name="userEmail"
              placeholder="이메일"
              onChange={handleRegisterInput}
              type="email"
              required
            />
            <Input
              className={`${styles.styledInput}`}
              name="userName"
              placeholder="이름"
              required
              onChange={handleRegisterInput}
            />
          </>
        )}
        <div className={`${styles.errorMsg}`}>{errorMsg}</div>
        <div className={`${styles.authButton}`}>
          {type === 'register' ? (
            <Button type="submit" name="signUp">
              회원가입
            </Button>
          ) : (
            <Button
              name="login"
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
