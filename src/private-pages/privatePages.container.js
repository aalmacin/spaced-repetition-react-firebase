import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';

import ShowTopic from '../topics/ShowTopic.container';
import StudyForm from '../topics/study/StudyForm.container';
import Home from '../home/Home.container';
import Topics from '../topics/Topics.container';
import { checkLogInStatus } from '../auth/auth.actions';
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';

class PrivatePages extends Component {
  render() {
    const { pending, loggedIn } = this.props;
    if (pending) {
      return <Loader type="Oval" color="#000" />;
    } else {
      return loggedIn ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/topics/:topicId/show" component={ShowTopic} />
          <Route path="/topics/:topicId/studies/new" component={StudyForm} />
          <Route path="/topics" component={Topics} />
        </Switch>
      ) : (
        <Redirect to="/auth" />
      );
    }
  }
}

PrivatePages.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { loggedIn, pending } = state.auth;
  return {
    loggedIn,
    pending
  };
};

const mapDispatchToProps = dispatch => {
  dispatch(checkLogInStatus());
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivatePages);
