import React, { Component } from 'react';
import TopicList from './topicList.component';
import { connect } from 'react-redux';
import { loadTopics } from './topics.actions';
import CreateTopicForm from './CreateTopicForm.container';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { firebaseAuth } from '../firebase/firebase';
import { signOut } from '../auth/auth.actions';

class Topics extends Component {
  componentDidMount() {
    const { loadAll } = this.props;
    loadAll();
  }

  render() {
    const { topics, loadedTopics } = this.props;
    const { user, logout } = this.props;
    return (
      <div className="container">
        <h3>Topics</h3>
        <div className="row">
          <div className="col-9">
            <p>Hello {user.displayName}</p>
          </div>
          <div className="col-3 text-right">
            <a className="btn btn-primary" onClick={logout}>
              Logout
            </a>
          </div>
        </div>

        <CreateTopicForm />

        {loadedTopics ? (
          <TopicList topics={topics} />
        ) : (
          <Loader type="Oval" color="#000" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    topics: { all, loadedTopics }
  } = state;
  const { user, loggedIn, pending } = state.auth;
  return {
    loadedTopics,
    topics: all,
    user,
    loggedIn,
    pending
  };
};

Topics.propTypes = {
  user: PropTypes.object.isRequired,
  topics: PropTypes.array.isRequired,
  loadedTopics: PropTypes.bool.isRequired,
  loadAll: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    loadAll: () => {
      dispatch(loadTopics());
    },
    logout: () => {
      firebaseAuth().signOut();
      dispatch(signOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);
