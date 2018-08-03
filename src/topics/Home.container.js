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
        <div className="d-flex flex-row justify-content-between">
          <div className="sidebar w-25 flex-grow-1 pt-1">
            <div className="d-flex flex-row justify-content-around align-items-end">
              {loggedIn &&
                user && (
                  <span className="align-self-end">{user.displayName}</span>
                )}
              {loggedIn && <SignOut />}
              {!loggedIn && <SignIn />}
            </div>
            <div>
              <span className="border" />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control no-gutters"
                placeholder="Filter Categories"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </div>
            <div className="list-group list-group-flush">
              <a
                href="#"
                className="list-group-item list-group-item-action active"
              >
                All
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCode} /> Programming
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCode} /> Javascript
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCode} /> Java
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCode} /> Spring
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Science
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Physics
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Chemistry
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Biology
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faFlask} /> Evolution
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faMusic} /> Guitar
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faMusic} /> Piano
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faMusic} /> Music Theory
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faCalculator} /> Math
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> Philosophy
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> Psychology
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> Economics
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> History
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faBook} /> Politics
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faGamepad} /> Gaming
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faGamepad} /> NBA 2K18
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faGamepad} /> Assassins Creed
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <FontAwesomeIcon icon={faGamepad} /> Assassins Creed: Syndicate
              </a>
            </div>
          </div>
          <div className="main w-75 flex-grow-1 p-3">
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
