import React, { Component } from 'react';
import WelcomeMessage from './welcomeMessage';
import 'firebase/auth';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firebaseAuth } from '../firebase/firebase';
import { setUser } from '../auth/auth.actions';
import Loader from 'react-loader-spinner';

class Home extends Component {
  render() {
    const { user } = this.props;
    if (user) {
      return <p>Hello {user.displayName}</p>;
    } else {
      return <Loader type="Oval" color="#000" />;
    }
  }
}

const mapStateToProps = state => {
  const { user } = state.auth;
  return {
    user
  };
};

Home.propTypes = {
  user: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  firebaseAuth().onAuthStateChanged(user => {
    dispatch(setUser(user));
  });
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
