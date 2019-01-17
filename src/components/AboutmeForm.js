import React from "react";
import { reduxForm, Field } from "redux-form";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const validate = values => {
  const errors = {};
  if (!values.date_dd) {
    errors.date_dd = "Required";
  }
  if (!values.date_mm) {
    errors.date_mm = "Required";
  }
  if (!values.date_yy) {
    errors.date_yy = "Required";
  }
  if (!values.gender) {
    errors.gender = "Required";
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
  let state = { val: false };
  let lbs = labels.map((val, index) => {
    console.log("++++++++", val, index);
    return <Tab data-value={index.toString()} label={val} key={val} />;
  });
  return (
    <Tabs
      {...input}
      {...rest}
      value={state.val}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      onChange={(event, value) => {
        console.log(state);
        state.val = value;
      }}
    >
      {lbs}
    </Tabs>
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
      options={["", "Internet", "Friends", "Newspaper"]}
    />
  </form>
);

AboutmeForm = reduxForm({
  form: "aboutme",
  destroyOnUnmount: false,
  validate
})(AboutmeForm);

export default AboutmeForm;
