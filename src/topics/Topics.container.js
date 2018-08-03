import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Topics extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="flex-grow-1" />
          <form className="flex-grow-1 w-50">
            <input
              className="form-control"
              type="text"
              placeholder="Topic Name"
            />

            <input
              className="form-control"
              type="text"
              placeholder="Categories"
            />
            <div className="p-1">
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Science
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Physics
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Science
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Physics
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Science
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Physics
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Science
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Physics
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Science
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Physics
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Science
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Physics
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Science
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Physics
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Science
              </a>
              <a href="#" className="btn btn-sm">
                <span className="fas fa-atom" /> Physics
              </a>
            </div>
            <button className="form-control btn btn-primary">Save</button>
          </form>
          <div className="flex-grow-1" />
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="card p-3 w-25 red m-1">
            <h5 className="card-title">Card Title</h5>
            <div className="card-text">
              <b>Study:</b> 2018-12-24
              <a
                className="btn btn-primary p-1"
                data-toggle="modal"
                data-target="#detailsmodal1"
              >
                View Details
              </a>
              <a
                className="btn btn-primary p-1"
                data-toggle="modal"
                data-target="#studymodal1"
              >
                Start Study
              </a>
            </div>
          </div>
          <div className="card p-3 w-25 green m-1">
            <h5 className="card-title">Card Title</h5>
            <div className="card-text">
              <b>Study:</b> 2018-12-24
              <a className="btn btn-primary p-1">View Details</a>
              <a className="btn btn-primary p-1">Start Study</a>
            </div>
          </div>
          <div className="card p-3 w-25 green m-1">
            <h5 className="card-title">Card Title</h5>
            <div className="card-text">
              <b>Study:</b> 2018-12-24
              <a className="btn btn-primary p-1">View Details</a>
              <a className="btn btn-primary p-1">Start Study</a>
            </div>
          </div>
          <div className="card p-3 w-25 green m-1">
            <h5 className="card-title">Card Title</h5>
            <div className="card-text">
              <b>Study:</b> 2018-12-24
              <a className="btn btn-primary p-1">View Details</a>
              <a className="btn btn-primary p-1">Start Study</a>
            </div>
          </div>
          <div className="card p-3 w-25 green m-1">
            <h5 className="card-title">Card Title</h5>
            <div className="card-text">
              <b>Study:</b> 2018-12-24
              <a className="btn btn-primary p-1">View Details</a>
              <a className="btn btn-primary p-1">Start Study</a>
            </div>
          </div>
          <div className="card p-3 w-25 green m-1">
            <h5 className="card-title">Card Title</h5>
            <div className="card-text">
              <b>Study:</b> 2018-12-24
              <a className="btn btn-primary p-1">View Details</a>
              <a className="btn btn-primary p-1">Start Study</a>
            </div>
          </div>
          <div className="card p-3 w-25 green m-1">
            <h5 className="card-title">Card Title</h5>
            <div className="card-text">
              <b>Study:</b> 2018-12-24
              <a className="btn btn-primary p-1">View Details</a>
              <a className="btn btn-primary p-1">Start Study</a>
            </div>
          </div>
          <div className="card p-3 w-25 green m-1">
            <h5 className="card-title">Card Title</h5>
            <div className="card-text">
              <b>Study:</b> 2018-12-24
              <a className="btn btn-primary p-1">View Details</a>
              <a className="btn btn-primary p-1">Start Study</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Topics.propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);
