import React from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";

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
  }
  componentWillMount() {
    console.log("SignupForm::componentWillMount");
  }
  componentDidMount() {
    console.log("SignupForm::componentDidMount", this.props);
  }
  componentWillUnmount() {
    console.log("SignupForm::componentWillUnmount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "SignupForm::componentDidUpdate",
      prevProps,
      prevState,
      snapshot
    );
    this.isValidForm(this.props, "did");
  }
  componentWillUnmount() {
    console.log("SignupForm::componentWillUnmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "SignupForm::shouldComponentUpdate",
      nextProps,
      nextState,
      this.props
    );
    this.isValidForm(nextProps, "should");
    // fix re-rendering form
    return false;
  }
  isValidForm(props, func) {
    console.log(0, props);
    if (!props.pristine && props.valid) {
      console.log(1);
      if (this.state.nextDisabled) {
        console.log(2);
        this.context.setValidDate(props.form, {
          email: props.data_form.email,
          password: props.data_form.password
        });
        this.setState((state, props) => {
          return { nextDisabled: false };
        });
      }
    } else {
      console.log(3, this.state, props);
      !this.state.nextDisabled &&
        this.setState((state, props) => {
          if (!state.nextDisabled) {
            return { nextDisabled: true };
          } else {
            return {};
          }
        });
    }
  }
  render() {
    const {
      error,
      handleSubmit,
      onSubmit,
      pristine,
      reset,
      submitting,
      valid,
      classes
    } = this.props;
    const { page, forms, setValidDate } = this.context;
    console.log("SignupForm", this.props, this.context);
    //props.handleSubmit();
    if (!pristine && valid && this.props.password === this.props.confirm) {
      //console.log("SignupForm VALID");
    }
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
        <Buttons page={page} disabled={this.state.nextDisabled} />
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
