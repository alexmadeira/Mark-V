import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  faUser, faMedal, faGraduationCap, faUserNinja,
} from '@fortawesome/free-solid-svg-icons';
import {
  Main,
  Header,
  Nome,
  HeaderBox,
  Sobre,
  NavBox,
  Nav,
  NavItem,
  Contaniner,
  Icon,
} from './style';

import Back from '../../components/block/back';
import Geral from '../../components/curriculo/geral';
import Experiencias from '../../components/curriculo/experiencias';
import Educacao from '../../components/curriculo/educacao';
import Habilidade from '../../components/curriculo/habilidade';

export default class Curriculo extends Component {
  state = {
    initial: true,
    getOut: false,
    nav: [
      {
        slug: 'sobre',
        name: 'Sobre',
        icon: <Icon icon={faUser} />,
        component: Geral,
        active: true,
      },
      {
        slug: 'experiencias',
        name: 'Expereiências',
        icon: <Icon icon={faMedal} />,
        component: Experiencias,
        active: false,
      },
      {
        slug: 'educacao',
        name: 'Educação',
        icon: <Icon icon={faGraduationCap} />,
        component: Educacao,
        active: false,
      },
      {
        slug: 'habilidade',
        name: 'Habilidades',
        icon: <Icon icon={faUserNinja} />,
        component: Habilidade,
        active: false,
      },
    ],
  };

  static propTypes = {
    history: PropTypes.shape().isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
      params: PropTypes.shape({
        slug: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.setShowItem();
  }

  activeItem = (atualSlug) => {
    const { nav } = this.state;

    const navItem = nav.map((item) => {
      const atualItem = item;

      atualItem.active = false;
      if (atualItem.slug === atualSlug) {
        atualItem.active = true;
      }
      return atualItem;
    });
    this.setState({ nav: navItem, getOut: false, initial: false });
  };

  isActualItem = (atualSlug) => {
    const { nav } = this.state;
    return !!nav.find(item => item.active && item.slug === atualSlug);
  };

  getActualItem = () => {
    const { nav } = this.state;
    return nav.filter(item => item.active)[0];
  };

  removeContent = (slug) => {
    if (this.isActualItem(slug)) return;

    this.setState({ getOut: true });

    setTimeout(() => {
      this.setShowItem(slug);
      this.activeItem(slug);
    }, 250);
  };

  getContent = () => {
    const { nav } = this.state;
    return nav.filter(item => item.active)[0].component;
  };

  setShowItem = (nextSlug = false) => {
    const {
      match: {
        path,
        params: { slug },
      },
      history,
    } = this.props;

    const { initial } = this.state;

    const actualSlug = nextSlug !== false ? nextSlug : slug || '';

    const actualItem = actualSlug ? `/${actualSlug}` : '';

    const to = path.split(':').length > 1 ? path.replace('/:slug', actualItem) : `${path}${actualItem}`;

    history.push(to);
    if (initial) {
      this.activeItem(actualSlug);
    }
  };

  render() {
    const { history } = this.props;
    const { nav, getOut } = this.state;
    const Content = this.getContent();

    return (
      <Main>
        <Back to="/" history={history} text="Home" />

        <Header backgroundImage="-http://hdqwalls.com/wallpapers/iron-fist-artwork-19.jpg?">
          <HeaderBox>
            <Nome>Teste</Nome>
            <Sobre>
              Trained in ways of martial arts at kun-Lun, Danny Rand becomes the Immortal Iron Fist
              and uses his incredible abilities to defend others.
            </Sobre>
          </HeaderBox>
        </Header>
        <NavBox>
          <Nav>
            {nav.map(({
              slug, active, icon, name,
            }) => (
              <NavItem
                className={active ? 'active' : ''}
                onClick={() => this.removeContent(slug)}
                key={slug}
              >
                <span>
                  {icon}
                  <em>{name}</em>
                </span>
              </NavItem>
            ))}
          </Nav>
        </NavBox>
        <Contaniner className={getOut && 'out'}>
          <Content />
        </Contaniner>
      </Main>
    );
  }
}
