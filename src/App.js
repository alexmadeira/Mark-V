import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

import './config/reactotron';
import './styles/global';

import Footer from './components/base/footer';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <PerfectScrollbar>
          <Routes />
          <Footer />
        </PerfectScrollbar>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
