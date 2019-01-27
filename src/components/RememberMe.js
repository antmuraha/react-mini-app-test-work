import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class RememberMe extends React.Component {
  render() {
    console.log("RememberMe::render", this.props);
    return (
      <input
        type="checkbox"
        {...this.props.input}
        title="Save data to the locale storage"
      />
    );
  }
}
