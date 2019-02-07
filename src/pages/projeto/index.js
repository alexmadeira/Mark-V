import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Creators as ProjectAtions } from "../../store/ducks/project";

import Back from "../../components/block/back";
import Image from "../../components/block/image";
import NextProject from "../../components/project";

import {
  Main,
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
  Row
} from "./style";

class Projeto extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    project: PropTypes.shape({
      name: PropTypes.string,
      longDescription: PropTypes.string,
      backgroundColor: PropTypes.string,
      url: PropTypes.string,
      background: PropTypes.shape({
        url: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired
      }),
      logo: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired
      }),
      destaques: PropTypes.shape({
        princiapal: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          thumb: PropTypes.string.isRequired
        }),
        produto: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          thumb: PropTypes.string.isRequired
        }),
        esquerda: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          thumb: PropTypes.string.isRequired
        }),
        centro: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          thumb: PropTypes.string.isRequired
        }),
        direita: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          thumb: PropTypes.string.isRequired
        })
      }),
      agency: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          thumb: PropTypes.string.isRequired
        })
      })
    })
  };

  requestProject() {
    const { slug } = this.props.match.params;
    this.props.getProjectRequest(slug);
  }

  componentDidMount() {
    this.requestProject();
  }

  render() {
    const { history } = this.props;
    if (this.props.loading) return null;

    return (
      <Main backgroundColor={this.props.project.backgroundColor}>
        <Back to={"/projetos"} text="Projetos" history={history} />
        {this.props.project.id && (
          <MainContent
            project={this.props.project}
            nextProject={this.props.nextProject}
          />
        )}
      </Main>
    );
  }
}

const MainContent = ({ project }) => {
  return (
    <Fragment>
      <Header>
        <Image
          className="background"
          src={{
            preload: project.background.thumb,
            content: project.background.url
          }}
        />
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Image
            className="logo"
            src={{
              preload: project.logo.thumb,
              content: project.logo.url
            }}
            alt={project.logo.name}
          />
        </a>
        <ProjetDescriptionBox>
          <ProjetDescription>
            <h2>{project.longDescription}</h2>
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
                <h2>{project.agency.name}</h2>
                <p>{project.agency.description}</p>
              </AgencyDescription>
            </AgencyDescriptionBox>
            <FigureBox>
              <Image
                src={{
                  preload: project.agency.image.thumb,
                  content: project.agency.image.url
                }}
                alt={project.agency.image.name}
              />
            </FigureBox>
          </AgencyBox>
          <DestaqueBox>
            <FigureBox>
              <Image
                src={{
                  preload: project.destaque.thumb,
                  content: project.destaque.url
                }}
                alt={project.destaque.name}
              />
            </FigureBox>
          </DestaqueBox>
        </Row>
        <Row>
          <ProdutoDestaqueBox>
            <FigureBox>
              <Image
                src={{
                  preload: project.produtoDestaque.thumb,
                  content: project.produtoDestaque.url
                }}
                alt={project.produtoDestaque.name}
              />
            </FigureBox>
          </ProdutoDestaqueBox>
        </Row>
        <Row className="topMargin noHorizontalMargin">
          <DestaquesBox>
            <FigureBox>
              <Image
                src={{
                  preload: project.destaqueEsquerda.thumb,
                  content: project.destaqueEsquerda.url
                }}
                alt={project.destaqueEsquerda.name}
              />
            </FigureBox>
          </DestaquesBox>
          <DestaquesBox>
            <FigureBox>
              <Image
                src={{
                  preload: project.destaqueCentro.thumb,
                  content: project.destaqueCentro.url
                }}
                alt={project.destaqueCentro.name}
              />
            </FigureBox>
          </DestaquesBox>
          <DestaquesBox>
            <FigureBox>
              <Image
                src={{
                  preload: project.destaqueDireita.thumb,
                  content: project.destaqueDireita.url
                }}
                alt={project.destaqueDireita.name}
              />
            </FigureBox>
          </DestaquesBox>
        </Row>
        <NextProjectBox>
          <NextProject
            project={project.nextProject}
            simple={true}
            nextProjectLink={true}
          />
        </NextProjectBox>
      </Container>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  project: state.project.data,
  loading: state.project.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProjectAtions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projeto);
