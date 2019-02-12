import styled, { keyframes } from 'styled-components';

const backgroundColor = keyframes`
  0% { background-color: #fff; }
  100% {
    background-color:  ${props => (props.backgroundColor ? props.backgroundColor : '#fff')};
  }
`;

export const Main = styled.main`
  background: ${props => (props.backgroundColor ? props.backgroundColor : '#fff')};
  animation: ${backgroundColor} 1.5s;
  min-height: calc(100vh - 100px);
`;
