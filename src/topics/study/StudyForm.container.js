import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStudy } from './study.actions';
import * as R from 'ramda';
import _ from 'lodash';
import { Loader } from 'react-loader-spinner';

class StudyForm extends Component {
  state = {
    topicId: null,
    minutes: '',
    difficulty: 5
  };

  componentWillMount() {
    const topicId = R.head(_.at(this.props, 'match.params.topicId'));
    if (R.isNil(topicId)) throw new Error('Topic Id does not exist');
    this.setState({
      ...this.state,
      topicId
    });
  }

  minutesChangeHandler = e =>
    this.setState({ ...this.state, minutes: e.target.value });
  difficultyChangeHandler = e =>
    this.setState({ ...this.state, difficulty: e.target.value });

  submitHandler = e => {
    e.preventDefault();
    const { saveNewStudy } = this.props;
    const { topicId, minutes, difficulty } = this.state;
    saveNewStudy({ topicId, minutes, difficulty });
    this.setState({
      ...this.state,
      minutes: '',
      difficulty: 5
    });
  };

  render() {
    const { savingStudy, topicId } = this.state;
    return (
      <div>
        <h3>Study</h3>
        <div>
          {!savingStudy ? (
            <form onSubmit={this.submitHandler.bind(this)}>
              <label>Study minutes</label>
              <input type="hidden" name="topicId" value={topicId} />
              <input
                type="number"
                onChange={this.minutesChangeHandler.bind(this)}
                value={this.state.minutes}
                name="minutes"
                className="form-control"
              />
              <label>Difficulty</label>
              <select
                onChange={this.difficultyChangeHandler.bind(this)}
                name="difficulty"
                className="form-control"
              >
                <option value={5}>VERY EASY</option>
                <option value={4}>EASY</option>
                <option value={3}>MEDIUM</option>
                <option value={2}>HARD</option>
                <option value={1}>VERY HARD</option>
              </select>
              <button className="btn btn-primary form-control">
                Save Study
              </button>
            </form>
          ) : (
            <Loader type="Oval" color="#000" />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    study: { savingStudy }
  } = state;
  return {
    savingStudy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveNewStudy: data => dispatch(saveStudy(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyForm);
