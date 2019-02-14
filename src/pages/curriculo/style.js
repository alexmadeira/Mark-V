import styled, { keyframes } from 'styled-components';

const entrada = keyframes`
  0% { left: 100vw; opacity: 0; }
  40% { left: 100vw; }
  41% { opacity: 0; }
  100% { left: 0px; opacity: 1; }
`;

export const Main = styled.main`
  background: #ffffff;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.header`
  height: 40vh;
  background: ${props => (props.backgroundImage ? `url(${props.backgroundImage});` : '#000')};
  background-attachment: fixed;
  background-size: cover;
  background-position: center 0px;
  position: relative;
  &::before {
    content: '';
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%);
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
  font-family: 'PT Sans Narrow', sans-serif;
  line-height: 70px;
  margin-bottom: 20px;
`;

export const Sobre = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: 30px;
  font-family: 'PT Sans Narrow', sans-serif;
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
`;
export const NavItem = styled.li`
  border-right: 1px solid #4a4a4a;
  position: relative;
  overflow: hidden;

  &:last-child {
    border-right: 0;
  }
  &::before {
    content: '';
    background: #f00;
    transition: width 0.2s ease;
    position: absolute;
    height: 5px;
    width: 0;
    z-index: 3;
  }

  &.active {
    span {
      color: #fff;
    }
    &::before {
      width: 100%;
    }
  }
  span {
    padding: 20px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    cursor: pointer;

    &::after {
      content: '';
      background: rgba(255, 0, 0, 0.3);
      transition: width 0.2s ease;
      position: absolute;
      height: 5px;
      width: 0;
      top: 0;
      left: 0;
      z-index: 2;
    }

    &:hover {
      color: #fff;
      &::after {
        width: 100%;
      }
    }
  }
`;

export const Contaniner = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  & > div {
    opacity: 1;
    left: 0;
    transition: all 0.3s;
    display: flex;
    min-width: 100vw;
    height: 100%;
    flex: 1;
    animation: ${entrada} 1s;
    transition-timing-function: cubic-bezier(0.03, 0.74, 0.64, 1.01);
    padding: 15px;
  }
  &.out {
    & > div {
      transition: all 200ms;
      left: -100vw;
      opacity: 0;
    }
  }
`;
