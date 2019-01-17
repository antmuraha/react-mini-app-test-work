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
  console.log("THEME", theme);
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
  console.log("--- validate", values);
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
  console.log("--- warn", values);
  const warnings = {};
  if (values.password < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const RenderInput = ({ input, meta, name, label, ...rest }) => {
  console.log("+++++", meta);
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
  value,
  classes,
  ...rest
}) => {
  console.log("====", input, meta, label, classes);

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
      <Input type="password" margin="dense" value />
      <FormHelperText className={error && classes.error}>
        {error ? meta.error : ""}
      </FormHelperText>
    </FormControl>
  );
};
const RenderInputPasswordStyle = withStyles(styles)(RenderInputPassword);

let SignupForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form style={{ margin: 20 + "px" }}>
      <Field
        name="email"
        label="Email is required"
        component={RenderInput}
        value="11111111"
      />
      <Field
        name="password"
        label="Password"
        value="222222"
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

function mapStateToProps(state) {
  return {
    email: state.signup.email
  };
}

// Defining mapDispatchToProps as plain object
const mapDispatchToProps = {};

SignupForm = reduxForm({
  form: "signup",
  validate,
  warn
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupForm)
);

export default SignupForm;
