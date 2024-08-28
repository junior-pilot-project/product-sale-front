import axios from 'axios';
import Button from 'components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
/**
 * 회원가입 또는 로그인 폼
 *
 */

const AuthFormBlock = styled.div`
  width: 460px;
  margin: 0 auto;
  h3 {
    text-align: left;
    color: black;
  }
`;

const StyledInput = styled.input`
  display: inline-block;
  border: 1px solid #ccc;
  width: 100%;
  height: 52px;
  padding: 15px 15px;
  margin: 5px 0;
`;
const textMap = {
  login: '로그인',
  register: '회원가입',
};

type AuthType = {
  type: 'register' | 'login';
};

type LoginType = {
  id: string;
  password: string;
};

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
    <AuthFormBlock>
      <h3>{type === 'register' ? '회원가입' : '로그인'}</h3>
      <form onSubmit={handleSubmit}>
        <StyledInput
          name="id"
          placeholder="아이디"
          onChange={handleLoginInput}
        ></StyledInput>
        <StyledInput
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={handleLoginInput}
        ></StyledInput>
        {type === 'register' && <StyledInput placeholder="이름"></StyledInput>}
        <Button
          disabled={
            answer.id.length === 0 ||
            answer.password.length === 0 ||
            status === 'submitting'
          }
          style={{ width: '460px', height: '50px' }}
        >
          {text}
        </Button>
        {type === 'login' && (
          <Button
            style={{ width: '460px', height: '50px' }}
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
    </AuthFormBlock>
  );
};

export default AuthForm;
