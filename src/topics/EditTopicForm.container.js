import React, { Component } from 'react';
import { editTopic } from './topics.actions';
import TopicForm from './topicForm.component';
import { connect } from 'react-redux';

class EditTopicForm extends Component {
  update = ({ name }) => {
    const { editTopic, topicId } = this.props;
    editTopic({ topicId, name });
  };

  render() {
    const { name } = this.props;
    return (
      <div className="container text-right">
        <TopicForm name={name} submitHandler={this.update} />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    editTopic: ({ topicId, name }) => {
      dispatch(editTopic({ topicId, name }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTopicForm);
