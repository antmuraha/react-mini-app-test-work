import React from "react";
import {
  reduxForm,
  formValueSelector,
  Field,
  Fields,
  FormSection
} from "redux-form";
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
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

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
      display: "flex",
      "flex-direction": "row"
    }
  };
};
const validateTest = (value, allValues, props, name) => {
  console.log("TESTVALIDAT", value, allValues, props, name);
  return value || typeof value === "number" ? undefined : "Required";
};
const validate = values => {
  console.log("--- validate", values);
  const errors = {};
  const requiredFields = ["date.d", "date.m", "date.y", "gender", "where"];
  requiredFields.forEach(field => {
    let name, subname;
    if (field.indexOf(".") !== -1) {
      let names = field.split(".");
      if (names.length < 2) {
        console.error("Validate. Error index Field", field);
      }
      name = names[0];
      subname = names[1];
    } else {
      name = field;
    }
    if (subname) {
      if (!errors[name]) {
        errors[name] = {};
      }
      if (values[name]) {
        if (!values[name][subname]) {
          errors[name][subname] = "Required";
        }
      } else {
        errors[name][subname] = "Required";
      }
    } else {
      if (!values[name]) {
        errors[name] = "Required";
      }
    }
  });
  console.log("ERROR", errors);
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

class RenderFullDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
    this.setError = this.setError.bind(this);
  }
  fields() {
    return this.props.names.map((value, index) => {
      console.log("===MAP", value, index);
      return (
        <Field
          name={value}
          component={RenderDateStyle}
          placeholder={this.props.placeholders[index]}
          key={index}
          setError={this.setError}
          validate={[validateTest]}
        />
      );
    });
  }

  setError(text) {
    this.setState({ error: text });
  }

  render() {
    console.log("====FILDS_1", this.props);
    const { classes, label, name, names, placeholders } = this.props;
    return (
      <FormSection name={name} label="Data of birth">
        <FormControl fullWidth>
          <InputLabel shrink margin="dense">
            Date of birth
          </InputLabel>
          <div className={classes.date}>{this.fields()}</div>
          <FormHelperText>{this.state.error}</FormHelperText>
        </FormControl>
      </FormSection>
    );
  }
}
const RenderFullDateStyle = withStyles(styles)(RenderFullDate);

const RenderDate = props => {
  console.log("====FILDS_2", props);
  const classes = props.classes;
  const label = props.label;
  if (props.meta.error) {
    props.setError(props.meta.error);
  } else {
    props.setError("");
  }
  return (
    <Input
      //value={props.input.value}
      onChange={props.input.onChange}
      //      onFocus={props.input.onFocus}
      //      onBlur={props.input.onBlur}
      placeholder={props.placeholder}
      type="text"
    />
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
    <FormControl className={classNames(classes.formControl)} required fullWidth>
      <InputLabel htmlFor="age-helper">{label}</InputLabel>
      <Select {...input} className={classNames(classes.selectEmpty)}>
        {opts}
      </Select>
      <FormHelperText className={classNames(error && classes.error)}>
        {error && meta.error}
      </FormHelperText>
    </FormControl>
  );
};
const RenderSelectStyle = withStyles(styles)(RenderSelect);

const RenderRadio = ({ input, meta, label, labels, ...rest }) => {
  let state = { val: false };
  let lbs = labels.map((val, index) => {
    return (
      <ToggleButton value={val} key={val}>
        {val}
      </ToggleButton>
    );
  });
  return (
    <ToggleButtonGroup {...input} exclusive>
      {lbs}
    </ToggleButtonGroup>
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
        <RenderFullDateStyle
          name="date"
          names={["d", "m", "y"]}
          placeholders={["DD", "MM", "YYYY"]}
        />
        <Field
          name="gender"
          label="Gender"
          labels={["male", "female", "unspecified"]}
          component={RenderRadio}
          validate={[validateTest]}
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

AboutmeForm = reduxForm({
  form: "aboutme",
  destroyOnUnmount: false,
  initialValues: {
    //date:{mm:2},
    gender: false,
    where: false,
    date: { d: "", m: "" }
  }
  //validate
})(AboutmeForm);

export default AboutmeForm;
