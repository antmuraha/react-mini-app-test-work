import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import styles from "./styles";

class RenderRadio extends React.Component {
  lbs() {
    return this.props.labels.map((val, index) => {
      return (
        <ToggleButton
          value={val}
          key={val}
          classes={{ label: this.props.classes.toggleButton }}
        >
          {val}
        </ToggleButton>
      );
    });
  }
  render() {
    const { input, meta, classes, label } = this.props;
    const error = meta.error && meta.touched;
    return (
      <FormControl required fullWidth>
        <InputLabel className={classNames(classes.formControl)}>
          {label}
        </InputLabel>
        <ToggleButtonGroup {...input} exclusive style={{ display: "flex" }}>
          {this.lbs()}
        </ToggleButtonGroup>
        <FormHelperText className={classNames(error && classes.error)}>
          {error && meta.error}
        </FormHelperText>
      </FormControl>
    );
  }
}
export default withStyles(styles)(RenderRadio);
