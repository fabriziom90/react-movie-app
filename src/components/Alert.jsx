import React from "react";

const Alert = (alert) => {
  return (
    <>
      {alert.show && (
        <div className={`alert alert-${alert.status}`}>{alert.message}</div>
      )}
    </>
  );
};

export default Alert;
