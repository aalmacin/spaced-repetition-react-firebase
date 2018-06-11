import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditTopicForm from '../EditTopicForm.container';
import { selectTopic } from '../topics.actions';
import { Link } from 'react-router-dom';

class Topic extends Component {
  state = {
    edit: false
  };

  toggleEdit = () => {
    this.setState({
      ...this.state,
      edit: !this.state.edit
    });
  };

  onUpdate = () => {
    this.setState({
      ...this.state,
      edit: false
    });
  };

  clickTopic = () => {
    const { dispatchSelectTopic, topicName, topicId } = this.props;
    dispatchSelectTopic({ topicName, topicId });
  };

  render() {
    const { topicName, topicId } = this.props;
    const { edit } = this.state;
    return (
      <span className="container">
        <span className="row">
          <span className="col-10">
            {!edit && (
              <div className="container">
                <Link to="/topics/show" onClick={this.clickTopic.bind(this)}>
                  {topicName}
                </Link>
              </div>
            )}
            {edit && (
              <EditTopicForm
                onSubmit={this.onUpdate}
                name={topicName}
                topicId={topicId}
              />
            )}
          </span>
          <span className="col">
            <a onClick={this.toggleEdit.bind(this)}>
              <span className={edit ? 'fa fa-times' : 'fa fa-pencil'} />
            </a>
          </span>
        </span>
      </span>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchSelectTopic: ({ topicName, topicId }) =>
      dispatch(
        selectTopic({ selectedTopic: topicName, selectedTopicId: topicId })
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
