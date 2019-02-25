import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50px;
  top: 15px;
  width: calc(100% - 100px);
  display: flex;
  flex-wrap: wrap;
`;

export const EducationLoading = styled.div`
  min-width: 500px;
  flex: 1;
  position: relative;
  width: 100%;
  margin: 0 30px;
  padding: 30px 0;
  &.hidden {
    opacity: 0;
  }
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
