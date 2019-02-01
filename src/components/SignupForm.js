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

import { withNamespaces } from "react-i18next";

class SignupForm extends React.PureComponent {
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
  render() {
    const { classes, buttonNext, buttonBack, t } = this.props;
    const { saveToStorage } = this.context;
    return (
      <form className={classNames(classes.form)}>
        <Field
          name="email"
          label={t("Email is required")}
          component={RenderInput}
          validate={[required, isEmail]}
        />
        <Field
          name="password"
          label={t("Password")}
          component={RenderInputPassword}
          validate={[required, isPassword]}
        />
        <Field
          name="confirm"
          label={t("Confirm password")}
          component={RenderInputPassword}
          validate={[required, isConfirmPassword]}
        />
        <Field
          name="remember"
          label={t("Remember Me")}
          component={RememberMe}
          title={t("Save data to the locale storage")}
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

export default withNamespaces()(SignupForm);
