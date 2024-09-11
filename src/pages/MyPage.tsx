import Header from 'components/layout/Header';
import styles from './MyPage.module.css';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import LeftTab from 'components/myPage/LeftTab';

const MyPage = () => {
  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My쿠팡</div>
        <hr></hr>
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.contentRight}`}>
            <section className={` ${styles.section1}`}>
              <div className={`${styles.label}`}>주문목록</div>
              <div className={`${styles.orderInfo}`}>
                <span> 2024. 08. 20 주문</span>
                <span>주문번호 178232323232</span>
              </div>
              <div className={`${styles.orderBox}`}>
                <div className={`${styles.orderBoxProduct}`}>
                  <div className={`${styles.label}`}>배송완료</div>
                  <img
                    src={require('../assets/cloth1.png')}
                    width={'146px'}
                    height={'146px'}
                    alt="버튼"
                  ></img>
                </div>
                <div className={`${styles.orderBoxInfo}`}>
                  <div className={`${styles.productName}`}>
                    어택존 방한 기모 발열 목 폴라 로카 군인 티 남자 목티 긴팔
                    티셔츠
                  </div>
                  <div className={`${styles.productPrice}`}>15,850원</div>
                  <div className={`${styles.productCt}`}>수량 1개</div>
                </div>
                <Button style={{ width: '245px', height: '50px' }}>
                  리뷰 작성하기
                </Button>
              </div>
            </section>
            <section className={`${styles.section2}`}>
              <div className={`${styles.label}`}>받는사람 정보</div>
              <table className={`${styles.table}`}>
                <tr>
                  <td>이름</td>
                  <td>홍길동</td>
                </tr>
                <tr>
                  <td>이메일</td>
                  <td>test@naver.com</td>
                </tr>
                <tr>
                  <td>이름</td>
                  <td>서울시 금천구</td>
                </tr>
              </table>
            </section>
            <section className={`${styles.section3}`}>
              <div className={`${styles.label}`}>결제정보</div>
              <table className={`${styles.table}`}>
                <tr>
                  <td>총상품가격</td>
                  <td>40,000원</td>
                </tr>
                <tr>
                  <td>할인쿠폰</td>
                  <td>
                    10% 할인쿠폰적용 <span>-4,000원 </span>
                  </td>
                </tr>
                <tr>
                  <td>포인트</td>
                  <td>-200 원</td>
                </tr>
                <tr>
                  <td>총결제금액</td>
                  <td>35,800 원</td>
                </tr>
              </table>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
