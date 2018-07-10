import React from "react";
import Link from "next/link";
import {
  Container,
  Preview,
  TitleBox,
  Title,
  DescriptionBox,
  Description,
  Logo
} from "./style";

const Project = () => (
  <Container bgcolor="#f00">
    <Preview>
      <img
        src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/adnews/alex-madeira-adnews-preview.jpg"
        alt="preview"
      />
    </Preview>
    <Logo>
      <Link href="/projeto?id=1" as="/projeto/projeto-nome">
        <a>
          <img
            src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/adnews/alex-madeira-adnews-logo.png"
            alt="Logo"
          />
        </a>
      </Link>
    </Logo>
    <TitleBox>
      <Title>nome do projeto</Title>
    </TitleBox>
    <DescriptionBox>
      <Description>
        Descrição descrição descrição descrição descrição descrição descrição
        descrição descrição descrição descrição
      </Description>
    </DescriptionBox>
  </Container>
);

export default Project;
