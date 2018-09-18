import styled from "styled-components";

export const Main = styled.div`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "#ffffff"};
  min-height: calc(100vh - 100px);
`;
export const Header = styled.header`
  height: 90vh;
  flex: 1;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const ProjetBackground = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  max-width: 100%;
`;

export const Logo = styled.img`
  margin-top: 100px;
  -webkit-transform: translateX(0) rotate(-25deg);
  -moz-transform: translateX(0) rotate(-25deg);
  -o-transform: translateX(0) rotate(-25deg);
  transform: translateX(0) rotate(-25deg);
  transition: all 0.5s;
  filter: drop-shadow(0px 0px 10px #000000);
  &:hover {
    -webkit-transform: translateX(0) rotate(0deg);
    -moz-transform: translateX(0) rotate(0deg);
    -o-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    filter: drop-shadow(0px 20px 10px #000000);
  }
`;

export const ProjetDescriptionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;

  position: relative;
  height: 100%;
`;

export const ProjetDescription = styled.div`
  margin-bottom: 150px;
  margin-right: 15px;
  background: #fff;
  border: 3px solid #000;
  padding: 10px;
  max-width: 500px;
  flex: 1;
  width: 100%;
  h2 {
    font-size: 25px;
    font-weight: normal;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  padding: 15px;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  width: calc(100vw - 15px);
  position: relative;
  left: -15px;
  & > * {
    margin: 0 15px;
    max-height: 400px;
  }
`;
export const AgencyBox = styled.div`
  display: flex;
  width: 100%;
  min-width: 400px;
  flex: 1;
  position: relative;
  margin-bottom: 30px;
  height: 400px;
  figure {
    max-width: calc(100% - 20px);
    display: flex;
    position: absolute;
    height: 100%;
    justify-content: center;
    align-items: center;
    img {
      max-width: initial;
      max-height: 100%;
    }
  }
`;
export const AgencyDescriptionBox = styled.div``;
export const AgencyDescription = styled.div`
  background: #fff;
  border: 3px solid #000;
  padding: 10px;
  position: absolute;
  right: 0;
  top: -50px;
  width: 70%;
  z-index: 2;
  background: #ffffff;
  background: -moz-linear-gradient(
    top,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, #ffffff),
    color-stop(62%, #ffffff),
    color-stop(100%, rgba(255, 255, 255, 0.65))
  );
  background: -webkit-linear-gradient(
    top,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  background: -o-linear-gradient(
    top,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  background: -ms-linear-gradient(
    top,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0);

  h2 {
    margin-top: 10px;
    text-align: left;
    border-bottom: 1px solid #000;
  }
`;
export const DestaqueBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  min-width: 1000px;
  flex: 1;
  position: relative;
  figure {
    max-width: 100%;
  }
`;
export const FigureBox = styled.figure`
  border: 1px solid #ffffff;
  height: ${props => (props.height ? `${props.height}px` : "auto")};
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  flex: 1;
  img {
    max-width: 100%;
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
  right: -20px;
  top: -20px;
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
  border: none !important;
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
