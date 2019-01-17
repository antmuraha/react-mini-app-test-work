import React from "react";
import { reduxForm, Field } from "redux-form";
import isValidEmail from "sane-email-validation";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  }
});

const validate = values => {
  console.log("==validate", values);
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Invalid Email";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirm) {
    errors.confirm = "Required";
  }
  return errors;
};

const testValidate = value => {
  console.log("==testValidate", value);
  return value || typeof value === "number" ? undefined : "Required";
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const RenderInput = ({ input, meta, name, label, ...rest }) => {
  let error = meta.error && meta.touched && meta.error;
  return (
    <TextField
      {...input}
      label={label}
      margin="dense"
      error={error}
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
  console.log("====", input, meta, label, classes);

  let error = meta.error && meta.touched;
  return (
    <FormControl className={classNames(classes.margin, classes.textField)}>
      <InputLabel htmlFor="adornment-password">{label}</InputLabel>
      <Input type="password" fullWidth margin="dense" error={error} />
      <FormHelperText className={classNames("error")}>
        {error ? meta.error : ""}
      </FormHelperText>
    </FormControl>
  );
};
const RenderInputPasswordStyle = withStyles(styles)(RenderInputPassword);

let SignupForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form style={{margin:20+"px"}}>
      <Field name="email" label="Email is required" component={RenderInput} />
      <Field
        name="password"
        label="Password"
        component={RenderInputPasswordStyle}
        validate={[testValidate]}
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
  warn
})(SignupForm);

export default SignupForm;
