import React, { Component } from "react";
import Back from "../../components/block/back";
import {
  Main,
  Header,
  Nome,
  HeaderBox,
  Sobre,
  Nav,
  NavBox,
  ContaninerAnimate,
  ContaninerAnimateBox
} from "./style";

import Geral from "../../components/curriculo/geral";
import Experiencia from "../../components/curriculo/experiencia";
import Educacao from "../../components/curriculo/educacao";
import Habilidade from "../../components/curriculo/habilidade";

export default class Curriculo extends Component {
  state = {
    loaded: false,
    show: false,
    curriculoItem: 0,
    nav: [
      { id: 0, name: "Geral", component: Geral, active: true },
      { id: 1, name: "Experiências", component: Experiencia, active: false },
      { id: 2, name: "Educações", component: Educacao, active: false },
      { id: 3, name: "habilidades", component: Habilidade, active: false }
    ]
  };

  activeItem = item => {
    let nav = [
      { id: 0, name: "Geral", active: false },
      { id: 1, name: "Experiências", active: false },
      { id: 2, name: "Educações", active: false },
      { id: 3, name: "habilidades", active: false }
    ];

    nav[item].active = true;
    this.setState({ ...this.state, nav, curriculoItem: -item });
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
        <Back to="/" />
        <Header backgroundImage="http://hdqwalls.com/wallpapers/iron-fist-artwork-19.jpg?">
          <HeaderBox>
            <Nome>Alex Cardoso Madeira</Nome>
            <Sobre>
              Trained in ways of martial arts at K'un-Lun, Danny Rand becomes
              the Immortal Iron Fist and uses his incredible abilities to defend
              others.
            </Sobre>
          </HeaderBox>
        </Header>
        <NavBox>
          <Nav>
            {this.state.nav.map(({ name, active, id }) => (
              <li className={active ? "active" : ""} key={id}>
                <a onClick={() => this.activeItem(id)}>{name}</a>
              </li>
            ))}
          </Nav>
        </NavBox>
        <ContaninerAnimate>
          <ContaninerAnimateBox left={this.state.curriculoItem * 100}>
            <Geral />
          </ContaninerAnimateBox>
          <ContaninerAnimateBox left={this.state.curriculoItem * 100}>
            <Experiencia />
          </ContaninerAnimateBox>
          <ContaninerAnimateBox left={this.state.curriculoItem * 100}>
            <Educacao />
          </ContaninerAnimateBox>
          <ContaninerAnimateBox left={this.state.curriculoItem * 100}>
            <Habilidade />
          </ContaninerAnimateBox>
        </ContaninerAnimate>
      </Main>
    );
  }
}
