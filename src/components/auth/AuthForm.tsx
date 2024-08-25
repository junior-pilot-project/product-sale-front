import Button from 'components/common/Button';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
/**
 * 회원가입 또는 로그인 폼
 *
 */

const AuthFormBlock = styled.div`
  h3 {
    text-align: left;
    color: black;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  width: 460px;
  height: 52px;
  margin-top: 14px;
`;
const textMap = {
  login: '로그인',
  register: '회원가입',
};

type AuthType = {
  type: 'register' | 'login';
};

const AuthForm = ({ type }: AuthType) => {
  const text = textMap[type];
  const navigate = useNavigate();

  return (
    <AuthFormBlock>
      <h3>{type === 'register' ? '회원가입' : '로그인'}</h3>
      <form>
        <StyledInput placeholder="아이디"></StyledInput>
        <StyledInput placeholder="비밀번호" type="password"></StyledInput>
        {type === 'register' && <StyledInput placeholder="이름"></StyledInput>}
        <Button
          style={{ width: '460px', height: '50px' }}
          onClick={() => navigate('/')}
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
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
