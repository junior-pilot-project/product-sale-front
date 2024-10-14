import Header from 'components/layout/Header';
import styles from './MyPageMod.module.css';
import LeftTab from 'components/myPage/LeftTab';
import { useEffect, useState } from 'react';
import axiosInstance from 'utils/apiConfig';

const MyPageMod = () => {
  const [value, setValue] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    newPassword: '',
  });

  const onChangeValue = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const checkPassword = () => {
    if (value.userPassword !== value.newPassword) {
      alert('비밀번호가 일치하지않습니다.');
    }
  };

  const clickSaveValue = (type: string) => {
    if (type === 'password') {
      checkPassword();
    }

    axiosInstance.put('/api/user', value).then((res) => {
      console.log('성공');
    });
  };

  useEffect(() => {
    setValue({
      userName: '',
      userEmail: '',
      userPassword: '',
      newPassword: '',
    });
  }, []);
  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My쿠팡</div>
        <hr></hr>
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.contentRight}`}>
            <div className={`${styles.label}`}>개인정보확인/수정</div>
            <table className={`${styles.table}`}>
              <tr>
                <td>이름</td>
                <td className={`${styles.tableInline}`}>
                  <input
                    name="userName"
                    type="text"
                    onChange={onChangeValue}
                  ></input>
                  <button onClick={() => clickSaveValue('userName')}>
                    이름변경
                  </button>
                </td>
              </tr>
              <tr>
                <td>이메일</td>
                <td className={`${styles.tableInline}`}>
                  <input
                    name="userEmail"
                    type="text"
                    onChange={onChangeValue}
                  ></input>
                  <button onClick={() => clickSaveValue('userEmail')}>
                    이메일변경
                  </button>
                </td>
              </tr>
              <tr>
                <td>배송지</td>
                <td>배송지 주소관리는 [배송지 관리] 에서 수정, 등록 합니다.</td>
              </tr>
              <tr>
                <td rowspan={'3'}>비밀번호변경</td>
                <td>
                  <div className={`${styles.tableRowspan}`}>
                    <label>현재 비밀번호</label>
                    <input
                      name="userPassword"
                      type="password"
                      className={`${styles.myPageInput}`}
                      readOnly
                    ></input>
                  </div>
                </td>
              </tr>
              <tr>
                <div className={`${styles.tableRowspan}`}>
                  <label> 새 비밀번호</label>
                  <input
                    name="newPassword"
                    type="password"
                    onChange={onChangeValue}
                    className={`${styles.myPageInput}`}
                  ></input>
                </div>
              </tr>
              <tr>
                <div className={`${styles.tableRowspan}`}>
                  <label> 비밀번호 다시 입력</label>
                  <input
                    type="password"
                    onChange={onChangeValue}
                    className={`${styles.myPageInput}`}
                  ></input>
                </div>
              </tr>
              <tr>
                <td className={`${styles.center}`} colSpan={'3'}>
                  <button onClick={() => clickSaveValue('password')}>
                    비밀번호변경
                  </button>
                </td>
              </tr>
            </table>
            <div className={`${styles.peopleout}`}>
              <button>회원탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageMod;
