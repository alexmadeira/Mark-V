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
    const filter = `limit=${this.props.limit}&order=${this.props.order}`;
    this.props.getProjectsRequest(filter);
  }

  render() {
    const { history } = this.props;

    return (
      <Container className={!this.props.simple && "respiro"}>
        <Row>
          {this.props.projects.data.map((project, i) => (
            <Project
              key={project.id}
              item={i}
              project={project}
              history={history}
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
