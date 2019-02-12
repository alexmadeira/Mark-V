import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './style';

const Basic = ({
  regular, reverse, shadow, children,
}) => (
  <Container regular={regular} reverse={reverse} shadow={shadow}>
    {children}
  </Container>
);

Basic.defaultProps = {
  regular: false,
  reverse: false,
  shadow: true,
};
Basic.propTypes = {
  regular: PropTypes.bool,
  reverse: PropTypes.bool,
  shadow: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Basic;
