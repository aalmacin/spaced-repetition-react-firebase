import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOut } from '../auth/auth.actions';
import { firebaseAuth } from '../firebase/firebase';

class SignOut extends Component {
  render() {
    const { logout } = this.props;
    return (
      <a className="btn btn-primary" onClick={logout}>
        Sign out
      </a>
    );
  }
}

SignOut.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = () => {
  return {};
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
)(SignOut);
