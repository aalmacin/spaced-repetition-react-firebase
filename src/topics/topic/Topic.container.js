import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditTopicForm from '../EditTopicForm.container';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

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

  render() {
    const { topicName, topicId, savingTopic } = this.props;
    const { edit } = this.state;
    return (
      <span className="container">
        <span className="row">
          <span className="col-10">
            {!edit &&
              (!savingTopic ? (
                <div className="container">
                  <Link to={`/topics/${topicId}/show`}>{topicName}</Link>
                </div>
              ) : (
                <Loader type="Oval" color="#000" />
              ))}
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

const mapStateToProps = state => {
  const {
    topics: { savingTopic }
  } = state;
  return {
    savingTopic
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
