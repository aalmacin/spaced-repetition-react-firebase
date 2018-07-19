import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebaseui from 'firebaseui';
import { firebaseAuth } from '../firebase/firebase';
import 'firebaseui/dist/firebaseui.css';
import { checkLogInStatus } from './auth.actions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

class Auth extends Component {
  componentDidMount() {
    const { pending, loggedIn } = this.props;
    if (!pending && !loggedIn) {
      const uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
          firebaseAuth.EmailAuthProvider.PROVIDER_ID
        ]
      };
      firebaseAuth()
        .setPersistence(firebaseAuth.Auth.Persistence.LOCAL)
        .then(() => {
          const ui = new firebaseui.auth.AuthUI(firebaseAuth());
          ui.start('#auth-container', uiConfig);
        });
    }
  }

  render() {
    const { pending, loggedIn } = this.props;
    if (pending) {
      return <Loader type="Oval" color="#000" />;
    } else {
      return !loggedIn ? (
        <div>
          <div className="text-center">
            <h3>Sign In</h3>
          </div>
          <div id="auth-container" />
        </div>
      ) : (
        <Redirect to="/" />
      );
    }
  }
}

Auth.propTypes = {
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
)(Auth);
