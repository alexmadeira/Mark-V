import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Creators as ProjectAtions } from "../../store/ducks/project";

import Back from "../../components/block/back";

import {
  Main,
  Container,
  AgencyBox,
  AgencyDescriptionBox,
  AgencyDescription,
  Logo,
  ProjetDescription,
  ProjetDescriptionBox,
  ProjetBackground,
  TitleBox,
  Title,
  DestaqueBox,
  ProdutoDestaqueBox,
  DestaquesBox,
  FigureBox,
  Header,
  Row
} from "./style";

class Projeto extends Component {
  static propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number,
      slug: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      longDescription: PropTypes.string,
      backgroundColor: PropTypes.string,
      url: PropTypes.string.isRequired,
      preview: PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string
      }),
      background: PropTypes.shape({
        url: PropTypes.string
      }),
      logo: PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string
      }),
      destaques: PropTypes.shape({
        princiapal: PropTypes.shape({
          url: PropTypes.string,
          name: PropTypes.string
        }),
        produto: PropTypes.shape({
          url: PropTypes.string,
          name: PropTypes.string
        }),
        esquerda: PropTypes.shape({
          url: PropTypes.string,
          name: PropTypes.string
        }),
        centro: PropTypes.shape({
          url: PropTypes.string,
          name: PropTypes.string
        }),
        direita: PropTypes.shape({
          url: PropTypes.string,
          name: PropTypes.string
        })
      }),
      agency: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        images: PropTypes.shape({
          url: PropTypes.string,
          name: PropTypes.string
        })
      })
    })
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.getProjectRequest(slug);
  }

  render() {
    return (
      <Main backgroundColor={this.props.project.backgroundColor}>
        <Back to={"/projetos"} text="Projetos" />
        {this.props.project.id && <MainContent project={this.props.project} />}
      </Main>
    );
  }
}

const MainContent = ({ project }) => {
  return (
    <Fragment>
      <Header>
        <ProjetBackground src={project.background.url} />
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Logo src={project.logo.url} alt={project.logo.name} />
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
              <img
                src={project.agency.image.url}
                alt={project.agency.image.name}
              />
            </FigureBox>
          </AgencyBox>
          <DestaqueBox>
            <FigureBox>
              <img src={project.destaque.url} alt={project.destaque.name} />
            </FigureBox>
          </DestaqueBox>
        </Row>
        <Row>
          <ProdutoDestaqueBox>
            <FigureBox>
              <img
                src={project.produtoDestaque.url}
                alt={project.produtoDestaque.name}
              />
            </FigureBox>
          </ProdutoDestaqueBox>
        </Row>
        <Row className="topMargin noHorizontalMargin">
          <DestaquesBox>
            <FigureBox>
              <img
                src={project.destaqueEsquerda.url}
                alt={project.destaqueEsquerda.name}
              />
            </FigureBox>
          </DestaquesBox>
          <DestaquesBox>
            <FigureBox>
              <img
                src={project.destaqueCentro.url}
                alt={project.destaqueCentro.name}
              />
            </FigureBox>
          </DestaquesBox>
          <DestaquesBox>
            <FigureBox>
              <img
                src={project.destaqueDireita.url}
                alt={project.destaqueDireita.name}
              />
            </FigureBox>
          </DestaquesBox>
        </Row>
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
