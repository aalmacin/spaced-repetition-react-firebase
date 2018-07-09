import React, { Component } from 'react';
import { connect } from 'react-redux';

import DangerNotification from './dangerNotification.component';
import SuccessNotification from './successNotification.component';

const DANGER = 'DANGER';

class Notifications extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <div>
        {notifications.map(
          (n, i) =>
            n.type === DANGER ? (
              <DangerNotification key={i} message={n.message} />
            ) : (
              <SuccessNotification key={i} message={n.message} />
            )
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notifications } = state.notifications;
  return {
    notifications
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
