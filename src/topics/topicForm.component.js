import React, { Component } from 'react';
import { isEmpty } from 'ramda';

export default class TopicForm extends Component {
  state = {
    name: ''
  };

  componentWillMount() {
    const { name } = this.props;
    if (!isEmpty(name))
      this.setState({
        ...this.state,
        name
      });
  }

  changeHandler = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    const { submitHandler, clearAfterSave } = this.props;
    const { name } = this.state;
    submitHandler({
      name
    });

    if (clearAfterSave) {
      this.setState({
        ...this.state,
        name: ''
      });
    }
  };

  render() {
    return (
      <div className="container text-left">
        <form onSubmit={this.submitHandler.bind(this)}>
          <div className="form-group">
            <label htmlFor="topicName">Name</label>
            <input
              className="form-control"
              onChange={this.changeHandler.bind(this)}
              defaultValue={this.state.name}
              type="text"
              id="topicName"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-control btn btn-primary">
              Save
            </button>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}
