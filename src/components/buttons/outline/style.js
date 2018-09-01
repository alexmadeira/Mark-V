import styled from "styled-components";
import { Link } from "react-router-dom";

export const OutlineButtom = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 20px;
  padding: 10px 47px;
  margin: 0 10px;
  &.btn-default {
    border-radius: 5px;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
  }
`;
