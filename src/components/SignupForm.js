import React from "react";
import { reduxForm, Field } from "redux-form";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { PageContext } from "./context";
import Buttons from "./Buttons";
import RenderInput from "./Input";
import RenderInputPassword from "./Password";

import styles from "./styles";
import { required, isEmail, isPassword, isConfirmPassword } from "./validate";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nextDisabled: true };
    this.next = "asdasd";
  }
  componentWillMount() {
    //console.log("SignupForm::componentWillMount");
  }
  componentDidMount() {
    //console.log("SignupForm::componentDidMount", this.props);
  }
  componentWillUnmount() {
    //console.log("SignupForm::componentWillUnmount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    /*
   //console.log(
      "SignupForm::componentDidUpdate",
      prevProps,
      prevState,
      snapshot
    );
    */
  }
  shouldComponentUpdate(nextProps, nextState) {
    /*
   //console.log(
      "SignupForm::shouldComponentUpdate",
      nextProps,
      nextState,
      this.props
    );
    */
    // fix re-rendering form
    if (nextProps.valid !== this.props.valid) {
      return true;
    }
    return false;
  }

  render() {
    const { classes } = this.props;
    const { page } = this.context;
    ////console.log("SignupForm", this.props, this.context);
    return (
      <form className={classNames(classes.form)}>
        <Field
          name="email"
          label="Email is required"
          component={RenderInput}
          validate={[required, isEmail]}
        />
        <Field
          name="password"
          label="Password"
          component={RenderInputPassword}
          validate={[required, isPassword]}
        />
        <Field
          name="confirm"
          label="Confirm password"
          component={RenderInputPassword}
          validate={[required, isConfirmPassword]}
        />
        <Buttons page={page} disabled={!this.props.valid} />
      </form>
    );
  }
}
SignupForm.contextType = PageContext;
SignupForm = withStyles(styles)(SignupForm);

SignupForm = reduxForm({
  form: "signup",
  destroyOnUnmount: false,
  initialValues: {
    email: "test@mysite.com",
    password: "111111",
    confirm: "111111"
  }
})(SignupForm);

export default SignupForm;
