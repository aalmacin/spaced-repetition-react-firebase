import React, { Component } from 'react';
import TopicList from './topicList.component';
import { connect } from 'react-redux';
import { addTopic, loadTopics } from './topics.actions';
import TopicForm from './topicForm.component';

class Topics extends Component {
  componentDidMount() {
    const { loadAll } = this.props;
    loadAll();
  }

  render() {
    const { addTopic, topics } = this.props;
    return (
      <div>
        <TopicForm submitHandler={addTopic} />
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
    },
    addTopic: ({ name }) => {
      dispatch(addTopic({ name }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);
