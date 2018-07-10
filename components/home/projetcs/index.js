import React from "react";
import Link from "next/link";
import { Col } from "react-grid-system";

import Basic from "../../block/basic";
import Buttom from "../../buttons/outline";
import Project from "../../project";

import { Container, Row, Center } from "./style";

const Projects = () => (
  <Container>
    <Row>
      <Col lg={3}>
        <Project />
      </Col>
      <Col lg={6}>
        <Project />
      </Col>
      <Col lg={3}>
        <Project />
      </Col>
      <Col lg={5}>
        <Project />
      </Col>
      <Col lg={5}>
        <Project />
      </Col>
      <Col lg={2}>
        <Project />
      </Col>
      <Col lg={4}>
        <Project />
      </Col>
      <Col lg={3}>
        <Project />
      </Col>
      <Col lg={4}>
        <Project />
      </Col>
    </Row>
    <Basic reverse={true} shadow={false}>
      <h3>Quer saber mais? </h3>
      <p>Dê uma olhadinha nos projetos que participei</p>
      <Center>
        <Buttom href="/projetos">Projetos</Buttom>
        <Buttom href="#">Curriculo</Buttom>
      </Center>
    </Basic>
  </Container>
);

export default Projects;
