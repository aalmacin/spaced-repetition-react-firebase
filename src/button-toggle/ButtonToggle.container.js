import React, { Component } from 'react';

export default class ButtonToggle extends Component {
  state = {
    show: false
  };

  toggle = e => {
    e.preventDefault();
    const { show } = this.state;

    this.setState({
      ...this.state,
      show: !show
    });
  };

  render() {
    const { children, showIcon, hideIcon } = this.props;
    const { show } = this.state;
    return (
      <div>
        <a onClick={this.toggle.bind(this)}>
          <span className={show ? hideIcon : showIcon} />
        </a>
        {show && children}
      </div>
    );
  }
}
