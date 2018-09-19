import React from "react";
import Projects from "../../components/lists/projetcs";
import Back from "../../components/block/back";
import { Main } from "./style";

const Projetos = () => (
  <Main>
    <Back to="/" text="Home" />
    <Projects simple={false} order="desc" />
  </Main>
);

export default Projetos;
