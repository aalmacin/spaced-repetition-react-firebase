import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Notifications from '../notifications/Notifications.container';
import Auth from '../auth/Auth.container';
import PrivatePages from '../private-pages/privatePages.container';

class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Notifications />
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={PrivatePages} />
          </Switch>
        </div>
      </BrowserRouter>
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
)(MainRouter);
