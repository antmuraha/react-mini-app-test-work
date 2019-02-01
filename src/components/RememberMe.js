import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class RememberMe extends React.Component {
  render() {
    const { label, title } = this.props;
    const { value, ...input } = this.props.input;
    return (
      <FormControlLabel
        control=<Checkbox checked={value} {...input} color="primary" />
        label={label}
        title={title}
      />
    );
  }
}
