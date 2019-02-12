import React from 'react';
import PropTypes from 'prop-types';

import Projects from '../../components/lists/projetcs';
import Back from '../../components/block/back';
import { Main } from './style';

const Projetos = ({ history }) => (
  <Main>
    <Back to="/" text="Home" history={history} />
    <Projects simple={false} history={history} order="ASC" />
  </Main>
);

Projetos.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Projetos;
