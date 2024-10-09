import React from 'react';
import styles from './AddressList.module.css';
import { AddressListProps } from 'types/ResultDataType';
import { Link } from 'react-router-dom';

const AddressList = ({ lists, onDeleteClick }: any) => {
  return (
    <div className={`${styles.listboxContainer}`}>
      {lists.map((list: AddressListProps) => (
        <div key={list.addressId}>
          <div className={`${styles.listLabel}`}>배송지</div>
          <ul className={`${styles.listboxContainer}`}>
            <AddressListItem list={list} />
            <li>
              <div className={`${styles.listbox}`}>
                <strong className={`${styles.listboxLabel}`}>
                  비밀번호변경
                </strong>
                <div className={`${styles.listboxContent}`}>
                  비밀번호변경은 [비밀번호 변경] 에서 수정, 등록 합니다.
                </div>
              </div>
            </li>
            <div className={`${styles.listboxButton}`}>
              <Link
                to="/myPageLocation"
                state={list}
                className={`button ${styles.goPage}`}
              >
                수정하기
              </Link>
            </div>
            <div className={`${styles.listboxButton}`}>
              <Link
                className={`button ${styles.goPage}`}
                to=""
                onClick={() => onDeleteClick(list.addressId)}
              >
                삭제하기
              </Link>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

const AddressListItem = ({ list }: any) => {
  return (
    <li>
      <div className={`${styles.listbox}`}>
        <strong className={`${styles.listboxLabel}`}>배송지이름</strong>
        <div className={`${styles.listboxContent}`}>{list.addressName}</div>
      </div>
    </li>
  );
};

export default AddressList;
