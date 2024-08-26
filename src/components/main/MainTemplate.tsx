import Header from 'components/layout/Header';
import styled from 'styled-components';

const MainTemplateBlock = styled.div`
  position: relative;
  background-color: #fbbff;
  border-bottom: 1px solid #eee;
`;

const BannerWrap = styled.section`
  position: relative;
  height: 450px;
  background: #fafafa;
`;

const MainTemplate = () => {
  return (
    <MainTemplateBlock>
      <Header></Header>
      <BannerWrap>
        <img src={require('../../assets/banner.jpg')} alt="" />
      </BannerWrap>
    </MainTemplateBlock>
  );
};

export default MainTemplate;
