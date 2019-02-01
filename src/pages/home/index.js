import React from "react";
import Banner from "../../components/banner";
import Projects from "../../components/lists/projetcs";
import Basic from "../../components/block/basic";
import Buttom from "../../components/buttons/outline";

import "../../styles/global";
import { Main, Inclina, Center, A, FigureBox } from "./style";

const Home = () => (
  <Main>
    <Banner />
    <Inclina>
      <Projects limit={6} order="asc" simple={true} />
      <Basic reverse={true} shadow={false}>
        <h3>Quer saber mais? </h3>
        <p>Dê uma olhadinha nos projetos que participei</p>
        <Center>
          <Buttom to="/projetos">Projetos</Buttom>
          <A
            href="https://trampos.co/alexmadeira"
            target="_blank"
            rel="noopener noreferrer"
          >
            Curriculo
          </A>
        </Center>
      </Basic>
    </Inclina>
    <Basic regular={true}>
      <h2 className="title">
        Layout responsivo, fluido, mobile e todas as variacões possíveis
      </h2>
      <FigureBox>
        <img
          src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/Responsive.jpg"
          alt="responsive"
        />
      </FigureBox>
    </Basic>
    <Basic>
      <h3>Gostou do que viu?</h3>
      <p>Entre em contato, ou não</p>
      <div>
        <A
          href="mailto:alex@alexmadeira.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato
        </A>
      </div>
    </Basic>
  </Main>
);

export default Home;
