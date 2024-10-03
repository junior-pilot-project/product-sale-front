import { Cookies } from 'react-cookie';
import axios from 'axios';

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name, { path: '/' });
};

export const setInterceptor = (token) => {
  if (!token) return false;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return true;
};
