import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { FormsContext } from "./context";
import Buttons from "./Buttons";
import RenderInput from "./Input";
import RenderInputPassword from "./Password";
import RememberMe from "./RememberMe";

import styles from "./styles";
import { required, isEmail, isPassword, isConfirmPassword } from "./validate";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nextDisabled: true };
  }
  componentWillMount() {
    //console.log("SignupForm::componentWillMount");
  }

  componentDidMount() {
    this.context.initDataFromStorage(this.props.dispatch);
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
    const { classes, buttonNext, buttonBack } = this.props;
    const { saveToStorage } = this.context;
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
        <Field
          name="remember"
          label="Remember Me"
          component={RememberMe}
          onChange={event => saveToStorage(event)}
        />
        <Buttons
          buttonBack={buttonBack}
          buttonNext={buttonNext}
          disabled={!this.props.valid}
        />
      </form>
    );
  }
}
SignupForm.contextType = FormsContext;
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

// Pass dispatch to props
SignupForm = connect((state, ownProps) => {
  return { state };
})(SignupForm);

export default SignupForm;
