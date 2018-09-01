import React from "react";

import { Container, Social } from "./style";
const Footer = () => (
  <Container>
    <p>
      © 2016 - 2018 Portfólio Alex Madeira. Feito pela mão direita de um canhoto
      :)
    </p>
    <Social>
      <li>
        <a href="" className="facebook">
          <i className="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a href="" className="instagram">
          <i className="fab fa-instagram" />
        </a>
      </li>
    </Social>
  </Container>
);

export default Footer;
