import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../nav/Nav.container';
import { Route, Switch } from 'react-router';
import Home from '../home/Home.container';
import Topics from '../topics/Topics.container';

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/topics" component={Topics} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
