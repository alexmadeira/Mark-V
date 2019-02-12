import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ProjectsAtions } from '../../../store/ducks/projects';

import Project from '../../project';

import { Container, Row } from './style';

class Projects extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    order: PropTypes.string.isRequired,
    simple: PropTypes.bool.isRequired,
    getProjectsRequest: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    history: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    limit: '',
  };

  componentDidMount() {
    const { limit, order, getProjectsRequest } = this.props;
    const filter = `limit=${limit}&order=${order}`;
    getProjectsRequest(filter);
  }

  render() {
    const {
      history, simple, projects, loading,
    } = this.props;

    if (loading) return null;

    return (
      <Container className={!simple && 'respiro'}>
        <Row>
          {projects.map((project, i) => (
            <Project
              key={project.id}
              item={i}
              project={project}
              history={history}
              simple={simple}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.data,
  loading: state.projects.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsAtions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
