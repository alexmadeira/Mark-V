import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50px;
  top: 15px;
  width: calc(100% - 100px);
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
`;

export const AgencyLoading = styled.div`
  min-width: 500px !important;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 50px;

  &.hidden {
    opacity: 0;
  }
`;
