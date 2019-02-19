import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  flex: 1;
  height: 100%;
  margin-left: -15px;
  margin-right: -15px;
`;
export const ExperienciaBox = styled.div`
  flex: 1;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 50px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-direction: row;
  @media (max-width: 420px) {
    align-items: center;
    flex-direction: column;
  }
`;
export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 15px;
  @media (max-width: 420px) {
    margin: 0px;
    padding: 0 10px;
  }
`;

export const Logo = styled.img`
  width: 123px;
  height: 123px;
  border: 1px solid #000;
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
  border: 3px solid #000;
  padding: 0px 20px 0 10px;
  margin-top: 10px;
`;

export const Title = styled.h2`
  font-family: 'Bangers', cursive;
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

export const Role = styled.h3`
  margin-top: 20px;
  font-size: 30px;
`;

export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Date = styled.p`
  color: #444;
  font-size: 20px;
  strong {
    margin-right: 5px;
  }
`;
