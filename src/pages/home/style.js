import styled from "styled-components";

export const Main = styled.main`
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
    margin-top: -120px;
    position: relative;
    left: 50%;
  }
`;

export const A = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 20px;
  padding: 10px 47px;
  margin: 10px;
  border-radius: 5px;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
`;
export const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-wrap: wrap;
`;

export const FigureBox = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
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
