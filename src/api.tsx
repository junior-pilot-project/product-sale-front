import axios from 'axios';
import axiosInstance, { PROXY } from 'utils/apiConfig';
import { getCookie } from 'utils/cookie';

// MY정보-리뷰관리
// 이미업로드
export const imgUploadApi = (formData: any) => {
  const accessToken = getCookie('accessToken');
  axios
    .post(`${PROXY}/api/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      if (error.response.data.status === 500) {
      }
    });
};

// 리뷰등록
export const reviewApi = (reviewboard: any) => {
  axiosInstance
    .post(`${PROXY}/api/review`, reviewboard)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      if (error.response.data.status === 500) {
      }
    });
};
