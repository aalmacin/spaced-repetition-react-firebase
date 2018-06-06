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
      <div className="container">
        <h2>New Topic</h2>
        <form onSubmit={this.submitHandler.bind(this)}>
          <div className="form-group">
            <label htmlFor="newTopicName">Name</label>
            <input
              className="form-control"
              onChange={this.changeHandler.bind(this)}
              value={this.state.name}
              type="text"
              id="newTopicName"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-control btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
