import React from 'react';
import PropTypes from 'prop-types';

import { Invisibile } from './style';

const InvisibileButtom = ({ className, content, loadNexPage }) => (
  <Invisibile onClick={loadNexPage} className={className}>
    {content}
  </Invisibile>
);

InvisibileButtom.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  loadNexPage: PropTypes.func.isRequired,
};

export default InvisibileButtom;
