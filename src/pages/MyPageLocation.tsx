import Header from 'components/layout/Header';
import styles from './MyPageLocation.module.css';
import LeftTab from 'components/myPage/LeftTab';
import { useEffect, useState } from 'react';
import axiosInstance from 'utils/apiConfig';
import { InputBoxType } from 'types/ConstType';
import { useLocation, useNavigate } from 'react-router';

const MyPageLocation = () => {
  const [addressName, setAddressName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      const { addressName } = location.state;
      setAddressName(addressName);
    }
  }, [location.state]);

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
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.contentRight}`}>
            <div className={`${styles.label}`}>배송지 관리</div>
            <div className={`${styles.container}`}>
              <InputBoxArea
                placeholder="경기도 부천시 금천로 334"
                imgsrc={require('../assets/icon/icon_mail.png')}
                onChangeValue={onChangeEvent}
                value={addressName}
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
          </div>
        </div>
      </div>
    </div>
  );
};

const InputBoxArea = (props: InputBoxType) => {
  const { placeholder, imgsrc, onChangeValue, value } = props;

  return (
    <div className={`${styles.inputBoxArea}`}>
      <div className={`${styles.inputBoxIcon}`}>
        <img src={imgsrc} alt="" style={{ width: '20px' }} />
      </div>
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChangeValue}
      ></input>
    </div>
  );
};

export default MyPageLocation;
