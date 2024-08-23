/**
 * 버튼 공통컴포넌트
 */

import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #346aff;
  padding: 12.5px 0;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: none;
  line-height: 19px;
  margin-top: 10px;
`;

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton {...props} />
);

export default Button;
