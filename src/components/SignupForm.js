import React from "react";
import { reduxForm, Field } from "redux-form";
import isValidEmail from "sane-email-validation";

const validate = values => {
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

const createRenderer = render => ({ input, meta, label, ...rest }) => (
  <div
    className={[
      meta.error && meta.touched ? "error" : "",
      meta.active ? "active" : ""
    ].join(" ")}
  >
    <label>{label}</label>
    {render(input, label, rest)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, label) => (
  <input {...input} placeholder={label} />
));

let SignupForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(() => alert())}>
    <Field name="email" label="Email is required" component={RenderInput} />
    <Field name="password" label="Password" component={RenderInput} />
    <Field name="confirm" label="Confirm password" component={RenderInput} />
  </form>
);

SignupForm = reduxForm({
  form: "signup",
  destroyOnUnmount: false,
  validate
})(SignupForm);

export default SignupForm;
