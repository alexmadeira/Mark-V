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
      description: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      images: PropTypes.shape({
        preview: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        }),
        background: PropTypes.shape({
          url: PropTypes.string.isRequired,
          backgroundColor: PropTypes.string.isRequired
        }),
        logo: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        })
      }).isRequired
    }).isRequired
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.getProjectRequest(slug);
  }

  render() {
    return (
      <Fragment>
        {this.props.project.data.map(project => (
          <Main key={project.id}>
            <Back to="/projetos" />
            <Header>
              <ProjetBackground src={project.images.background.url} />
              <a
                href="https://www.nerdloot.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Logo
                  src={project.images.logo.url}
                  alt={project.images.logo.name}
                />
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
                      <h2>Corebiz</h2>
                      <p>
                        Especializada em oferecer soluções completas em
                        marketing digital focados em Omnichannel & Omnicontext,
                        a CoreBiz se destaca como uma das maiores agências de
                        e-commerce do Brasil e tem a missão de rentabilizar
                        continuamente os negócios dos seus clientes, por meio de
                        uma estratégia única, baseada 100% em Marketing
                        Cognitivo.
                      </p>
                    </AgencyDescription>
                  </AgencyDescriptionBox>
                  <FigureBox>
                    <img
                      src="https://alex-madeira.s3.sa-east-1.amazonaws.com/imagens/Corebiz/alex-madeira-Corebiz-corebiz.jpg"
                      alt="logo"
                    />
                  </FigureBox>
                </AgencyBox>
                <FigureBox>
                  <img
                    src="https://alex-madeira.s3.sa-east-1.amazonaws.com/imagens/nerdloot/alex-madeira-nerdloot-destaque.jpg"
                    alt="logo"
                  />
                </FigureBox>
              </Row>
              <Row>
                <div md={12}>
                  <FigureBox>
                    <img
                      src="https://alex-madeira.s3.sa-east-1.amazonaws.com/imagens/nerdloot/alex-madeira-nerdloot-produto-destaque.jpg"
                      alt="logo"
                    />
                  </FigureBox>
                </div>
              </Row>
              <Row className="topMargin noHorizontalMargin">
                <FigureBox>
                  <img
                    src="https://alex-madeira.s3.sa-east-1.amazonaws.com/imagens/nerdloot/alex-madeira-nerdloot-destaque-esquerda.jpg"
                    alt="logo"
                  />
                </FigureBox>
                <FigureBox>
                  <img
                    src="https://alex-madeira.s3.sa-east-1.amazonaws.com/imagens/nerdloot/alex-madeira-nerdloot-destaque-cento.jpg"
                    alt="logo"
                  />
                </FigureBox>
                <FigureBox>
                  <img
                    src="https://alex-madeira.s3.sa-east-1.amazonaws.com/imagens/nerdloot/alex-madeira-nerdloot-destaque-direita.jpg"
                    alt="logo"
                  />
                </FigureBox>
              </Row>
            </Container>
          </Main>
        ))}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  project: state.project
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProjectAtions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projeto);
