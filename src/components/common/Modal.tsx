import React from 'react';
import styles from './Modal.module.css';

export type ModalType = {
  open: boolean;
  close: React.MouseEventHandler<HTMLImageElement>;
};

const Modal = (props: ModalType) => {
  const { open, close } = props;

  return (
    <>
      <div
        className={open ? `${styles.modalbgShow}` : `${styles.modalbg}`}
      ></div>
      <div className={open ? `${styles.modalwrapShow}` : `${styles.modalwrap}`}>
        <img
          src={require('../../assets/icon/cancle-btn.png')}
          alt="버튼"
          onClick={close}
        ></img>
        <div className={`${styles.modalContent}`}>
          <div className={`${styles.modalCouponCt}`}>
            사용 가능한 쿠폰<span> 2</span> 개
          </div>
          <div className={`${styles.couponList}`}>
            <div className={`${styles.coupon}`}>
              <div className={`${styles.couponName}`}>
                <span>10% </span>할인쿠폰
              </div>
              <div className={`${styles.couponPercent}`}>10%</div>{' '}
              <img
                src={require('../../assets/icon/download-btn.png')}
                alt="버튼"
              ></img>
              <div className={`${styles.couponExpireDate}`}>
                유효기간 : 2024-12-31 까지
              </div>
            </div>
            <div className={`${styles.coupon}`}>
              <div className={`${styles.couponName}`}>
                <span>10% </span>할인쿠폰
              </div>
              <div className={`${styles.couponPercent}`}>10%</div>
              <img
                src={require('../../assets/icon/download-btn.png')}
                alt="버튼"
              ></img>
              <div className={`${styles.couponExpireDate}`}>
                유효기간 : 2024-12-31 까지
              </div>
            </div>
            <div className={`${styles.coupon}`}>
              <div className={`${styles.couponName}`}>
                <span>10% </span>할인쿠폰
              </div>
              <div className={`${styles.couponPercent}`}>10%</div>
              <img
                src={require('../../assets/icon/download-btn.png')}
                alt="버튼"
              ></img>
              <div className={`${styles.couponExpireDate}`}>
                유효기간 : 2024-12-31 까지
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
