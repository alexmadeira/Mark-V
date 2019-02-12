import React from 'react';
import PropTypes from 'prop-types';

import { Solid } from './style';

const SolidButtom = ({ className, content, loadNexPage }) => (
  <Solid onClick={loadNexPage} className={className}>
    {content}
  </Solid>
);

SolidButtom.defaultProps = {
  className: 'btn-default',
};

SolidButtom.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  loadNexPage: PropTypes.func.isRequired,
};

export default SolidButtom;
