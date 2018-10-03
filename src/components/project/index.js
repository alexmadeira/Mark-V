import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import scrollToElement from "scroll-to-element";
import classNames from "classnames";
import PropTypes from "prop-types";

import Image from "../block/image";
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
  ButtomLink,
  NextProjectLink
} from "./style";

export default class Project extends Component {
  state = {
    isOpen: false,
    loading: true
  };

  static propTypes = {
    simple: PropTypes.bool.isRequired,
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      previewColor: PropTypes.string.isRequired,
      logo: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
      background: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired,
      preview: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired
      }).isRequired
    })
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
    const projectClass = classNames(
      this.props.className,
      this.state.isOpen ? "open" : ""
    );

    return (
      <Container
        className={projectClass}
        backgroundImage={this.props.project.background.url}
        backgroundColor={this.props.project.backgroundColor}
        item={this.props.item}
        ref={Container => {
          this.projectItem = Container;
        }}
      >
        {this.props.nextProjectLink && (
          <NextProjectLink to={`/projeto/${this.props.project.slug}`}>
            <img
              src={this.props.project.preview.thumb}
              alt={this.props.project.name}
            />
            <span>Próximo projeto</span>
          </NextProjectLink>
        )}
        <Preview
          className={this.state.isOpen ? "open" : ""}
          backgroundColor={this.props.project.previewColor}
        >
          <Image
            src={{
              preload: this.props.project.preview.thumb,
              content: this.props.project.preview.url
            }}
          />
        </Preview>
        <Logo className={this.state.isOpen ? "open" : ""}>
          <LogoLink to={`/projeto/${this.props.project.slug}`}>
            <img
              src={this.props.project.logo.url}
              alt={this.props.project.logo.name}
            />
          </LogoLink>
        </Logo>
        {!this.props.nextProjectLink && (
          <TitleBox className={this.state.isOpen ? "open" : ""}>
            <Title>{this.props.project.name}</Title>
          </TitleBox>
        )}

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
        {!this.props.nextProjectLink && (
          <DescriptionBox className={this.state.isOpen ? "open" : ""}>
            <Description>{this.props.project.description}</Description>
          </DescriptionBox>
        )}

        <BigDescriptionBox className={this.state.isOpen ? "open" : ""}>
          <p>{this.props.project.longDescription}</p>
        </BigDescriptionBox>
      </Container>
    );
  }
}
