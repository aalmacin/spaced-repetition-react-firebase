import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import _ from 'lodash';
import EditTopicForm from '../topics/EditTopicForm.container';
import { loadTopics } from './topics.actions';

class ShowTopic extends Component {
  state = {
    edit: false
  };

  componentDidMount() {
    const { loadedTopics, loadAll } = this.props;

    if (!loadedTopics) loadAll();
  }

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
    const { topic } = this.props;
    const { edit } = this.state;
    return (
      <div>
        {!R.isNil(topic) ? (
          <div>
            {edit ? (
              <div>
                <EditTopicForm
                  onSubmit={this.onUpdate}
                  name={topic.name}
                  topicId={topic.id}
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
                <p>{topic.name}</p>
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

const mapStateToProps = (state, props) => {
  const { match } = props;
  const { all } = state.topics;
  const topicId = R.head(_.at(match, 'params.topicId'));

  const topic = R.find(r => r.id === topicId)(all);
  return {
    all,
    topic
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAll: () => dispatch(loadTopics())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTopic);
