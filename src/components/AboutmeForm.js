import React from "react";
import { reduxForm, Field } from "redux-form";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { FormsContext } from "./context";
import Buttons from "./Buttons";
import styles from "./styles";
import { required } from "./validate";

import RenderFullDate from "./FullDate";
import RenderRadio from "./Radio";
import RenderSelect from "./Select";
import RememberMe from "./RememberMe";

class AboutmeForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    //console.log("AboutmeForm::shouldComponentUpdate", nextProps, nextState);
    // fix re-rendering form
    if (nextProps.valid !== this.props.valid) {
      return true;
    }
    return false;
  }
  render() {
    //console.log("AboutmeForm");
    const { classes, buttonNext, buttonBack } = this.props;
    const { saveToStorage } = this.context;
    //console.log("77777777777", this.props, this.context);
    return (
      <form className={classNames(classes.form)}>
        <RenderFullDate
          name="date"
          names={["d", "m", "y"]}
          placeholders={["DD", "MM", "YYYY"]}
        />
        <Field
          name="gender"
          label="Gender"
          labels={["male", "female", "unspecified"]}
          component={RenderRadio}
          validate={[required]}
        />
        <Field
          name="where"
          label="Where did you hear about is?"
          component={RenderSelect}
          options={["Internet", "Friends", "Newspaper"]}
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
AboutmeForm.contextType = FormsContext;
AboutmeForm = withStyles(styles)(AboutmeForm);

AboutmeForm = reduxForm({
  form: "aboutme",
  destroyOnUnmount: false
})(AboutmeForm);

export default AboutmeForm;
