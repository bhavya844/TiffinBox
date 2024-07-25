import React from "react";

const Alert = ({ message, visible, success}) => {
  if (!visible) return null;
  return (
    <div role="alert" className={success ? "alert alert-success my-3" : "alert alert-error my-3"}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
