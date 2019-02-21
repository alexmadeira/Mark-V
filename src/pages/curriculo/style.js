import styled, { keyframes } from 'styled-components';

const entrada = keyframes`
  0% {  opacity: 0; }
  100% { opacity: 1; }
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
  @media (max-width: 700px) {
    margin-left: 15px;
    margin-right: 15px;
    width: calc(100% - 30px);
  }
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
  margin-top: -20px;
  position: relative;
  z-index: 2;
  width: 100%;
  background-color: #22262a;
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 40px);
  margin-left: 82px;
`;
export const NavItem = styled.li`
  position: relative;
  overflow: hidden;
  flex: 1;
  margin-left: -65px;
  &::after {
    content: '';
    position: absolute;
    right: -29px;
    top: -15px;
    z-index: 12;
    width: 62px;
    height: 122px;
    transform: rotate(45deg);
    border: 1px solid #4a4a4a;
  }
  &::before {
    content: '';
    position: absolute;
    left: -30px;
    top: -44px;
    z-index: 12;
    width: 62px;
    height: 122px;
    transform: rotate(45deg);
    border: 1px solid #4a4a4a;
  }

  &:last-child {
    border-right: 0;
  }

  &.active {
    span {
      color: rgba(0, 0, 0, 0.7);
      background: #f00;
      position: relative;
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
      &::after {
        border-color: transparent transparent #20252a transparent;
      }
      &::before {
        border-color: #20252a transparent transparent transparent;
      }
    }
  }
  span {
    padding: 20px 25px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;

    &::after {
      content: '';
      width: 0;
      height: 0;
      right: 0px;
      top: 0;
      border-style: solid;
      border-width: 0px 0 62px 62px;
      border-color: transparent transparent transparent transparent;
      position: absolute;
      z-index: 2;
    }
    &::before {
      content: '';
      width: 0;
      height: 0;
      left: 0;
      top: 0;
      border-style: solid;
      border-width: 64px 64px 0 0;
      border-color: transparent transparent transparent transparent;
      position: absolute;
      z-index: 2;
    }
    &:hover {
      color: #fff;
    }
  }
`;

export const Contaniner = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  & > div {
    opacity: 1;
    transition: all 100ms;
    display: flex;
    min-width: 100vw;
    height: 100%;
    flex: 1;
    animation: ${entrada} 100ms;
    transition-timing-function: cubic-bezier(0.03, 0.74, 0.64, 1.01);
  }
  &.out {
    & > div {
      transition: opacity 100ms;
      opacity: 0;
    }
  }
`;
