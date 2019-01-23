import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import styles from "./styles";

class RenderInput extends React.Component {
  shouldComponentUpdate(nextProps, nextState, context) {
    console.log(
      "RenderInput::shouldComponentUpdate",
      nextProps,
      nextState,
      context
    );
    // fix re-rendering
    if (
      nextProps.input.value != this.props.input.value ||
      nextProps.meta.error != this.props.meta.error ||
      nextProps.meta.active != this.props.meta.active
    ) {
      return true;
    }
    return false;
  }
  render() {
    console.log("RenderInput");
    const { input, meta, name, label, ...rest } = this.props;
    let error = meta.error && meta.touched && meta.error;
    return (
      <TextField
        {...input}
        label={label}
        margin="dense"
        error={!!error}
        fullWidth
        required
        helperText={error}
      />
    );
  }
}
export default withStyles(styles)(RenderInput);
