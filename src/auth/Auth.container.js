import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebaseui from 'firebaseui';
import { firebaseAuth } from '../firebase/firebase';
import 'firebaseui/dist/firebaseui.css';

class Auth extends Component {
  componentDidMount() {
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

Auth.propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
