import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as AgenciesActions } from '../../../store/ducks/agencies';

import { Container } from './style';

import Experiencia from './experiencia';
import LoadingAgency from '../../block/loading/agency';

class Experiencias extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    agencies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    getAgenciesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getAgenciesRequest } = this.props;
    const filter = 'order=enter:desc';
    getAgenciesRequest(filter);
  }

  render() {
    const { agencies, loading } = this.props;
    return (
      <Container>
        {loading ? (
          <LoadingAgency total={6} />
        ) : (
          agencies.map(agency => <Experiencia agency={agency} key={agency.id} />)
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  agencies: state.agencies.data,
  loading: state.agencies.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AgenciesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Experiencias);
