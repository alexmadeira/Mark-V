import styled, { keyframes } from 'styled-components';

const entrada = keyframes`
  0% { top: 200px; opacity: 0; }
  40% { top: 200px; }
  50% { opacity: 0; }
  100% { top: 0px; opacity: 1; }
`;

export const Container = styled.div`
  border: 1px solid #000;
  flex: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  max-width: 100%;
  transition: all 0.2s;
  background-size: cover;
  opacity: 1;
  animation: ${entrada} ${props => (props.item ? 1 + props.item / 5 : 1)}s;
  background: ${props => (props.bgcolor ? `url(${props.bgcolor})` : '#FFFFFF')};

  &::after {
    content: '';
    background-image: url(${props => props.bgimage});
    visibility: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    transition: all 0.2s;
    z-index: 0;
  }

  &:nth-child(9n + 1) {
    width: calc(25% - 30px);
  }
  &:nth-child(9n + 2) {
    width: calc(50% - 30px);
  }
  &:nth-child(9n + 3) {
    width: calc(25% - 30px);
  }
  &:nth-child(9n + 4) {
    width: calc(50% - 30px);
  }
  &:nth-child(9n + 5) {
    width: calc(31.25% - 30px);
  }
  &:nth-child(9n + 6) {
    width: calc(18.75% - 30px);
  }
  &:nth-child(9n + 7) {
    width: calc(31.25% - 30px);
  }
  &:nth-child(9n + 8) {
    width: calc(25% - 30px);
  }
  &:nth-child(9n + 9) {
    width: calc(36% - 30px);
  }
  @media (max-width: 960px) {
    width: calc(100% - 30px) !important;
  }
  &.open {
    width: calc(100% - 30px) !important;
    height: 95vh;
    flex: initial;
    &::after {
      visibility: visible;
    }
  }
  img {
    max-width: initial !important;
  }
  &.simple {
    @media (min-width: 992px) {
      &:nth-child(9n + 4),
      &:nth-child(9n + 1) {
        .DescriptionBox {
          left: initial;
          right: -10px;
        }
      }
    }
  }
`;

export const NextProjectLink = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  transition: all 0.2s linear;
  text-decoration: none;
  font-weight: normal;
  touch-action: manipulation;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 20px;
  overflow: hidden;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    transition: all 0.2s linear;
  }
  img {
    width: 104%;
    left: -2%;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;
    position: absolute;
    filter: blur(10px);
  }

  span {
    color: #ccc;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 47px;
    opacity: 0;
    transition: all 0.2s linear;
    z-index: 3;
    position: relative;
  }

  .logo {
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0) rotate(0);
  }

  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.7);
    }
    span {
      opacity: 1;
    }
    .logo {
      left: 38%;
    }
  }
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  width: 100%;
  position: relative;
  z-index: 2;
  overflow: hidden;
  .lt-image {
    max-width: 100%;
    width: 105vw;
    img {
      min-width: -webkit-fill-available;
      min-height: 100%;
      @media (max-width: 720px) {
        width: 100%;
      }
    }
  }

  ${props => (props.bgcolor ? `background-color:${props.bgcolor};` : '')};
  &.open {
    opacity: 0;
  }
`;

export const TitleBox = styled.div`
  z-index: 3;
  position: absolute;
  right: -5px;
  top: -20px;
  min-width: 200px;
  &.open {
    opacity: 0;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const DescriptionBox = styled.div`
  background: #ffffff;
  border: 3px solid #000;
  padding: 10px;
  z-index: 3;
  position: absolute;
  left: -10px;
  bottom: -10px;
  max-width: 80%;

  &.open {
    opacity: 0;
  }

  @media (max-width: 460px) {
    display: none;
  }
`;

export const BigDescriptionBox = styled.div`
  position: absolute;
  bottom: 20%;
  right: 50px;
  width: 70vw;
  background: rgba(255, 255, 255, 0.6);
  padding: 20px;
  -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  z-index: 3;
  display: none;
  opacity: 0;
  &.open {
    opacity: 1;
    display: block;
  }
`;

export const Description = styled.h3`
  font-family: 'Architects Daughter', cursive;
  margin: 0;
  padding: 0;
  font-weight: bold;
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LogoLink = styled.span`
  &:hover {
    img {
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));
      width: calc(100% + 8px);
      margin-left: -2px;
      margin-top: -2px;
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 100px;
  z-index: 3;
  transition: all 1s;
  transform: rotate(-25deg);
  left: 0px;
  & > a {
    position: relative;
  }
  &.open {
    transform: translate(-50%, -50%) !important;
    left: 50%;
  }
  img {
    filter: drop-shadow(0px 0px 0px #000000);
    transition: all 0.5s;
    width: 100%;
    min-height: initial;
    max-height: initial;
    position: relative;
  }

  @media (max-width: 960px) {
    transform: translate(-50%, -50%) rotate(0deg);
    left: 50%;
    top: 50%;
    width: 40%;
  }
  @media (max-width: 460px) {
    width: 85%;
  }
`;

export const ViewMore = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  a {
    margin: 5px 0;
  }
  @media (max-width: 720px) {
    transform: translate(0, -10%) rotate(0deg);
    top: 55%;
    bottom: initial;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const ButtomMore = styled.button`
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
  margin: 5px 0;
  margin: 0 10px;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  margin: 5px 0;
  &:hover {
    background-color: #286090;
    border-color: #204d74;
  }

  &:active {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;
