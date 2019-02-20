import React from 'react';
import PropTypes from 'prop-types';

import 'moment-timezone';

import {
  Container,
  Logo,
  TitleBox,
  Title,
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
  agency: {
    name,
    role,
    roleDescription,
    logo: { url },
    enter,
    exit,
  },
}) => (
  <Container>
    <Info>
      <Logo src={url} alt={name} />
      <InfoBox>
        <TitleBox>
          <Title>{name}</Title>
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
  agency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    roleDescription: PropTypes.string.isRequired,
    logo: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    enter: PropTypes.instanceOf(Date).isRequired,
    exit: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default Experiencia;
