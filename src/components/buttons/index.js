import React, { Component } from "react";

import PropTypes from "prop-types";
import nprogress from "nprogress";

import { Outline, Solid, Invisibile } from "./style";

const nexPage = props => {
  nprogress.start();
  setTimeout(() => {
    document.body.classList.add("loading");
  }, 200);
  setTimeout(() => {
    props.history.push(props.to);
  }, 2000);
};

export class OutlineButtom extends Component {
  static defaultProps = {
    to: "#",
    className: "btn-default"
  };

  static propTypes = {
    to: PropTypes.string,
    key: PropTypes.string,
    className: PropTypes.string
  };

  loadNexPage = () => {
    nprogress.start();
    nexPage(this.props);
  };

  render() {
    return (
      <Outline onClick={this.loadNexPage} className={this.props.className}>
        {this.props.children}
      </Outline>
    );
  }
}

export class SolidButtom extends Component {
  static defaultProps = {
    to: "#",
    className: "btn-default"
  };

  static propTypes = {
    to: PropTypes.string,
    key: PropTypes.string,
    className: PropTypes.string
  };

  loadNexPage = () => {
    nprogress.start();
    nexPage(this.props);
  };

  render() {
    return (
      <Solid onClick={this.loadNexPage} className={this.props.className}>
        {this.props.children}
      </Solid>
    );
  }
}

export class InvisibileButtom extends Component {
  static defaultProps = {
    to: "#",
    className: "btn-default"
  };

  static propTypes = {
    to: PropTypes.string,
    key: PropTypes.string,
    className: PropTypes.string
  };

  loadNexPage = () => {
    nprogress.start();
    nexPage(this.props);
  };

  render() {
    return (
      <Invisibile onClick={this.loadNexPage} className={this.props.className}>
        {this.props.children}
      </Invisibile>
    );
  }
}
