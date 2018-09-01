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
  FigureBox,
  Header,
  Row
} from "./style";

class Projeto extends Component {
  static propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      images: PropTypes.shape({
        preview: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
        background: PropTypes.shape({
          url: PropTypes.string.isRequired,
          backgroundColor: PropTypes.string.isRequired
        }).isRequired,
        logo: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
        destaques: PropTypes.shape({
          princiapal: PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
          }).isRequired,
          produto: PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
          }).isRequired,
          esquerda: PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
          }).isRequired,
          centro: PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
          }).isRequired,
          direita: PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired,

      agency: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    })
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.getProjectRequest(slug);
  }

  render() {
    return (
      <Main>
        <Back to={"/projetos"} text="Projetos" />
        {this.props.project && <MainContent project={this.props.project} />}
      </Main>
    );
  }
}

const MainContent = ({ project }) => {
  return (
    <Fragment>
      <Header>
        <ProjetBackground src={project.images.background.url} />
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Logo src={project.images.logo.url} alt={project.images.logo.name} />
        </a>
        <ProjetDescriptionBox>
          <ProjetDescription>
            <h2>{project.longDescription}</h2>
          </ProjetDescription>
        </ProjetDescriptionBox>
      </Header>
      <Container backgroundColor="20,53,72">
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
                src={project.agency.images.url}
                alt={project.agency.images.name}
              />
            </FigureBox>
          </AgencyBox>
          <FigureBox>
            <img
              src={project.images.destaques.princiapal.url}
              alt={project.images.destaques.princiapal.name}
            />
          </FigureBox>
        </Row>
        <Row>
          <FigureBox>
            <img
              src={project.images.destaques.produto.url}
              alt={project.images.destaques.produto.name}
            />
          </FigureBox>
        </Row>
        <Row className="topMargin noHorizontalMargin">
          <FigureBox>
            <img
              src={project.images.destaques.esquerda.url}
              alt={project.images.destaques.esquerda.name}
            />
          </FigureBox>
          <FigureBox>
            <img
              src={project.images.destaques.centro.url}
              alt={project.images.destaques.centro.name}
            />
          </FigureBox>
          <FigureBox>
            <img
              src={project.images.destaques.direita.url}
              alt={project.images.destaques.direita.name}
            />
          </FigureBox>
        </Row>
      </Container>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  project: state.project.data[0],
  loading: state.project.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProjectAtions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projeto);
