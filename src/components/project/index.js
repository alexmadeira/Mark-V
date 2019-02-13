import React, { Component, Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Image from "../block/image";
import Buttom from "../buttons";

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
  ButtomMore,
  NextProjectLink
} from "./style";

export default class Project extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    simple: PropTypes.bool.isRequired,
    history: PropTypes.shape().isRequired,
    item: PropTypes.number,
    className: PropTypes.string,
    nextProjectLink: PropTypes.bool,
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
    }).isRequired
  };

  static defaultProps = {
    className: "",
    nextProjectLink: false,
    item: 0
  };

  openProject = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const {
      history,
      className,
      simple,
      nextProjectLink,
      project: {
        slug,
        background,
        backgroundColor,
        preview,
        logo,
        name,
        previewColor,
        description,
        longDescription
      },
      item
    } = this.props;

    const { isOpen } = this.state;

    const projectClass = classNames(
      className,
      isOpen ? "open" : "",
      simple ? "simple" : ""
    );

    return (
      <Container
        name={slug}
        className={projectClass}
        item={item}
        bgimage={background.url}
        bgcolor={backgroundColor}
      >
        {simple && (
          <Buttom to={`/projeto/${slug}`} history={history} type="invisibile" />
        )}
        {nextProjectLink && (
          <Buttom to={`/projeto/${slug}`} history={history} type="invisibile">
            <NextProjectLink>
              <img src={preview.thumb} alt={name} />
              <Logo className="logo">
                <img src={logo.url} alt={logo.name} />
              </Logo>
              <span>Próximo projeto</span>
            </NextProjectLink>
          </Buttom>
        )}
        <Preview
          className={isOpen ? "open" : ""}
          backgroundColor={previewColor}
        >
          <Image
            src={{
              preload: preview.thumb,
              content: preview.url
            }}
          />
        </Preview>
        {!nextProjectLink && (
          <Logo className={isOpen ? "open" : ""}>
            <LogoLink to={`/projeto/${slug}`}>
              <img src={logo.url} alt={logo.name} />
            </LogoLink>
          </Logo>
        )}
        {!nextProjectLink && (
          <TitleBox className={isOpen ? "open" : ""}>
            <Title>{name}</Title>
          </TitleBox>
        )}
        {!simple && (
          <Fragment>
            {!isOpen ? (
              <ViewMore>
                <ButtomMore onClick={this.openProject}>Ver</ButtomMore>
                <Buttom to={`/projeto/${slug}`} history={history} type="solid">
                  Completo
                </Buttom>
              </ViewMore>
            ) : (
              <ViewMore>
                <ButtomMore onClick={this.openProject}>Fechar</ButtomMore>
              </ViewMore>
            )}
          </Fragment>
        )}
        {!nextProjectLink && (
          <DescriptionBox
            className={isOpen ? "open DescriptionBox" : "DescriptionBox"}
          >
            <Description>{description}</Description>
          </DescriptionBox>
        )}
        <BigDescriptionBox className={isOpen ? "open" : ""}>
          <p>{longDescription}</p>
        </BigDescriptionBox>
      </Container>
    );
  }
}
