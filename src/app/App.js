import React, { Component } from 'react';
import './App.css';
import MainRouter from '../main-router/MainRouter.container';
import { Provider } from 'react-redux';
import store from '../redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRouter />
      </Provider>
    );
  }
}

export default App;
