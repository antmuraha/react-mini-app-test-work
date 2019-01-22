import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const RenderDate = props => {
 //console.log("====FILDS_2", props);
  const classes = props.classes;
  if (props.meta.touched && props.meta.error) {
    props.setError(props.meta.error);
  } else {
    if (props.meta.touched) {
      props.setError("");
    }
  }
  return (
    <input
      {...props.input}
      //      onFocus={props.input.onFocus}
      //      onBlur={props.input.onBlur}
      placeholder={props.placeholder}
      type="text"
      className={classNames(classes.input, {
        [classes.inputMiddle]: props.input.name === "m"
      })}
    />
  );
};
export default withStyles(styles)(RenderDate);
