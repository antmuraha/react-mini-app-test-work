import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => {
  //console.log("THEME", theme);
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      //margin: theme.spacing.unit
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 3
    },
    textField: {
      flexBasis: 200
    },
    error: { color: theme.palette.error.main }
  };
};

const validate = values => {
  //console.log("--- validate", values);
  const errors = {};
  const requiredFields = ["email", "password", "confirm"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email";
  }
  if (values.password && values.password.length < 6) {
    errors.password = "Password should be minimum 6 characters long";
  } else {
    if (values.password !== values.confirm) {
      errors.confirm = "The passwords do not match";
    }
  }
  return errors;
};

const warn = values => {
  //console.log("--- warn", values);
  const warnings = {};

  return warnings;
};

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
const RenderInputPasswordStyle = withStyles(styles)(RenderInputPassword);

let SignupForm = props => {
  const { error, handleSubmit, pristine, reset, submitting, valid } = props;
  console.log("FORM SIGN PROPS", props);
  return (
    <form style={{ margin: 20 + "px" }}>
      <Field name="email" label="Email is required" component={RenderInput} />
      <Field
        name="password"
        label="Password"
        component={RenderInputPasswordStyle}
      />
      <Field
        name="confirm"
        label="Confirm password"
        component={RenderInputPasswordStyle}
      />
    </form>
  );
};

SignupForm = reduxForm({
  form: "signup",
  validate,
  warn,
  destroyOnUnmount: false
  //  enableReinitialize:true,
  //  keepDirtyOnReinitialize:true,
  //  updateUnregisteredFields:true
})(SignupForm);

export default SignupForm;
