import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../nav/Nav.container';
import { Route, Switch } from 'react-router';
import Home from '../home/Home.container';
import Topics from '../topics/Topics.container';
import { connect } from 'react-redux';
import ShowTopic from '../topics/ShowTopic.container';

class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/topics/:topicId/show" render={() => <ShowTopic />} />
            <Route path="/topics" component={() => <Topics />} />
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
