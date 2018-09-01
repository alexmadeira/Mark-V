import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";
import "./styles/global";

import Footer from "./components/base/footer";
import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Routes />
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
