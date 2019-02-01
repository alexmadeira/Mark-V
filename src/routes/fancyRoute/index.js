import React from "react";
import { Route } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

class FancyRoute extends React.Component {
  componentWillMount() {
    nprogress.start();
    // console.tron.log("start");
  }

  componentDidMount() {
    nprogress.done();
    // console.tron.log("done");
  }

  render() {
    return <Route {...this.props} />;
  }
}

export default FancyRoute;
