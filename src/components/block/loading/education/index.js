import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

import { Container, EducationLoading } from './style';

const Education = ({ total, show }) => {
  const contentList = [];
  for (let i = 0; i < total; i += 1) {
    contentList.push(
      <EducationLoading className={show ? 'show' : 'hidden'} key={String(i)}>
        <ContentLoader height={144}>
          <rect x="0" y="0" rx="0" ry="0" width="144" height="144" />
          <rect x="165" y="0" rx="0" ry="0" width="400" height="45" />
          <rect x="165" y="70" rx="0" ry="0" width="400" height="10" />
          <rect x="165" y="90" rx="0" ry="0" width="400" height="10" />
          <rect x="165" y="110" rx="0" ry="0" width="400" height="10" />
        </ContentLoader>
      </EducationLoading>,
    );
  }
  return <Container>{contentList}</Container>;
};

Education.propTypes = {
  total: PropTypes.number,
  show: PropTypes.bool,
};

Education.defaultProps = {
  total: 1,
  show: true,
};

export default Education;
