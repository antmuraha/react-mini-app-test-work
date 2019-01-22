import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import styles from "./styles";

const RenderRadio = ({ input, meta, label, labels, classes, ...rest }) => {
  let error = meta.error && meta.touched;
  let lbs = labels.map((val, index) => {
    return (
      <ToggleButton value={val} key={val}>
        {val}
      </ToggleButton>
    );
  });
  return (
    <FormControl required fullWidth>
      <InputLabel className={classNames(classes.formControl)}>
        Gender
      </InputLabel>
      <ToggleButtonGroup {...input} exclusive style={{ display: "flex" }}>
        {lbs}
      </ToggleButtonGroup>
      <FormHelperText className={classNames(error && classes.error)}>
        {error && meta.error}
      </FormHelperText>
    </FormControl>
  );
};
export default withStyles(styles)(RenderRadio);
