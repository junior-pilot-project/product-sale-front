import axios, { AxiosInstance } from 'axios';
import { getCookie, setCookie } from './cookie';

const axiosInstance = axios.create({
  timeout: 5000, //5초설정
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    console.log(accessToken + '확인');

    if (!accessToken) {
      window.location.href = '/loginPage';
      return config;
    }

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        //TODO 테스트 할것
        await tokenRefresh(axiosInstance);
        const accessToken = getCookie('accessToken');
        error.config.headers.Authorization = `Bearer ${accessToken}`;
        // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
        return axiosInstance(error.config);
      } else if (error.response.status === 404) {
        window.location.href = '/notFound';
      } else if (error.response && error.response.status === 500) {
        const errorCode = error.response.data.errorCode;
        console.log(errorCode);
      }
    }
  },
);

const tokenRefresh = async (axiosInstance: AxiosInstance) => {
  const refreshToken = getCookie('refreshToken');
  const { data } = await axiosInstance.post('/api/auth/renew/token', {
    refreshToken: refreshToken,
  });

  const newAccessToken = data.accessToken;
  const newRefreshToken = data.refreshToken;

  setCookie('accessToken', newAccessToken, { path: '/' });
  setCookie('refreshToken', newRefreshToken, { path: '/' });
};

export default axiosInstance;
