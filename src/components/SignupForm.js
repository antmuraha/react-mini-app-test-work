import React from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
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

const required = (value, allValues, props, name) => {
  console.log("TESTVALIDAT", value, allValues, props, name);
  return value || typeof value === "number" ? undefined : "Required";
};

const isEmail = (value, allValues, props, name) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "Should be a correct email";
  }
};

const isPassword = (value, allValues, props, name) => {
  if (value && value.length < 6) {
    return "Password should be minimum 6 characters long";
  }
};
const isConfirmPassword = (value, allValues, props, name) => {
  console.log("isConfirmPassword", value, allValues, props, name);
  if (value !== allValues.password) {
    return "The passwords do not match";
  }
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
  const {
    error,
    handleSubmit,
    onSubmit,
    pristine,
    reset,
    submitting,
    valid
  } = props;
  console.log("FORM SIGN PROPS", props);
  //props.handleSubmit();
  if (!pristine && valid && props.password == props.confirm) {
    console.log("SignupForm VALID");
  }
  return (
    <form style={{ margin: 20 + "px" }}>
      <button onClick={onSubmit} />
      <Field
        name="email"
        label="Email is required"
        component={RenderInput}
        validate={[required, isEmail]}
      />
      <Field
        name="password"
        label="Password"
        component={RenderInputPasswordStyle}
        validate={[required, isPassword]}
      />
      <Field
        name="confirm"
        label="Confirm password"
        component={RenderInputPasswordStyle}
        validate={[required, isConfirmPassword]}
      />
    </form>
  );
};

SignupForm = reduxForm({
  form: "signup",
  //  validate,
  //  warn,
  destroyOnUnmount: false,
  initialValues: {
    email: "",
    password: "",
    confirm: ""
  }
})(SignupForm);

const selector = formValueSelector("signup");
SignupForm = connect(state => {
  const values = selector(state, "email", "password", "confirm");
  return { data_form: values };
})(SignupForm);

export default SignupForm;
