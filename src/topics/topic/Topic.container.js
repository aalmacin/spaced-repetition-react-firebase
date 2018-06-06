import React, { Component } from 'react';
import { connect } from 'react-redux';

class Topic extends Component {
  render() {
    const { topicName } = this.props;
    return <span>{topicName}</span>;
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
