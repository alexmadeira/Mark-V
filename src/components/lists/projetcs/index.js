import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProjectsAtions } from "../../../store/ducks/projects";

import PropTypes from "prop-types";
import Project from "../../project";

import { Container, Row } from "./style";

class Projects extends Component {
  static propTypes = {
    limit: PropTypes.number,
    simple: PropTypes.bool.isRequired,
    getProjectsRequest: PropTypes.func.isRequired,
    project: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    })
  };

  componentDidMount() {
    this.props.getProjectsRequest();
  }

  render() {
    console.log(this.props.projects);
    return (
      <Container>
        <Row>
          {this.props.projects.data.map(project => (
            <Project
              key={project.id}
              project={project}
              simple={this.props.simple}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProjectsAtions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
