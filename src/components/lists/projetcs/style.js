import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #ffffff;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  &.respiro {
    padding-top: 60px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
`;
