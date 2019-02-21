import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Border, Background, Text,
} from './style';

const Title = ({ children, type }) => (
  <Container>
    <Text>{children}</Text>
    <Border className={type}>
      <Text>{children}</Text>
      <Background className={type}>
        <Text>{children}</Text>
      </Background>
    </Border>
  </Container>
);

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  type: PropTypes.string,
};

Title.defaultProps = {
  type: '',
};

export default Title;
