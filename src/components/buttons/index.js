import React from 'react';

import PropTypes from 'prop-types';
import nprogress from 'nprogress';

import SolidButtom from './buttomStyles/solid';
import InvisibileButtom from './buttomStyles/invisibile';
import OutlineButtom from './buttomStyles/outline';

const nexPage = ({ history, to }) => {
  nprogress.start();
  document.body.classList.remove('loadded');
  setTimeout(() => {
    history.push(to);
    history.go();
  }, 2000);
};

const Buttons = ({
  type, className, children, history, to,
}) => {
  switch (type) {
    case 'solid':
      return (
        <SolidButtom
          className={className}
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
    case 'invisibile':
      return (
        <InvisibileButtom
          className={className}
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
    case 'outline':
      return (
        <OutlineButtom
          className={className}
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
    default:
      return (
        <SolidButtom
          className={className}
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
  }
};

Buttons.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  to: PropTypes.string.isRequired,
  history: PropTypes.shape().isRequired,
};

Buttons.defaultProps = {
  className: 'btn-default',
  children: '',
};

export default Buttons;
