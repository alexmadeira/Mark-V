import React, { Component } from "react";

import Head from "../components/base/header";
import Footer from "../components/base/footer";
import Projects from "../components/home/projetcs";

import "../src/styles/global";
import { Main } from "./style";

export default class Projetos extends Component {
  state = {
    loaded: false,
    show: false
  };
  componentDidMount() {
    this.setState({ loaded: true });
    this.timeoutId = setTimeout(() => {
      this.setState({ ...this.state, show: true });
    }, 200);
  }

  render() {
    if (!this.state.loaded) return null;
    return (
      <Main className={this.state.show ? "loaded" : ""}>
        <Head title="projeto" />
        <Projects />
        <Footer />
      </Main>
    );
  }
}
