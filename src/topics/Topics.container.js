import React, { Component } from 'react';
import TopicList from './topicList.component';
import { connect } from 'react-redux';
import { addTopic, loadTopics } from './topics.actions';
import TopicForm from './topicForm.component';

class Topics extends Component {
  state = {
    showNewTopicForm: false
  };

  componentDidMount() {
    const { loadAll } = this.props;
    loadAll();
  }

  showForm = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      showNewTopicForm: true
    });
  };

  hideForm = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      showNewTopicForm: false
    });
  };

  render() {
    const { addTopic, topics } = this.props;
    const { showNewTopicForm } = this.state;
    return (
      <div>
        <h3>Topics</h3>
        <div className="container text-right">
          {!showNewTopicForm && (
            <a onClick={this.showForm.bind(this)}>
              <span className="fa fa-plus" />
            </a>
          )}
          {showNewTopicForm && (
            <a onClick={this.hideForm.bind(this)}>
              <span className="fa fa-times" />
            </a>
          )}
        </div>
        {showNewTopicForm && <TopicForm submitHandler={addTopic} />}
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
