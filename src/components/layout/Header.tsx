import styled from "styled-components";

const ImageWrap = styled.div`
  text-align: center;
`;

const Header = () => {
  return (
    <header>
      <div>
        <ImageWrap>
          <img src={require("../../assets/main_logo.png")} alt="" />
        </ImageWrap>
      </div>
      <div className="borderLine"></div>
    </header>
  );
};

export default Header;
