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
`;

export const ChartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 15px 15px 50px 15px;
  padding-bottom: 50px;
  flex-direction: column;
  min-width: 500px;
  max-width: calc(100% - 30px);
  position: relative;
  @media (max-width: 1060px) {
    border-bottom: 1px solid #ccc;
    min-width: auto;
  }
`;

export const ChartTitle = styled.h2`
  margin-top: 10px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 30px;
`;
