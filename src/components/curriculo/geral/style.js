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
  flex: 1;
`;

export const TitleBox = styled.div`
  max-width: 420px;
  margin-top: -58px;
  margin-left: -13px;
  position: relative;
  z-index: 2;

  @media (max-width: 1300px) {
    margin-top: -75px;
  }
  @media (max-width: 500px) {
    width: calc(100% + 26px);
  }
`;
export const Text = styled.p`
  font-size: 20px;
  margin: 15px;
`;

export const ImageBox = styled.figure`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  padding-top: 35px;
  @media (max-width: 1300px) {
    height: auto;
    width: 100%;
    position: relative;
  }
`;

export const Image = styled.img`
  margin: 0;
  width: 100%;
  right: 0%;
  @media (max-width: 1300px) {
    mask-image: linear-gradient(black 50%, transparent 100%);
  }
`;
