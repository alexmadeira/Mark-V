import React, { Component } from "react";

import { Container } from "./style";
import PropTypes from "prop-types";

class Basic extends Component {
  static defaultProps = {
    regular: false,
    reverse: false,
    shadow: true
  };

  static propTypes = {
    regular: PropTypes.bool,
    reverse: PropTypes.bool,
    shadow: PropTypes.bool
  };
  render() {
    return (
      <Container
        regular={this.props.regular}
        reverse={this.props.reverse}
        shadow={this.props.shadow}
      >
        {this.props.children}
      </Container>
    );
  }
}

export default Basic;
