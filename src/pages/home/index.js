import React from "react";
import Banner from "../../components/banner";
import Projects from "../../components/lists/projetcs";
import Basic from "../../components/block/basic";
import Buttom from "../../components/buttons/outline";

import "../../styles/global";
import { Main, Inclina, Center } from "./style";

const Home = () => (
  <Main>
    <Banner />
    <Inclina>
      <Projects limit={6} simple={true} />
      <Basic reverse={true} shadow={false}>
        <h3>Quer saber mais? </h3>
        <p>Dê uma olhadinha nos projetos que participei</p>
        <Center>
          <Buttom to="/projetos">Projetos</Buttom>
          <Buttom to="/curriculo">Curriculo</Buttom>
        </Center>
      </Basic>
    </Inclina>
    <Basic regular={true}>
      <h2 className="title">
        Layout responsivo, fluido, mobile e todas as variacões possíveis
      </h2>
      <figure>
        <img
          src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/Responsive.jpg"
          alt="responsive"
        />
      </figure>
    </Basic>
    <Basic>
      <h3>Gostou do que viu?</h3>
      <p>Entre em contato, ou não</p>
      <div>
        <Buttom to="#">Contato</Buttom>
      </div>
    </Basic>
  </Main>
);

export default Home;
