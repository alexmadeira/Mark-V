import React, { Component } from "react";
import PropTypes from "prop-types";

import { OutlineButtom } from "./style";

class Buttom extends Component {
  static defaultProps = {
    to: "#",
    className: "btn-default"
  };

  static propTypes = {
    to: PropTypes.string,
    key: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    return (
      <OutlineButtom to={this.props.to} className={this.props.className}>
        {this.props.children}
      </OutlineButtom>
    );
  }
}

export default Buttom;
