import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  flex: 1;
  height: 100%;
`;

export const ContentBox = styled.div`
  background: #ffffff;
  border: 3px solid #000;
  padding: 10px;
  flex: 1;
  position: relative;
  margin: 50px 15px 50px 35px;
  padding-top: 35px;
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
  position: absolute;
  left: -10px;
  top: -10px;
  border: 3px solid #000;
  padding: 0px 20px 0 10px;
`;

export const Title = styled.h1`
  font-family: "Bangers", cursive;
  font-size: 30px;
  margin: 0;
  color: #000;
  line-height: 100%;
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

export const Text = styled.p`
  font-size: 20px;
  margin: 15px;
`;

export const Image = styled.img`
  margin: 50px 25px 50px 15px;
`;
