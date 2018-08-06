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
import TopicService from '../topics/topicsStub.service';

class Home extends Component {
  state = {
    tags: []
  };

  componentDidMount() {
    const topicService = new TopicService();
    topicService.getTags().then(r => {
      this.setState({
        ...this.state,
        tags: r
      });
    });
  }

  render() {
    const { loggedIn, pending, user } = this.props;
    const { tags } = this.state;

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
              {tags.map(tag => (
                <a
                  href="#"
                  key={tag.id}
                  className="list-group-item list-group-item-action"
                >
                  <FontAwesomeIcon icon={faFlask} /> {tag.name}
                </a>
              ))}
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
