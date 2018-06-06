import React from 'react';
import PropTypes from 'prop-types';

const TopicList = props => {
  const { topics } = props;
  const topicList = topics.map(topic => {
    return (
      <li className="list-group-item" key={topic.id}>
        {topic.name}
      </li>
    );
  });
  return <ul className="list-group">{topicList}</ul>;
};

PropTypes.propTypes = {
  topics: PropTypes.array.required
};

export default TopicList;
