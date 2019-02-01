import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import styles from "./styles";

class RenderInput extends React.PureComponent {
  render() {
   //console.log("RenderInput");
    const { input, meta, label } = this.props;
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
        className={classNames()}
      />
    );
  }
}
export default withStyles(styles)(RenderInput);
