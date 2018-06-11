import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isNil } from 'ramda';

class ShowTopic extends Component {
  render() {
    const { selectedTopic } = this.props;
    return (
      <div>
        {!isNil(selectedTopic) ? (
          <div>
            <p>{selectedTopic}</p>
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
  const { selectedTopic } = state.topics;
  return {
    selectedTopic
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTopic);
