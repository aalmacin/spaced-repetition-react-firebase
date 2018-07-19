import React, { Component } from 'react';
import 'firebase/auth';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firebaseAuth } from '../firebase/firebase';
import { signOut } from '../auth/auth.actions';

class Home extends Component {
  render() {
    const { user, logout } = this.props;
    return (
      <div>
        <a className="btn btn-primary" onClick={logout}>
          Logout
        </a>
        <p>Hello {user.displayName}</p>
      </div>
    );
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
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
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
