import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import styles from "./styles";

const RenderSelect = ({
  input,
  meta,
  label,
  options,
  value,
  classes,
  ...rest
}) => {
 //console.log("$$$$$$$$", input, meta, label, options, classes);
  let opts = options.map((val, index) => (
    <MenuItem value={index + 1} key={index}>
      {val}
    </MenuItem>
  ));
  let error = meta.error && meta.touched;
  return (
    <FormControl fullWidth>
      <InputLabel className={classNames(classes.formControl)}>
        {label}
      </InputLabel>
      <Select
        {...input}
        style={{ marginTop: 0 + "px" }}
        className={classNames(classes.formControl)}
      >
        {opts}
      </Select>
      <FormHelperText className={classNames(error && classes.error)}>
        {error && meta.error}
      </FormHelperText>
    </FormControl>
  );
};
export default withStyles(styles)(RenderSelect);
