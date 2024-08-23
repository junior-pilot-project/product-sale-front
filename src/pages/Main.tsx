import Button from "components/common/Button";
import styled from "styled-components";

const LoginFormBlock = styled.div`
  min-width: 290px;
  max-width: 460px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  width: 460px;
  height: 52px;
  margin-top: 14px;
`;

const Main = () => {
  return (
    <>
      <LoginFormBlock>
        <StyledInput placeholder="아이디"></StyledInput>
        <StyledInput placeholder="비밀번호" type="password"></StyledInput>
        <div>
          <Button style={{ width: "460px", height: "50px" }}>로그인</Button>
        </div>
        <div>
          <Button style={{ width: "460px", height: "50px" }}>회원가입</Button>
        </div>
      </LoginFormBlock>
    </>
  );
};

export default Main;
