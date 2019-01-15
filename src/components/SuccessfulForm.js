import React from "react";

const SuccessfulForm = () => (
  <React.Fragment>
    <h1>Ok</h1>
    <button onClick={onPress}>Go to Dashboard</button>
  </React.Fragment>
);

let onPress = () => {
  alert("successful");
};

export default SuccessfulForm;
