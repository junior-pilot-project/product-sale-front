import Header from 'components/layout/Header';
import styles from './MyPageLocation.module.css';
import Button from 'components/common/Button';
import LeftTab from 'components/myPage/LeftTab';

const MyPageLocation = () => {
  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My쿠팡</div>
        <hr></hr>
        <div className={`${styles.content}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.contentRight}`}>
            <section className={`${styles.section1}`}>
              <div className={`${styles.textBlue}`}>배송지 관리</div>
              <div className={`${styles.container}`}>
                <div className={`${styles.inputBoxArea}`}>
                  <div className={`${styles.inputBoxIcon}`}>
                    <img src={require('../assets/icon/icon_mail.png')} alt="" />
                  </div>
                  <input placeholder="홍길동"></input>
                </div>
                <div className={`${styles.inputBoxArea}`}>
                  <div className={`${styles.inputBoxIcon}`}>
                    <img src={require('../assets/icon/icon_mail.png')} alt="" />
                  </div>
                  <input placeholder="경기도 부천시 금천로 334"></input>
                </div>
                <div className={`${styles.inputBoxArea}`}>
                  <div className={`${styles.inputBoxIcon}`}>
                    <img src={require('../assets/icon/icon_mail.png')} alt="" />
                  </div>
                  <input placeholder="직접 받고 부재시 문앞"></input>
                </div>
                <div className={`${styles.defaultDelival}`}>
                  <input type="checkbox"></input>
                  <div className={`${styles.checkboxText}`}>
                    기본배송지로 선택
                  </div>
                </div>
                <div className={`${styles.buttonArea}`}>
                  <Button style={{ width: '245px', height: '50px' }}>
                    저장
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageLocation;
