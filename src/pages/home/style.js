import styled from "styled-components";

export const Main = styled.div`
  background: #ffffff;
  min-height: calc(100vh - 100px);
`;

export const Inclina = styled.div`
  -webkit-box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);
  -moz-box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);
  box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);

  @media (min-width: 992px) {
    transform: translate(-50%, 0) rotate(-5deg);
    width: 120vw;
    margin-top: -100px;
    position: relative;
    left: 50%;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #ffffff;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  width: calc(100vw - 30px);
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;
