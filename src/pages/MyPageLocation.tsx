import Header from 'components/layout/Header';
import styles from './MyPageLocation.module.css';
import LeftTab from 'components/myPage/LeftTab';
import { useState } from 'react';
import axiosInstance from 'utils/apiConfig';
import { InputBoxType } from 'types/ConstType';
import { useNavigate } from 'react-router';

const MyPageLocation = () => {
  const [addressName, setAddressName] = useState('');
  const navigate = useNavigate();

  const onChangeEvent = (e: any) => {
    const addressName = e.target.value;
    setAddressName(addressName);
  };

  const onSaveAddress = () => {
    if (addressName === '') return;
    const param = { addressName: addressName };
    axiosInstance.post('/api/address', param).then((res) => {
      navigate('/myPageLocationList');
    });
  };

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
                <InputBoxArea
                  placeholder="경기도 부천시 금천로 334"
                  imgsrc={require('../assets/icon/icon_mail.png')}
                  onChangeValue={onChangeEvent}
                ></InputBoxArea>
                <div className={`${styles.defaultDelival}`}>
                  <input type="checkbox"></input>
                  <div className={`${styles.checkboxText}`}>
                    기본배송지로 선택
                  </div>
                </div>
                <div className={`${styles.bottom} `}>
                  <button
                    className={`button ${styles.buttonFillWhite} `}
                    onClick={() => navigate('/myPageLocationList')}
                  >
                    취소하기
                  </button>
                  <button
                    className={`button ${styles.buttonFillBlue} `}
                    onClick={onSaveAddress}
                  >
                    저장
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputBoxArea = (props: InputBoxType) => {
  const { placeholder, imgsrc, onChangeValue } = props;

  return (
    <div className={`${styles.inputBoxArea}`}>
      <div className={`${styles.inputBoxIcon}`}>
        <img src={imgsrc} alt="" style={{ width: '20px' }} />
      </div>
      <input placeholder={placeholder} onChange={onChangeValue}></input>
    </div>
  );
};

export default MyPageLocation;
