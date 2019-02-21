import styled from 'styled-components';

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
  padding: 0px 15px;
`;

export const ContentBox = styled.div`
  background: #ffffff;
  border: 3px solid #000;
  flex: 1;
  position: relative;
  margin: 50px 15px 50px 35px;
  min-width: 700px;
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 700px) {
    min-width: 100%;
    margin: 30px 15px;
  }
`;

export const TextContent = styled.div`
  padding: 35px 10px 10px 10px;
`;

export const TitleBox = styled.div`
  max-width: 400px;
  margin-top: -58px;
  margin-left: -13px;
  position: relative;
  z-index: 2;
  @media (max-width: 1300px) {
    margin-top: -75px;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  margin: 15px;
`;

export const Image = styled.img`
  margin: 0;
  flex: 1;
  height: 100%;
  clip-path: polygon(0 100%, 100% -200%, 100% 100%, 0% 100%);
  position: absolute;
  right: 0%;
  @media (max-width: 1300px) {
    height: auto;
    width: 100%;
    clip-path: initial;
    position: relative;
  }
`;
