import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditTopicForm from '../EditTopicForm.container';
import ButtonToggle from '../../button-toggle/ButtonToggle.container';

class Topic extends Component {
  render() {
    const { topicName, topicId } = this.props;
    return (
      <span className="container">
        <span className="row">
          <span className="col-6">{topicName}</span>
          <span className="col-6">
            <ButtonToggle showIcon="fa fa-pencil" hideIcon="fa fa-times">
              <EditTopicForm name={topicName} topicId={topicId} />
            </ButtonToggle>
          </span>
        </span>
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
