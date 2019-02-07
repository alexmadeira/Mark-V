import React from "react";
import { Route } from "react-router-dom";
import nprogress from "nprogress";

import { Contaniner } from "./style";
import "nprogress/nprogress.css";

class FancyRoute extends React.Component {
  state = {
    hidden: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false });
      nprogress.done();

      document.body.classList.remove("loading");
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
