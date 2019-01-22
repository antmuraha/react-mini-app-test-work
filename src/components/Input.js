import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import styles from "./styles";

const RenderInput = ({ input, meta, name, label, ...rest }) => {
  //console.log("+++++", meta);
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
};
export default withStyles(styles)(RenderInput);
