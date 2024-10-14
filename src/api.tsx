import axios from 'axios';
import axiosInstance, { PROXY } from 'utils/apiConfig';
import { getCookie } from 'utils/cookie';

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
