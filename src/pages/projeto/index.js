import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ProjectAtions } from '../../store/ducks/project';

import Back from '../../components/block/back';
import MainContent from './componets/main';

import { Main } from './style';

class Projeto extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    history: PropTypes.shape().isRequired,
    project: PropTypes.shape({
      nextProject: PropTypes.shape(),
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape(),
    }).isRequired,
    getProjectRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.requestProject();
  }

  requestProject() {
    const {
      match: {
        params: { slug },
      },
      getProjectRequest,
    } = this.props;
    getProjectRequest(slug);
  }

  render() {
    const {
      history,
      project: { nextProject, backgroundColor, id },
      project,
      loading,
    } = this.props;
    if (loading) return null;

    return (
      <Main backgroundColor={backgroundColor}>
        <Back to="/projetos" text="Projetos" history={history} />
        {id && <MainContent project={project} history={history} nextProject={nextProject} />}
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project.data,
  loading: state.project.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectAtions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projeto);
