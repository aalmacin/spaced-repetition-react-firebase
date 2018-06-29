import React, { Component } from 'react';
import './App.css';
import MainRouter from '../main-router/MainRouter.container';
import { Provider } from 'react-redux';
import store from '../redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import TopicService from '../topics/topics.service';

class App extends Component {
  render() {
    const topicService = new TopicService();
    return (
      <Provider store={store}>
        <MainRouter topicService={topicService} />
      </Provider>
    );
  }
}

export default App;
