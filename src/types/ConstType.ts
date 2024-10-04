import { ChangeEventHandler } from 'react';

export const textMap = {
  login: '로그인',
  register: '회원가입',
};

export type AuthType = {
  type: 'register' | 'login';
};

export type LoginType = {
  id: string;
  password: string;
};

export type InputBoxType = {
  placeholder: string;
  imgsrc: string;
  onChangeValue: ChangeEventHandler<HTMLInputElement>;
};
