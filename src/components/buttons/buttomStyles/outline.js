import React from 'react';
import PropTypes from 'prop-types';

import { Outline } from './style';

const OutlineButtom = ({ className, content, loadNexPage }) => (
  <Outline onClick={loadNexPage} className={className}>
    {content}
  </Outline>
);

OutlineButtom.defaultProps = {
  className: 'btn-default',
};

OutlineButtom.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  loadNexPage: PropTypes.func.isRequired,
};

export default OutlineButtom;
