import React from 'react';
import PropTypes from 'prop-types';

import Buttom from '../../buttons';

import { Container, Arrow, ArrowBox } from './style';

const Back = ({ text, to, history }) => (
  <Container>
    <ArrowBox>
      <Buttom to={to} history={history} type="invisibile">
        <Arrow className="animated-arrow">
          <span className="the-arrow -left">
            <span className="shaft" />
          </span>
          <span className="main">
            <span className="text">{text || 'Voltar'}</span>
            <span className="the-arrow -right">
              <span className="shaft" />
            </span>
          </span>
        </Arrow>
      </Buttom>
    </ArrowBox>
  </Container>
);

Back.propTypes = {
  text: PropTypes.string.isRequired,
  history: PropTypes.shape().isRequired,
  to: PropTypes.string.isRequired,
};

export default Back;
