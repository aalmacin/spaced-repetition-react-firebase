import React from 'react';
import PropTypes from 'prop-types';

const TopicList = props => {
  const { topics } = props;
  const topicList = topics.map(topic => {
    return <p key={topic.id}>{topic.name}</p>;
  });
  return <div>{topicList}</div>;
};

PropTypes.propTypes = {
  topics: PropTypes.array.required
};

export default TopicList;
