import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as firebaseui from 'firebaseui';
import { firebaseAuth } from '../firebase/firebase';

class SignIn extends Component {
  componentDidMount() {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
        firebaseAuth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    const ui = new firebaseui.auth.AuthUI(firebaseAuth());
    ui.start('#auth-container', uiConfig);
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h3>Sign In</h3>
        </div>
        <div id="auth-container" />
      </div>
    );
  }
}

SignIn.propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
