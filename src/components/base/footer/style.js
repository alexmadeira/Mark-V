import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #333333;
  height: 100px;
  padding: 0 20px;
  color: #ffffff;
  position: relative;
  z-index: 10;
`;

export const Social = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  a {
    color: #ffffff;
    font-size: 20px;
    margin-left: 20px;
    -webkit-transition: color 0.2s ease-out;
    -moz-transition: color 0.2s ease-out;
    -o-transition: color 0.2s ease-out;
    transition: color 0.2s ease-out;
    &:hover {
      &.facebook {
        color: #3b5998;
      }
      &.instagram {
        color: #945647;
      }
    }
  }
`;
