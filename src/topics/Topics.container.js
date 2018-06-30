import React, { Component } from 'react';
import TopicList from './topicList.component';
import { connect } from 'react-redux';
import { loadTopics } from './topics.actions';
import CreateTopicForm from './CreateTopicForm.container';
import Loader from 'react-loader-spinner';

class Topics extends Component {
  componentDidMount() {
    const { loadAll } = this.props;
    loadAll();
  }

  render() {
    const { topics, loadedTopics } = this.props;
    return (
      <div className="container">
        <h3>Topics</h3>

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
  return {
    loadedTopics,
    topics: all
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadAll: () => {
      dispatch(loadTopics());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);
