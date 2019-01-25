import React from "react";
import { Field } from "redux-form";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import RenderDate from "./Date";
import styles from "./styles";

import { required, isNumberInt, date, age } from "./validate";

class RenderFullDate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { error: "" };
    this.setError = this.setError.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  setError(text) {
    this.setState({ error: text });
  }
  setActive(text) {
    this.setState({ active: text });
  }

  render() {
    console.log("====FILDS_1", this.props);
    const { classes } = this.props;
    return (
      <FormControl fullWidth required>
        <InputLabel
          className={classNames(
            classes.formControl,
            this.state.active && classes.active,
            this.state.error && classes.error
          )}
        >
          Date of birth
        </InputLabel>
        <div className={classes.date}>
          <Field
            name="d"
            component={RenderDate}
            placeholder="DD"
            props={{ setError: this.setError, setActive: this.setActive }}
            //setError={this.setError}
            validate={[required, isNumberInt, date, age]}
          />
          <Field
            name="m"
            component={RenderDate}
            placeholder="MM"
            props={{ setError: this.setError, setActive: this.setActive }}
            //setError={this.setError}
            validate={[required, isNumberInt, date, age]}
          />
          <Field
            name="y"
            component={RenderDate}
            placeholder="YY"
            props={{ setError: this.setError, setActive: this.setActive }}
            //setError={this.setError}
            validate={[required, isNumberInt, date, age]}
          />
        </div>
        <FormHelperText className={this.state.error && classes.error}>
          {this.state.error}
        </FormHelperText>
      </FormControl>
    );
  }
}
export default withStyles(styles)(RenderFullDate);
