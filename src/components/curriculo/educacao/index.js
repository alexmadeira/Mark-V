import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as EducationsActions } from '../../../store/ducks/eductions';

import {
  Container, EducationBox, ImageBox, TitleBox, Imagem, TextBox, Text,
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
        {educations.map(() => (
          <EducationBox className={loading ? 'hidden' : 'show'}>
            <ImageBox>
              <Imagem src="https://dummyimage.com/200x200/fff/000" alt="" />
            </ImageBox>
            <TextBox>
              <TitleBox>
                <Title type="reverse">Teste Teste </Title>
              </TitleBox>
              <Text>
                Bacon ipsum dolor amet boudin swine bresaola meatloaf turkey andouille doner kevin
                jowl alcatra fatback drumstick.
              </Text>
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
