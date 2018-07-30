import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'firebaseui/dist/firebaseui.css';
import Topics from './Topics.container';
import { checkLogInStatus } from '../auth/auth.actions';
import SignIn from './SignIn.container';
import SignOut from './SignOut.container';
import Loader from 'react-loader-spinner';

class Home extends Component {
  render() {
    const { loggedIn, pending, user } = this.props;
    console.log(user);
    if (pending) {
      return <Loader type="Oval" color="#000" />;
    } else {
      return (
        <div>
          {!loggedIn && <SignIn />}
          {loggedIn && <p>{user.displayName}</p>}
          {loggedIn && <SignOut />}
          <div>
            <Topics />
          </div>
        </div>
      );
    }
  }
}

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { loggedIn, pending, user } = state.auth;
  return {
    loggedIn,
    pending,
    user
  };
};

const mapDispatchToProps = dispatch => {
  dispatch(checkLogInStatus());
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
