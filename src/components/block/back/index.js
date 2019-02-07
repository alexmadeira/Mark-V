import React, { Component } from "react";
import nprogress from "nprogress";

import { Container, Arrow } from "./style";

class Back extends Component {
  loadNexPage = () => {
    nprogress.start();

    setTimeout(() => {
      document.body.classList.add("loading");
    }, 200);

    setTimeout(() => {
      this.props.history.push(this.props.to);
    }, 2000);
  };

  render() {
    const { text } = this.props;

    return (
      <Container>
        <p>
          <Arrow onClick={this.loadNexPage} className="animated-arrow">
            <span className="the-arrow -left">
              <span className="shaft" />
            </span>
            <span className="main">
              <span className="text">{text ? text : "Voltar"}</span>
              <span className="the-arrow -right">
                <span className="shaft" />
              </span>
            </span>
          </Arrow>
        </p>
      </Container>
    );
  }
}

export default Back;
