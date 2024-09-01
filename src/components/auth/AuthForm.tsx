import axios from 'axios';
import Button from 'components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Auth.module.css';
import { AuthType, LoginType, textMap } from 'types/ConstType';

/**
 * 회원가입 또는 로그인 폼
 *
 */

const AuthForm = ({ type }: AuthType) => {
  const text = textMap[type];
  const navigate = useNavigate();

  const [answer, setAnswer] = useState<LoginType>({
    id: '',
    password: '',
  });
  const [status, setStatus] = useState('typing');

  const handleLoginInput = (e: any) => {
    const { name, value } = e.target;
    setAnswer({
      ...answer,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const resp = await (await axios.post(`/login`, answer)).data;
    setStatus(resp.accessToken);
    console.log(resp);
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
          disabled={
            answer.id.length === 0 ||
            answer.password.length === 0 ||
            status === 'submitting'
          }
          style={{ width: '428px', height: '50px' }}
        >
          {text}
        </Button>
        {type === 'login' && (
          <Button
            style={{ width: '428px', height: '50px' }}
            onClick={() => navigate('/register')}
          >
            회원가입
          </Button>
        )}
        <h4
          style={{
            color: '#000000',
            overflow: 'hidden',
            wordWrap: 'break-word',
          }}
        >
          {status}
        </h4>
      </form>
    </div>
  );
};

export default AuthForm;
