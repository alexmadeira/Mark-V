import React from "react";
import Projects from "../../components/lists/projetcs";
import Back from "../../components/block/back";
import { Main } from "./style";

const Projetos = ({ history }) => (
  <Main>
    <Back to="/" text="Home" history={history} />
    <Projects simple={false} history={history} order="ASC" />
  </Main>
);

export default Projetos;
