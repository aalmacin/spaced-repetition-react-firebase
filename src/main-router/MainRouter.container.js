import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../nav/Nav.container';
import { Route, Switch } from 'react-router';
import Home from '../home/Home.container';
import Topics from '../topics/Topics.container';
import { connect } from 'react-redux';
import ShowTopic from '../topics/ShowTopic.container';
import StudyForm from '../topics/study/StudyForm.container';
import Notifications from '../notifications/Notifications.container';
import Auth from '../auth/Auth.container';

class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Notifications />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <Route path="/topics/:topicId/show" component={ShowTopic} />
            <Route path="/topics/:topicId/studies/new" component={StudyForm} />
            <Route path="/topics" component={Topics} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainRouter);
