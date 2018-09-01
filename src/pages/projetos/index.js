import React from "react";
import Projects from "../../components/lists/projetcs";
import Back from "../../components/block/back";
import { Main } from "./style";

const Projetos = () => (
  <Main>
    <Back to="/" />
    <Projects simple={false} />
  </Main>
);

export default Projetos;
