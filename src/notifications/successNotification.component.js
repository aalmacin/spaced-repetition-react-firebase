import React from 'react';

const SuccessNotification = props => {
  const { message } = props;
  return (
    <div role="alert" className="alert alert-success alert-dismissible">
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default SuccessNotification;
