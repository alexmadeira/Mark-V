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
        <a
          href="https://www.facebook.com/alex.c.madeira"
          target="_blank"
          className="facebook"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/alex.c.madeira/"
          target="_blank"
          className="instagram"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="https://www.instagram.com/alexcmadeira/"
          target="_blank"
          className="instagram"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
      </li>
    </Social>
  </Container>
);

export default Footer;
