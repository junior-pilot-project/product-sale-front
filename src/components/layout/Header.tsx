import styled from 'styled-components';

const Topbar = styled.article`
  position: absolute;
  height: 32px;
  top: 0;
  right: 0;
  left: 0;
  background: #f0f0f0;
  z-index: 3;
`;

const Headers = styled.header`
  position: relative;
  width: 980px;
  height: 115px;
  margin: 0 auto;
  padding-top: 32px;
  background: #fff;
  .section {
    display: flex;
    position: absolute;
    width: 840px;
    height: 91px;
    margin: 25px 0 0 140px;
  }
  .logo-area {
    width: 55px;
    height: 66px;
    margin: 2px 20px 0 0;
    float: left;
  }
  .category-btn {
    position: absolute;
    top: 32px;
    left: 0;
    margin-right: 30px;
    background-position: 0 0;
    text-align: center;
  }
`;

const SearchForm = styled.div`
  display: flex;
  width: 518px;
  float: left;
  margin-left: 0;
  width: 484px;
  height: 37px;
  margin-right: 22px;
  border: 2px solid #4285f4;
  background-position: 0 -207px;
  > input {
    width: 430px;
    height: 31px;
    border: none;
  }
  > input:focus {
    outline: none;
  }
  > img {
    margin: auto;
    display: block;
  }
`;

const Header = () => {
  return (
    <>
      <Headers>
        <section className="section">
          <span className="logo-area">
            <img
              src={require('../../assets/main_logo.png')}
              alt=""
              style={{ width: '55px', height: '66px' }}
            />
          </span>
          <SearchForm>
            <input></input>
            <img
              src={require('../../assets/search_btn.png')}
              style={{ width: '18px', height: '18px' }}
              alt=""
            />
          </SearchForm>
          <img
            src={require('../../assets/mypage.png')}
            style={{ width: '55px', height: '55px' }}
            alt=""
          />
        </section>
        <div className="category-btn">
          <img
            src={require('../../assets/category.png')}
            alt=""
            style={{ height: '131px' }}
          />
        </div>
      </Headers>
      <Topbar></Topbar>
    </>
  );
};

export default Header;
