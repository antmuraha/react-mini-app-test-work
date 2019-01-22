import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import styles from "./styles";

const RenderInputPassword = ({
  input,
  meta,
  name,
  label,
  classes,
  ...rest
}) => {
  //console.log("====", input, meta, label, classes);

  let error = meta.error && meta.touched;
  return (
    <FormControl
      {...input}
      margin="dense"
      className={classNames(classes.margin, classes.textField)}
      fullWidth
      required
    >
      <InputLabel
        htmlFor="adornment-password"
        className={classNames(error && classes.error)}
      >
        {label}
      </InputLabel>
      <Input type="password" margin="dense" />
      <FormHelperText className={classNames(error && classes.error)}>
        {error ? meta.error : ""}
      </FormHelperText>
    </FormControl>
  );
};
export default withStyles(styles)(RenderInputPassword);
