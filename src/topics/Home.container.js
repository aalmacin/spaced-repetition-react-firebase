import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'firebaseui/dist/firebaseui.css';
import Topics from './Topics.container';
import { checkLogInStatus } from '../auth/auth.actions';
import SignIn from './SignIn.container';
import SignOut from './SignOut.container';
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCode,
  faGamepad,
  faFlask,
  faBook,
  faCalculator,
  faMusic
} from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  render() {
    const { loggedIn, pending, user } = this.props;
    if (pending) {
      return <Loader type="Oval" color="#000" />;
    } else {
      return (
        <div class="d-flex flex-row justify-content-between">
          <div class="sidebar w-25 flex-grow-1 pt-1">
            <div class="d-flex flex-row justify-content-around align-items-end">
              {loggedIn &&
                user && <span class="align-self-end">{user.displayName}</span>}
              {loggedIn && <SignOut />}
              {!loggedIn && <SignIn />}
            </div>
            <div>
              <span class="border" />
            </div>
            <div class="input-group">
              <input
                type="text"
                class="form-control no-gutters"
                placeholder="Filter Categories"
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </div>
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item list-group-item-action active">
                All
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCode} /> Programming
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCode} /> Javascript
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCode} /> Java
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCode} /> Spring
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Science
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Physics
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Chemistry
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Biology
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Evolution
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faMusic} /> Guitar
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faMusic} /> Piano
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faMusic} /> Music Theory
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCalculator} /> Math
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> Philosophy
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> Psychology
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> Economics
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> History
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> Politics
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faGamepad} /> Gaming
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faGamepad} /> NBA 2K18
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faGamepad} /> Assassins Creed
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faGamepad} /> Assassins Creed: Syndicate
              </a>
            </div>
          </div>
          <div class="main w-75 flex-grow-1 p-3">
            {loggedIn && <Topics />}
            {!loggedIn && <p>Please log in</p>}
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
