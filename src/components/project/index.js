import React, { Component, Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Image from "../block/image";
import { SolidButtom, InvisibileButtom } from "../../components/buttons";
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

  render() {
    const { history } = this.props;

    const projectClass = classNames(
      this.props.className,
      this.state.isOpen ? "open" : "",
      this.props.simple ? "simple" : ""
    );

    return (
      <Container
        name={this.props.project.slug}
        className={projectClass}
        item={this.props.item}
        ref={Container => {
          this.projectItem = Container;
        }}
        bgimage={this.props.project.background.url}
        bgcolor={this.props.project.backgroundColor}
      >
        {this.props.simple && (
          <InvisibileButtom
            to={`/projeto/${this.props.project.slug}`}
            history={history}
          />
        )}
        {this.props.nextProjectLink && (
          <NextProjectLink to={`/projeto/${this.props.project.slug}`}>
            <img
              src={this.props.project.preview.thumb}
              alt={this.props.project.name}
            />
            <Logo className="logo">
              <img
                src={this.props.project.logo.url}
                alt={this.props.project.logo.name}
              />
            </Logo>
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
                <SolidButtom
                  to={`/projeto/${this.props.project.slug}`}
                  history={history}
                >
                  Completo
                </SolidButtom>
              </ViewMore>
            ) : (
              <ViewMore>
                <Buttom onClick={this.openProject}>Fechar</Buttom>
              </ViewMore>
            )}
          </Fragment>
        )}
        {!this.props.nextProjectLink && (
          <DescriptionBox
            className={
              this.state.isOpen ? "open DescriptionBox" : "DescriptionBox"
            }
          >
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
