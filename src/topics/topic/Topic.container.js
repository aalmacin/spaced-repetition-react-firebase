import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditTopicForm from '../EditTopicForm.container';

class Topic extends Component {
  render() {
    const { topicName, topicId } = this.props;
    return (
      <span>
        {topicName}
        <EditTopicForm name={topicName} topicId={topicId} />
      </span>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
