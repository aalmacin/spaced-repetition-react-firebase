import React, { Component } from 'react';
import TopicList from './topicList.component';
import { connect } from 'react-redux';
import { loadTopics } from './topics.actions';
import CreateTopicForm from './CreateTopicForm.container';

class Topics extends Component {
  componentDidMount() {
    const { loadAll } = this.props;
    loadAll();
  }

  render() {
    const { topics } = this.props;
    return (
      <div className="container">
        <h3>Topics</h3>

        <CreateTopicForm />

        <TopicList topics={topics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    topics: { all }
  } = state;
  return {
    topics: all
  };
};

const mapDispatchToProps = dispatch => {
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
