import React from 'react';
import ContentLoader from 'react-content-loader';

import { Container } from './style';

const Agency = ({ total }) => {
  const contentList = [];
  for (let i = 0; i < total; i += 1) {
    contentList.push(
      <Container className="teste">
        <ContentLoader height={200}>
          <rect x="0" y="0" rx="0" ry="0" width="90" height="90" />
          <rect x="103" y="5" rx="0" ry="0" width="150" height="40" />
          <rect x="103" y="65" rx="0" ry="0" width="300" height="20" />
          <rect x="0" y="100" rx="0" ry="0" width="400" height="10" />
          <rect x="0" y="120" rx="0" ry="0" width="400" height="10" />
          <rect x="0" y="140" rx="0" ry="0" width="400" height="10" />
          <rect x="0" y="165" rx="0" ry="0" width="200" height="10" />
          <rect x="0" y="185" rx="0" ry="0" width="200" height="10" />
        </ContentLoader>
      </Container>,
    );
  }
  return contentList;
};

export default Agency;
