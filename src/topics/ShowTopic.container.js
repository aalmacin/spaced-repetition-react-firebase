import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import _ from 'lodash';
import EditTopicForm from '../topics/EditTopicForm.container';
import { loadTopics } from './topics.actions';
import Loader from 'react-loader-spinner';

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
    const { topic, savingTopic } = this.props;
    const { edit } = this.state;
    return (
      <div>
        {!savingTopic ? (
          !R.isNil(topic) ? (
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
                  <br />
                  <Link
                    className="btn btn-primary"
                    to={`/topics/${topic.id}/studies/new`}
                  >
                    Start Study
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div>
              <p>No Topic to show</p>
            </div>
          )
        ) : (
          <Loader type="Oval" color="#000" />
        )}
        <Link to="/topics">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { match } = props;
  const { all, savingTopic } = state.topics;
  const topicId = R.head(_.at(match, 'params.topicId'));

  const topic = R.find(r => r.id === topicId)(all);
  return {
    all,
    savingTopic,
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
