import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'firebaseui/dist/firebaseui.css';
import Topics from './Topics.container';
import * as firebaseui from 'firebaseui';
import { firebaseAuth } from '../firebase/firebase';

class Home extends Component {
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
        <div>
          <div className="text-center">
            <h3>Sign In</h3>
          </div>
          <div id="auth-container" />
        </div>
        <div>
          <Topics />
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
