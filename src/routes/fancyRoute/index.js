import React from "react";
import { Route } from "react-router-dom";
import nprogress from "nprogress";

import { Contaniner } from "./style";
import "nprogress/nprogress.css";

class FancyRoute extends React.Component {
  state = {
    hidden: true
  };
  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    var _this = this;
    setTimeout(function() {
      _this.setState({ hidden: false });
      nprogress.done();
    }, 200);
  }

  render() {
    if (this.state.hidden) return <Contaniner />;

    return (
      <Contaniner>
        <Route {...this.props} />
      </Contaniner>
    );
  }
}

export default FancyRoute;
