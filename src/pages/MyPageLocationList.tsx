import Header from 'components/layout/Header';
import styles from './MyPageLocationList.module.css';
import LeftTab from 'components/myPage/LeftTab';
import { useEffect, useState } from 'react';
import axiosInstance, { PROXY } from 'utils/apiConfig';
import AddressList from 'components/myPage/AddressList';
import { AddressListProps } from 'types/ResultDataType';

const MyPageLocationList = () => {
  const [addressList, setAddressList] = useState<AddressListProps[]>([]);

  const getList = async () => {
    try {
      const { data } = await axiosInstance.get(`${PROXY}/api/address`);
      setAddressList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async (id: number) => {
    try {
      await axiosInstance.delete(`${PROXY}/api/address/${id}`).then(() => {
        const nextItems = addressList.filter((list) => list.addressId !== id);
        setAddressList(nextItems);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className={`${styles.myPage}`}>
        <div className={`${styles.label}`}>My쿠팡</div>
        <hr></hr>
        <div className={`${styles.myPageContainer}`}>
          <LeftTab></LeftTab>
          <div className={`${styles.myPageContent}`}>
            <div className={`${styles.label}`}>배송지 목록</div>
            <section className={` ${styles.myPageSection}`}>
              <AddressList
                lists={addressList}
                onDeleteClick={handleDeleteClick}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageLocationList;
