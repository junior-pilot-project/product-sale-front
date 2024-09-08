import Header from 'components/layout/Header';
import styles from './MyPageMod.module.css';
import { Link } from 'react-router-dom';

const MyPageMod = () => {
  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My쿠팡</div>
        <hr></hr>
        <div className={`${styles.content}`}>
          <div className={`${styles.borderBox}`}>
            <ul className={`${styles.menuList}`}>
              <li>
                <Link to={'/myPage'}>주문목록</Link>
              </li>
              <li className={`${styles.textBlue}`}>
                <Link to={'/myPageMod'}>개인정보확인/수정</Link>
              </li>
              <li>
                <Link to={'/'}>배송지 관리</Link>
              </li>

              <li>
                <Link to={'/'}>리뷰 관리</Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.contentRight}`}>
            <section className={` ${styles.section1}`}>
              <div className={`${styles.label}`}>개인정보확인/수정</div>
              <hr></hr>
              <table className={`${styles.table}`}>
                <tr>
                  <td>이름</td>
                  <td>
                    홍길동<button>이름변경</button>
                  </td>
                </tr>
                <tr>
                  <td>이메일</td>
                  <td>
                    test@naver.com <button>이메일변경</button>
                  </td>
                </tr>
                <tr>
                  <td>배송지</td>
                  <td>
                    배송지 주소관리는 [배송지 관리] 에서 수정, 등록 합니다.
                  </td>
                </tr>
                <tr>
                  <td rowspan={'3'}>비밀번호변경</td>
                  <td>
                    현재 비밀번호
                    <input className={`${styles.myPageInput}`}></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    새 비밀번호
                    <input className={`${styles.myPageInput}`}></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    비밀번호 다시 입력
                    <input className={`${styles.myPageInput}`}></input>
                  </td>
                </tr>
              </table>
              <div className={`${styles.peopleout}`}>
                <button>회원탈퇴</button>
              </div>
            </section>
            <div className={`${styles.out}`}>
              <button>나가기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageMod;
