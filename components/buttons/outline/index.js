import React, { Component } from "react";
import PropTypes from "prop-types";

import { OutlineButtom } from "./style";

class Buttom extends Component {
  static defaultProps = {
    href: "#",
    className: "btn-default"
  };

  static propTypes = {
    href: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    return (
      <OutlineButtom href={this.props.href} className={this.props.className}>
        {this.props.children}
      </OutlineButtom>
    );
  }
}

export default Buttom;
