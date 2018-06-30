import React, { Component } from 'react';
import { editTopic } from './topics.actions';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';

class EditTopicForm extends Component {
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

  update = ({ name }) => {
    const { topicService, editTopic, topicId, onSubmit } = this.props;
    editTopic({ topicService, topicId, name });
    onSubmit();
  };

  submitHandler = e => {
    e.preventDefault();

    this.update({ name: this.state.name });
  };

  changeHandler = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  render() {
    return (
      <div className="container text-right">
        <form onSubmit={this.submitHandler.bind(this)}>
          <div className="form-row">
            <div className="col-auto form-group">
              <input
                className="form-control form-control-sm"
                onChange={this.changeHandler.bind(this)}
                value={this.state.name}
                type="text"
                id="topicName"
              />
            </div>
            <div className="col-auto form-group">
              <button
                type="submit"
                className="btn btn-sm form-control-sm form-control btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { topicService } = state;
  return {
    topicService
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTopic: ({ topicService, topicId, name }) => {
      dispatch(editTopic({ topicService, topicId, name }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTopicForm);
