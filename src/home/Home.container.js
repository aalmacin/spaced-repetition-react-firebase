import React, { Component } from 'react';
import 'firebase/auth';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firebaseAuth } from '../firebase/firebase';
import { loggedIn, notLoggedIn, signOut, setUser } from '../auth/auth.actions';
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  render() {
    const { user, logout, pending, loggedIn } = this.props;
    if (pending) {
      return <Loader type="Oval" color="#000" />;
    } else {
      return loggedIn ? (
        <div>
          <a className="btn btn-primary" onClick={logout}>
            Logout
          </a>
          <p>Hello {user.displayName}</p>
        </div>
      ) : (
        <Redirect to="/auth" />
      );
    }
  }
}

const mapStateToProps = state => {
  const { user, loggedIn, pending } = state.auth;
  return {
    user,
    loggedIn,
    pending
  };
};

Home.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => {
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      dispatch(setUser(user));
      dispatch(loggedIn());
    } else {
      dispatch(notLoggedIn());
    }
  });
  return {
    logout: () => {
      firebaseAuth().signOut();
      dispatch(signOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
