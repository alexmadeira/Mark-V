import React from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';

import { Contaniner } from './style';
import 'nprogress/nprogress.css';

class FancyRoute extends React.Component {
  state = {
    hidden: true,
  };

  componentDidMount() {
    this.setState({ hidden: false });

    this.timer = setTimeout(() => {
      nprogress.done();

      document.body.classList.add('loadded');
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { hidden } = this.state;
    if (hidden) return <Contaniner />;

    return (
      <Contaniner>
        <Route {...this.props} />
      </Contaniner>
    );
  }
}

export default FancyRoute;
