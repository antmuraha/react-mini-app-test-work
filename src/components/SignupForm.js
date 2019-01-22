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
    const { page } = this.context;
   //console.log("FORM SIGN PROPS", this.props, this.context);
    //props.handleSubmit();
    if (!pristine && valid && this.props.password === this.props.confirm) {
     //console.log("SignupForm VALID");
    }
    return (
      <form className={classNames(classes.form)}>
        <Field
          name="MyClass.contextType = MyContext;email"
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
        <Buttons page={page} onSubmit={onSubmit}/>
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
