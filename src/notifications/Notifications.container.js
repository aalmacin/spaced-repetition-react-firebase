import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as R from 'ramda';
import DangerNotification from './dangerNotification.component';
import SuccessNotification from './successNotification.component';

const DANGER = 'DANGER';

class Notifications extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <div>
        {notifications.map(
          n =>
            n.type === DANGER ? (
              <DangerNotification message={n.message} />
            ) : (
              <SuccessNotification message={n.message} />
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
