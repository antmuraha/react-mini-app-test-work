import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import styles from "./styles";

class RenderInputPassword extends React.PureComponent {

  render() {
    console.log("RenderInputPassword");
    const { input, meta, name, label, classes, ...rest } = this.props;
    let error = meta.error && meta.touched;
    return (
      <FormControl
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
        <Input {...input} type="password" margin="dense" />
        <FormHelperText className={classNames(error && classes.error)}>
          {error ? meta.error : ""}
        </FormHelperText>
      </FormControl>
    );
  }
}
export default withStyles(styles)(RenderInputPassword);
