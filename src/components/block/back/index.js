import React from "react";

import { Container, Arrow } from "./style";
const Back = ({ to, text }) => (
  <Container>
    <p>
      <Arrow to={to} className="animated-arrow">
        <span className="the-arrow -left">
          <span className="shaft" />
        </span>
        <span className="main">
          <span className="text">{text ? text : "Voltar"}</span>
          <span className="the-arrow -right">
            <span className="shaft" />
          </span>
        </span>
      </Arrow>
    </p>
  </Container>
);

export default Back;
