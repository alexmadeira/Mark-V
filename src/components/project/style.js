import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const entrada = keyframes`
  0% { top: 200px; opacity: 0; }
  40% { top: 200px; }  
  50% { opacity: 0; }  
  100% { top: 0px; opacity: 1; }
`;

export const Container = styled.div`
  background: ${props => (props.bgcolor ? props.bgcolor : "#FFFFFF")};
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
  ${props =>
    props.backgroundImage
      ? `background-image: url(${props.backgroundImage});`
      : ""};

  ${props =>
    props.backgroundColor ? `background-color:${props.backgroundColor};` : ""};

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
  }
  img {
    max-width: initial !important;
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
      @media (max-width: 720px) {
        width: 100%;
      }
    }
  }

  ${props =>
    props.backgroundColor ? `background-color:${props.backgroundColor};` : ""};
  &.open {
    opacity: 0;
  }
`;

export const TitleBox = styled.div`
  background: #ed942f;
  background: -moz-linear-gradient(left, #ed942f 0%, #ffd702 100%);
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, #ed942f),
    color-stop(100%, #ffd702)
  );
  background: -webkit-linear-gradient(left, #ed942f 0%, #ffd702 100%);
  background: -o-linear-gradient(left, #ed942f 0%, #ffd702 100%);
  background: -ms-linear-gradient(left, #ed942f 0%, #ffd702 100%);
  background: linear-gradient(to right, #ed942f 0%, #ffd702 100%);
  z-index: 3;
  position: absolute;
  right: 0px;
  top: 0px;
  border: 3px solid #000;
  padding: 0px 20px 0 10px;
  &.open {
    opacity: 0;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-family: "Bangers", cursive;
  font-size: 30px;
  margin: 0;
  color: #000;
  line-height: 80%;
  float: left;
  padding-top: 10px;
  &:first-letter {
    color: #f00;
    text-shadow: 3px 4px 2px #000000;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: 8px;
    margin-top: -14px;
    padding-bottom: 20px;
    float: left;
    text-transform: uppercase;
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
  font-family: "Architects Daughter", cursive;
  margin: 0;
  padding: 0;
  font-weight: bold;
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const LogoLink = styled(Link)`
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

export const Buttom = styled.button`
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

export const ButtomLink = styled(Link)`
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
`;
