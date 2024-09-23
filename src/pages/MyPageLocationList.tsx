import Header from 'components/layout/Header';
import styles from './MyPageLocationList.module.css';
import LeftTab from 'components/myPage/LeftTab';
import { Link } from 'react-router-dom';

const MyPageLocationList = () => {
  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My쿠팡</div>
        <hr></hr>
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.myPageContent}`}>
            <div className={`${styles.label}`}>배송지 관리</div>
            <section className={` ${styles.myPageSection}`}>
              <div className={` ${styles.listboxContainer}`}>
                <div className={`${styles.listLabel}`}>기본배송지</div>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>이름</strong>
                      <div className={`${styles.listboxContent}`}>홍길동</div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        이메일
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        test@naver.com
                      </div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        배송지
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        배송지 주소관리는 [배송지 관리] 에서 수정, 등록 합니다.
                      </div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        비밀번호변경
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        현재 비밀번호
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={`${styles.listboxButton}`}>
                <Link to={''} className={`button ${styles.goPage}`}>
                  수정하기
                </Link>
              </div>
            </section>
            <section className={` ${styles.myPageSection}`}>
              <div className={` ${styles.listboxContainer}`}>
                <div className={`${styles.listLabel}`}>리스트1</div>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>이름</strong>
                      <div className={`${styles.listboxContent}`}>홍길동</div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        이메일
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        test@naver.com
                      </div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        배송지
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        배송지 주소관리는 [배송지 관리] 에서 수정, 등록 합니다.
                      </div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        비밀번호변경
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        현재 비밀번호
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={`${styles.listboxButton}`}>
                <Link to={''} className={`button ${styles.goPage}`}>
                  수정하기
                </Link>
              </div>
            </section>
            <section className={` ${styles.myPageSection}`}>
              <div className={` ${styles.listboxContainer}`}>
                <div className={`${styles.listLabel}`}>리스트3</div>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>이름</strong>
                      <div className={`${styles.listboxContent}`}>홍길동</div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        이메일
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        test@naver.com
                      </div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        배송지
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        배송지 주소관리는 [배송지 관리] 에서 수정, 등록 합니다.
                      </div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className={`${styles.listbox}`}>
                      <strong className={`${styles.listboxLabel}`}>
                        비밀번호변경
                      </strong>
                      <div className={`${styles.listboxContent}`}>
                        현재 비밀번호
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={`${styles.listboxButton}`}>
                <Link to={''} className={`button ${styles.goPage}`}>
                  수정하기
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageLocationList;
