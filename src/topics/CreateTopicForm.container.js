import React, { Component } from 'react';
import { addTopic } from './topics.actions';
import TopicForm from './topicForm.component';
import { connect } from 'react-redux';
import ButtonToggle from '../button-toggle/ButtonToggle.container';

class CreateTopicForm extends Component {
  render() {
    const { addTopic } = this.props;
    return (
      <div className="container text-right">
        <ButtonToggle showIcon="fa fa-plus" hideIcon="fa fa-times">
          <TopicForm submitHandler={addTopic} />
        </ButtonToggle>
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
