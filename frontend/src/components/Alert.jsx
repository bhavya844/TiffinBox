import React from "react";

const Alert = ({ message, visible}) => {
  if (!visible) return null;
  return (
    <div role="alert" className={"alert alert-success my-3"}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
