import axios from 'axios';
import Button from 'components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Auth.module.css';
import { AuthType, LoginType } from 'types/ConstType';
import { setCookie, setInterceptor } from 'module/cookie';

/**
 * 회원가입 또는 로그인 폼
 *
 */

const AuthForm = ({ type }: AuthType) => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<LoginType>({
    id: '',
    password: '',
  });

  const handleLoginInput = (e: any) => {
    const { name, value } = e.target;
    setAnswer({
      ...answer,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(`/login`, answer)
      .then((res) => {
        const accessToken = res.data.accessToken;

        localStorage.setItem('토큰', accessToken); // 재확인필요
        setInterceptor(accessToken);
        setCookie('accessToken', accessToken, { path: '/' });

        navigate('/');
      })
      .catch((error) => {
        if (error.response.data.status === 500) {
          alert('아이디 또는 비밀번호가 틀렸습니다.');
        }
      });
  };

  return (
    <div className={`${styles.authFormBlock}`}>
      <h3>{type === 'register' ? '회원가입' : '로그인'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          className={`${styles.styledInput}`}
          name="id"
          placeholder="아이디"
          onChange={handleLoginInput}
        ></input>
        <input
          className={`${styles.styledInput}`}
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={handleLoginInput}
        ></input>
        {type === 'register' && (
          <input className={`${styles.styledInput}`} placeholder="이름"></input>
        )}
        <Button
          disabled={answer.id.length === 0 || answer.password.length === 0}
          style={{ width: '428px', height: '50px' }}
        >
          로그인
        </Button>
        {type === 'login' && (
          <Button
            style={{ width: '428px', height: '50px' }}
            onClick={() => navigate('/register')}
          >
            회원가입
          </Button>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
