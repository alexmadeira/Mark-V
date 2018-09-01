import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import scrollToElement from "scroll-to-element";
import PropTypes from "prop-types";

import {
  Container,
  Preview,
  TitleBox,
  Title,
  DescriptionBox,
  Description,
  BigDescriptionBox,
  LogoLink,
  Logo,
  ViewMore,
  Buttom,
  ButtomLink
} from "./style";

export default class Project extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    simple: PropTypes.bool.isRequired,
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      images: PropTypes.shape({
        preview: PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          backgroundColor: PropTypes.string.isRequired
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

  openProject = e => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isOpen !== prevState.isOpen) {
      setTimeout(() => {
        scrollToElement(ReactDOM.findDOMNode(this), {
          offset: -20,
          ease: "out-expo",
          duration: 1000
        });
      }, 300);
    }
  }

  render() {
    return (
      <Container
        className={this.state.isOpen ? "open" : ""}
        backgroundImage={this.props.project.images.background.url}
        backgroundColor={this.props.project.images.background.backgroundColor}
        ref={Container => {
          this.projectItem = Container;
        }}
      >
        <Preview
          className={this.state.isOpen ? "open" : ""}
          backgroundColor={this.props.project.images.preview.backgroundColor}
        >
          <img
            src={this.props.project.images.preview.url}
            alt={this.props.project.images.preview.name}
          />
        </Preview>
        <Logo className={this.state.isOpen ? "open" : ""}>
          <LogoLink to={`/projeto/${this.props.project.slug}`}>
            <img
              src={this.props.project.images.logo.url}
              alt={this.props.project.images.logo.name}
            />
          </LogoLink>
        </Logo>
        <TitleBox className={this.state.isOpen ? "open" : ""}>
          <Title>{this.props.project.name}</Title>
        </TitleBox>
        {!this.props.simple && (
          <Fragment>
            {!this.state.isOpen ? (
              <ViewMore>
                <Buttom onClick={this.openProject}>Ver</Buttom>
                <ButtomLink to={`/projeto/${this.props.project.slug}`}>
                  Completo
                </ButtomLink>
              </ViewMore>
            ) : (
              <ViewMore>
                <Buttom onClick={this.openProject}>Fechar</Buttom>
              </ViewMore>
            )}
          </Fragment>
        )}
        <DescriptionBox className={this.state.isOpen ? "open" : ""}>
          <Description>{this.props.project.description}</Description>
        </DescriptionBox>

        <BigDescriptionBox className={this.state.isOpen ? "open" : ""}>
          <p>{this.props.project.longDescription}</p>
        </BigDescriptionBox>
      </Container>
    );
  }
}
