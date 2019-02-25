import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../../block/title';

import {
  Container,
  Logo,
  TitleBox,
  Role,
  Info,
  InfoBox,
  Description,
  DateBox,
  DateText,
  Date,
  Atual,
} from './style';

const Experiencia = ({
  className,
  agency: {
    name,
    role,
    roleDescription,
    logo: { url },
    enter,
    exit,
  },
}) => (
  <Container className={className}>
    <Info>
      <Logo src={url} alt={name} />
      <InfoBox>
        <TitleBox>
          <Title type="reverse">{name}</Title>
        </TitleBox>
        <Role>{role}</Role>
      </InfoBox>
    </Info>
    <Description>{roleDescription}</Description>
    <DateBox>
      <DateText>Entrada:</DateText>
      <Date format="MM/YYYY" add={{ days: 1 }}>
        {enter}
      </Date>
    </DateBox>
    <DateBox>
      <DateText>Saída:</DateText>
      {exit === null ? (
        <Atual>Atual</Atual>
      ) : (
        <Date format="MM/YYYY" add={{ days: 1 }}>
          {exit}
        </Date>
      )}
    </DateBox>
  </Container>
);

Experiencia.propTypes = {
  className: PropTypes.string,
  agency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    roleDescription: PropTypes.string.isRequired,
    logo: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    enter: PropTypes.string.isRequired,
    exit: PropTypes.string,
  }).isRequired,
};
Experiencia.defaultProps = {
  className: 'show',
};

export default Experiencia;
