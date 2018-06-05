import React, { Component } from 'react';

export default class TopicForm extends Component {
  state = {
    name: ''
  };

  changeHandler = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    const { submitHandler } = this.props;
    const { name } = this.state;
    submitHandler({
      name
    });

    this.setState({
      ...this.state,
      name: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <p>New Topic</p>
        <input
          onChange={this.changeHandler.bind(this)}
          value={this.state.name}
          type="text"
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}
