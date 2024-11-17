import axios, { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router';
import axiosInstance, { PROXY } from 'utils/apiConfig';
import { getCookie } from 'utils/cookie';

// product-management-controller-상품조회

// 상품조회
export const productApi = async ({
  take = 10,
  skip = 0,
  productPrice = '',
  productName = '',
  sortBy = '',
  productId = '',
}) => {
  const params = { take, productPrice, productName, sortBy, productId };

  try {
    const res = await axiosInstance.get(`${PROXY}/api/product`, { params });
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;

    if (axiosError.response && axiosError.response.data.status === 500) {
      console.error('서버 에러발생:', axiosError.response.data);
    } else {
      console.error('에러발생:', error);
    }
    throw error;
  }
};

// MY정보-리뷰관리

// 리뷰등록
export const reviewApi = async (reviewboard: any) => {
  await axiosInstance
    .post(`${PROXY}/api/review`, reviewboard)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      if (error.response.data.status === 500) {
      }
    });
};

// 리뷰등록
export const reviewListApi = async () => {
  await axiosInstance
    .get(`${PROXY}/api/review`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      if (error.response.data.status === 500) {
      }
    });
};

// 이미지 삭제
export const imgDeleteApi = async (file: any) => {
  const { imageId, imageUrl } = file;

  try {
    const query = `imageId=${imageId}&imageUrl=${imageUrl}`;
    const res = await axiosInstance.delete(`${PROXY}/api/image?${query}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 이미지

// 이미업로드
export const imgUploadApi = async (formData: any) => {
  const accessToken = getCookie('accessToken');
  try {
    const res = await axios.post(`${PROXY}/api/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
