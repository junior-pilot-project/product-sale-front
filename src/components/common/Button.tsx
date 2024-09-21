/**
 * 버튼 공통컴포넌트
 */

import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 12.5px 0;
  outline: none;
  cursor: pointer;
  background: #346aff;
  color: white;
  width: 100%;
`;

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton {...props} />
);

export default Button;
