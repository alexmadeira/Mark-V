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
  margin: 0 -15px;
  padding: 15px 50px;
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const EducationBox = styled.div`
  min-width: 500px;
  flex: 1;
  display: flex;
  margin: 0 30px;
  padding: 30px 0;
  @media (max-width: 1189px) {
    border-bottom: 1px solid #ccc;
    min-width: 100%;
    margin: 0;
    padding-left: 30px;
    padding-right: 30px;
    &:last-child {
      border: none;
    }
  }

  @media (max-width: 600px) {
    border-bottom: 1px solid #ccc;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageBox = styled.figure`
  margin-right: 30px;
`;

export const Imagem = styled.img`
  border: 1px solid #000;
`;

export const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 540px) {
    margin-top: 30px;
  }
`;
export const TitleBox = styled.div`
  max-width: 400px;
  margin-bottom: 30px;
  @media (max-width: 540px) {
    max-width: 100%;
  }
`;

export const Text = styled.p``;
