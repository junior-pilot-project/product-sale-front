import { Link } from 'react-router-dom';
import styled from 'styled-components';
/**
 * 회원가입/로그인 페이지의 레이아웃
 */

const AuthTemplateBlock = styled.div`
  width: 460px;
  height: 673.2px;
  margin: 0 auto;
  .borderLine {
    width: 100vw;
    left: 0;
    height: 1px;
    background: #dfe3e8;
  }
`;

const WhiteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffff;
  .logo-area {
    disply: block;
    text-align: center;
  }
  padding: 16px;
  font-weight: 700;
`;

const AuthTemplate = ({ children }: any) => {
  return (
    <>
      <AuthTemplateBlock>
        <WhiteBox>
          <div className="logo-area">
            <Link to="/">
              <img src={require('../../assets/main_logo.png')} alt="" />
            </Link>
            {children}
          </div>
        </WhiteBox>
      </AuthTemplateBlock>
      <div className="borderLine"></div>
    </>
  );
};

export default AuthTemplate;
