import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isNil } from 'ramda';
import EditTopicForm from '../topics/EditTopicForm.container';

class ShowTopic extends Component {
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

  render() {
    const { selectedTopic, selectedTopicId } = this.props;
    const { edit } = this.state;
    return (
      <div>
        {!isNil(selectedTopic) ? (
          <div>
            {edit ? (
              <div>
                <EditTopicForm
                  onSubmit={this.onUpdate}
                  name={selectedTopic}
                  topicId={selectedTopicId}
                />
                <span className="small">
                  <a onClick={this.toggleEdit}>
                    <span className="fa fa-times" />
                    Cancel
                  </a>
                </span>
              </div>
            ) : (
              <div>
                <p>{selectedTopic}</p>
                <span className="small">
                  <a onClick={this.toggleEdit}>
                    <span className="fa fa-pencil" />
                    Edit
                  </a>
                </span>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p>No Topic to show</p>
          </div>
        )}
        <Link to="/topics">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedTopic, selectedTopicId } = state.topics;
  return {
    selectedTopic,
    selectedTopicId
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTopic);
