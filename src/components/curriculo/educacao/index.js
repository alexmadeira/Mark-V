import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as EducationsActions } from '../../../store/ducks/eductions';

import {
  Container,
  EducationBox,
  ImageBox,
  Imagem,
  TitleBox,
  SubTitle,
  TextBox,
  Text,
} from './style';

import Title from '../../block/title';
import LoadingEducation from '../../block/loading/education';

class Educacao extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    educations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    getEducationsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getEducationsRequest } = this.props;

    getEducationsRequest();
  }

  render() {
    const { loading, educations } = this.props;

    return (
      <Container>
        <LoadingEducation total={4} show={loading} />
        {educations.map(({
          logo: { url }, name, sobrenome, description,
        }) => (
          <EducationBox className={loading ? 'hidden' : 'show'}>
            <ImageBox>
              <Imagem src={url} alt={name} />
            </ImageBox>
            <TextBox>
              <TitleBox>
                <Title type="reverse">{name}</Title>
              </TitleBox>
              <SubTitle>{sobrenome}</SubTitle>
              <Text>{description}</Text>
            </TextBox>
          </EducationBox>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  educations: state.educations.data,
  loading: state.educations.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(EducationsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Educacao);
