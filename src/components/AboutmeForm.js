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
    <label className="name_field">{label}</label>
    {render(input, label, rest)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, label) => <input {...input} />);

const RenderDate = () => {};

const RenderSelect = ({ input, meta, label, options, ...rest }) => {
  let opts = options.map((val, index) => <option key={val}>{val}</option>);
  return (
    <div
      className={[
        meta.error && meta.touched ? "error" : "",
        meta.active ? "active" : ""
      ].join(" ")}
    >
      <label>{label}</label>
      <select {...input}>{opts}</select>
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

const RenderRadio = ({ input, meta, label, labels, ...rest }) => {
  let lbs = labels.map((val, index) => (
    <input name={input.name} type="radio" label={val} key={val} />
  ));
  return (
    <div
      className={[
        meta.error && meta.touched ? "error" : "",
        meta.active ? "active" : ""
      ].join(" ")}
    >
      <label>{label}</label>
      {lbs}
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

let AboutmeForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(() => alert())}>
    <Field name="date_dd" label="Data of birth" component={RenderInput} />
    <Field name="date_mm" label="" component={RenderInput} />
    <Field name="date_yy" label="" component={RenderInput} />
    <Field
      name="gender"
      label="Gender"
      labels={["male", "female", "unspecified"]}
      component={RenderRadio}
    />
    <Field
      name="where"
      label="Where did you hear about is?"
      component={RenderSelect}
      options={["Internet", "Friends", "Newspaper"]}
    />
  </form>
);

AboutmeForm = reduxForm({
  form: "aboutme",
  destroyOnUnmount: false,
  validate
})(AboutmeForm);

export default AboutmeForm;
