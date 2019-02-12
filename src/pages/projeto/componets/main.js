import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  AgencyBox,
  AgencyDescriptionBox,
  AgencyDescription,
  ProjetDescription,
  ProjetDescriptionBox,
  TitleBox,
  Title,
  DestaqueBox,
  ProdutoDestaqueBox,
  DestaquesBox,
  FigureBox,
  NextProjectBox,
  Header,
  Row,
} from './style';

import Image from '../../../components/block/image';
import NextProject from '../../../components/project';

const Main = ({
  project: {
    background,
    url,
    logo,
    longDescription,
    agency,
    destaque,
    produtoDestaque,
    destaqueEsquerda,
    destaqueCentro,
    destaqueDireita,
    nextProject,
  },
  history,
}) => (
  <Fragment>
    <Header>
      <Image
        className="background"
        src={{
          preload: background.thumb,
          content: background.url,
        }}
      />
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          className="logo"
          src={{
            preload: logo.thumb,
            content: logo.url,
          }}
          alt={logo.name}
        />
      </a>
      <ProjetDescriptionBox>
        <ProjetDescription>
          <h2>{longDescription}</h2>
        </ProjetDescription>
      </ProjetDescriptionBox>
    </Header>
    <Container>
      <Row className="noHorizontalMargin">
        <AgencyBox>
          <AgencyDescriptionBox>
            <AgencyDescription>
              <TitleBox>
                <Title>Agencia</Title>
              </TitleBox>
              <h2>{agency.name}</h2>
              <p>{agency.description}</p>
            </AgencyDescription>
          </AgencyDescriptionBox>
          <FigureBox>
            <Image
              src={{
                preload: agency.image.thumb,
                content: agency.image.url,
              }}
              alt={agency.image.name}
            />
          </FigureBox>
        </AgencyBox>
        <DestaqueBox>
          <FigureBox>
            <Image
              src={{
                preload: destaque.thumb,
                content: destaque.url,
              }}
              alt={destaque.name}
            />
          </FigureBox>
        </DestaqueBox>
      </Row>
      <Row>
        <ProdutoDestaqueBox>
          <FigureBox>
            <Image
              src={{
                preload: produtoDestaque.thumb,
                content: produtoDestaque.url,
              }}
              alt={produtoDestaque.name}
            />
          </FigureBox>
        </ProdutoDestaqueBox>
      </Row>
      <Row className="topMargin noHorizontalMargin">
        <DestaquesBox>
          <FigureBox>
            <Image
              src={{
                preload: destaqueEsquerda.thumb,
                content: destaqueEsquerda.url,
              }}
              alt={destaqueEsquerda.name}
            />
          </FigureBox>
        </DestaquesBox>
        <DestaquesBox>
          <FigureBox>
            <Image
              src={{
                preload: destaqueCentro.thumb,
                content: destaqueCentro.url,
              }}
              alt={destaqueCentro.name}
            />
          </FigureBox>
        </DestaquesBox>
        <DestaquesBox>
          <FigureBox>
            <Image
              src={{
                preload: destaqueDireita.thumb,
                content: destaqueDireita.url,
              }}
              alt={destaqueDireita.name}
            />
          </FigureBox>
        </DestaquesBox>
      </Row>
      <NextProjectBox>
        <NextProject project={nextProject} history={history} simple nextProjectLink />
      </NextProjectBox>
    </Container>
  </Fragment>
);

Main.propTypes = {
  history: PropTypes.shape().isRequired,
  project: PropTypes.shape({
    name: PropTypes.string,
    longDescription: PropTypes.string,
    backgroundColor: PropTypes.string,
    url: PropTypes.string,
    background: PropTypes.shape({
      url: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
    }),
    logo: PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
    }),
    destaques: PropTypes.shape({
      princiapal: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
      }),
      produto: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
      }),
      esquerda: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
      }),
      centro: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
      }),
      direita: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
      }),
    }),
    agency: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default Main;
