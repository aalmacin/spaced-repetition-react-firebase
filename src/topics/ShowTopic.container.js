import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { filter, head, isEmpty, isNil } from 'ramda';
import EditTopicForm from '../topics/EditTopicForm.container';
import { at } from 'lodash';
import { loadTopics } from './topics.actions';

class ShowTopic extends Component {
  state = {
    edit: false
  };

  componentDidMount() {
    const { all, loadAll } = this.props;

    if (isEmpty(all)) loadAll();
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
        {!isNil(topic) ? (
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
  const topicId = head(at(match, 'params.topicId'));

  const topic = head(filter(topic => topic.id === topicId, all));
  return {
    all,
    topic
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { topicService } = props;
  return {
    loadAll: () => dispatch(loadTopics({ topicService }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTopic);
