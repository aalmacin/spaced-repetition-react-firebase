import React, { Component } from 'react';
import { addTopic } from './topics.actions';
import TopicForm from './topicForm.component';
import { connect } from 'react-redux';

class CreateTopicForm extends Component {
  state = {
    showNewTopicForm: false
  };

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
    const { showNewTopicForm } = this.state;
    const { addTopic } = this.props;
    return (
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

        {showNewTopicForm && <TopicForm submitHandler={addTopic} />}
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTopic: ({ name }) => {
      dispatch(addTopic({ name }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTopicForm);
