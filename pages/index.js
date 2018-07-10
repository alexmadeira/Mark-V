import React, { Component } from "react";

import Head from "../components/base/header";
import Footer from "../components/base/footer";
import Banner from "../components/banner";
import Projects from "../components/home/projetcs";
import Basic from "../components/block/basic";
import Buttom from "../components/buttons/outline";

import "../src/styles/global";
import { Main } from "./style";

export default class Home extends Component {
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
        <Head title="Home" />
        <Banner />
        <Projects />
        <Basic regular={true}>
          <h2 className="title">
            Layout responsivo, fluido, mobile e todas as variacões possíveis
          </h2>
          <figure>
            <img
              src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/Responsive.jpg"
              alt="responsive"
            />
          </figure>
        </Basic>
        <Basic>
          <h3>Gostou do que viu?</h3>
          <p>Entre em contato, ou não</p>
          <div>
            <Buttom href="#">Contato</Buttom>
          </div>
        </Basic>
        <Footer />
      </Main>
    );
  }
}
