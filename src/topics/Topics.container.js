import React, { Component } from 'react';
import TopicList from './topicList';
import { connect } from 'react-redux';
import { loadTopics } from './topics.actions';

class Topics extends Component {
  componentDidMount() {
    const { loadAll } = this.props;
    loadAll();
  }

  render() {
    const { topics } = this.props;
    return <TopicList topics={topics} />;
  }
}

const mapStateToProps = state => {
  const {
    topics: { all }
  } = state;
  return {
    topics: all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAll: () => {
      dispatch(loadTopics());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);
