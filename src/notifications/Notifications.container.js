import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notifications extends Component {
  render() {
    return (
      <div>
        <div role="alert" className="alert alert-danger alert-dismissible">
          Hello
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
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
)(Notifications);
