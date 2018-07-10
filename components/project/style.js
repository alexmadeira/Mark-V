import styled from "styled-components";

export const Container = styled.div`
  background: ${props => (props.bgcolor ? props.bgcolor : "#FFFFFF")};
  border: 1px solid #000;
  flex: 1;
  max-width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 430px;
  position: relative;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  position: relative;
  z-index: 2;
  overflow: hidden;
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

export const Logo = styled.div`
  position: absolute;
  top: 100px;
  z-index: 3;
  transition: all 1s;
  transform: rotate(-25deg);
  left: 0px;
  img {
    width: 100%;
    min-height: initial;
    max-height: initial;
  }
`;
