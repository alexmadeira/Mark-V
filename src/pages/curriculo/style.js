import styled from "styled-components";

export const Main = styled.div`
  background: #ffffff;
  opacity: 0;
  &.loaded {
    opacity: 1;
  }
`;

export const Header = styled.header`
  height: 35vw;
  background: ${props =>
    props.backgroundImage ? `url(${props.backgroundImage});` : "#000"};
  background-attachment: fixed;
  background-size: 100%;
  background-position: center 0px;
  position: relative;
  &::before {
    content: "";
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0) 60%
    );
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const HeaderBox = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10vw;
  z-index: 2;
  position: relative;
`;
export const Nome = styled.h1`
  font-size: 70px;
  color: #fff;
  -webkit-transition: font-size 0.2s ease;
  transition: font-size 0.2s ease;
  font-family: "PT Sans Narrow", sans-serif;
  line-height: 70px;
  margin-bottom: 20px;
`;

export const Sobre = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: 30px;
  font-family: "PT Sans Narrow", sans-serif;
`;
export const NavBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  margin-top: -20px;
  position: relative;
  z-index: 2;
`;
export const Nav = styled.ul`
  list-style: none;
  background-color: #22262a;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li {
    border-right: 1px solid #4a4a4a;
    position: relative;
    &::before {
      content: "";
      background: #f00;
      transition: width 0.2s ease;
      position: absolute;
      height: 5px;
      width: 0;
    }
    &:last-child {
      border-right: 0;
    }
    &.active {
      a {
        color: #fff;
      }
      &::before {
        width: 100%;
      }
    }
    a {
      padding: 20px;
      color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: capitalize;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
`;

export const ContaninerAnimate = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
`;
export const ContaninerAnimateBox = styled.div`
  position: relative;
  left: ${props => (props.left ? `${props.left}vw` : 0)};
  top: 0;
  transition: all 0.3s linear;
  display: flex;
  min-width: 100vw;
`;
