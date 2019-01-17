import React from "react";
import { reduxForm, formValueSelector, Field, Fields } from "redux-form";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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
    formControl: {},
    error: { color: theme.palette.error.main },
    date: {
      display: "flex"
    }
  };
};

const validate = values => {
  console.log("--- validate", values);
  const errors = {};
  const requiredFields = ["date", "gender", "where"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

const warn = values => {
  console.log("--- warn", values);
  const warnings = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
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

const RenderInput = createRenderer((input, label) => <input {...input} />);

const RenderDate = fields => {
  console.log("====FILDS", fields);
  const classes = fields.classes;
  const label = fields.label;
  let fls = fields.names.map((val, ind, oo) => {
    return (
      <Input
        {...fields[val].input}
        type="text"
        placeholder="DD"
        margin="dense"
        key={val}
      />
    );
  });
  let error;
  let text_error;
  fields.names.map((val, ind) => {
    text_error = fields[val].meta.error;
    return (error = fields[val].meta.error && fields[val].meta.touched);
  });

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
      <div className={classNames(classes.date)}>{fls}</div>
      <FormHelperText className={classNames(error && classes.error)}>
        {error ? text_error : ""}
      </FormHelperText>
    </FormControl>
  );
};
const RenderDateStyle = withStyles(styles)(RenderDate);

const RenderSelect = ({
  input,
  meta,
  label,
  options,
  value,
  classes,
  ...rest
}) => {
  console.log("$$$$$$$$", input, meta, label, options, classes);
  let opts = options.map((val, index) => (
    <MenuItem value={index + 1} key={index}>
      {val}
    </MenuItem>
  ));
  let error = meta.error && meta.touched;
  return (
    <FormControl className={classes.formControl} required fullWidth>
      <InputLabel htmlFor="adornment-password">{label}</InputLabel>
      <Select {...input} className={classes.selectEmpty}>
        {opts}
      </Select>
      <FormHelperText className={error && classes.error}>
        {error && meta.error}
      </FormHelperText>
    </FormControl>
  );
};
const RenderSelectStyle = withStyles(styles)(RenderSelect);

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

class AboutmeForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("77777777777", this.props);
    return (
      <form style={{ margin: 20 + "px" }}>
        <Fields
          names={["dd", "mm", "yy"]}
          label="Data of birth"
          component={RenderDateStyle}
        />
        <Field
          name="gender"
          label="Gender"
          labels={["male", "female", "unspecified"]}
          component={RenderRadio}
        />
        <Field
          name="where"
          label="Where did you hear about is?"
          component={RenderSelectStyle}
          options={["Internet", "Friends", "Newspaper"]}
        />
      </form>
    );
  }
}

const selector = formValueSelector("aboutme");

AboutmeForm = connect(state => selector(state, "date_dd", "gender", "where"))(
  AboutmeForm
);

AboutmeForm = reduxForm({
  form: "aboutme",
  destroyOnUnmount: false,
  initialValues: {
    date_dd: "",
    date_mm: "",
    date_yy: "",
    gender: false,
    where: false
  },
  validate
})(AboutmeForm);

export default AboutmeForm;
