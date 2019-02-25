import styled from 'styled-components';
import Moment from 'react-moment';

export const Container = styled.div`
  min-width: 515px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 20px 15px 0px 15px;
  padding: 20px 0 40px 0;
  transition: opacity 1s;
  &.hidden {
    opacity: 0;
  }
  @media (max-width: 1105px) {
    border-bottom: 1px solid #ccc;
    min-width: calc(100% - 40px);
    align-items: center;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-direction: row;
  @media (max-width: 1105px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 420px) {
    align-items: center;
    justify-content: flex-start;
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
  @media (max-width: 1105px) {
    flex: initial;
  }
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
  padding: 0px 20px 0 10px;
  margin-top: 10px;
  min-width: 250px;
  @media (max-width: 420px) {
    min-width: 100%;
  }
`;

export const Role = styled.h3`
  margin-top: 20px;
  font-size: 30px;
  @media (max-width: 420px) {
    min-width: 100%;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 420px) {
    min-width: 100%;
    padding: 0px 15px;
  }
`;

export const DateBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  min-width: 150px;
  @media (max-width: 420px) {
    min-width: 100%;
    padding: 0px 15px;
  }
`;

export const DateText = styled.p`
  color: #444;
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
`;

export const Date = styled(Moment)`
  color: #444;
  font-size: 18px;
  font-family: 'PT Sans Narrow', sans-serif;
  margin-left: 5px;
  padding: 0 5px;
  position: relative;
  flex: 1;
  text-align: center;
  &::after {
    content: '';
    border-bottom: 1px solid #444;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 3px;
  }
`;
export const Atual = styled.p`
  color: #444;
  font-size: 18px;
  font-family: 'PT Sans Narrow', sans-serif;
  margin-left: 5px;
  padding: 0 5px;
  position: relative;
  text-align: center;
`;
