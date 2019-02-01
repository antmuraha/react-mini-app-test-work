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

import { withNamespaces } from "react-i18next";

class AboutmeForm extends React.PureComponent {
  render() {
    //console.log("AboutmeForm");
    const { classes, buttonNext, buttonBack, t } = this.props;
    const { saveToStorage } = this.context;
    //console.log("77777777777", this.props, this.context);
    return (
      <form className={classNames(classes.form)}>
        <RenderFullDate
          name="date"
          names={["d", "m", "y"]}
          label={t("Date of birth")}
          placeholders={[t("DD"), t("MM"), t("YYYY")]}
        />
        <Field
          name="gender"
          label={t("Gender")}
          labels={[t("male"), t("female"), t("unspecified")]}
          component={RenderRadio}
          validate={[required]}
        />
        <Field
          name="where"
          label={t("Where did you hear about is?")}
          component={RenderSelect}
          options={[t("Internet"), t("Friends"), t("Newspaper")]}
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
AboutmeForm.contextType = FormsContext;
AboutmeForm = withStyles(styles)(AboutmeForm);

AboutmeForm = reduxForm({
  form: "aboutme",
  destroyOnUnmount: false
})(AboutmeForm);

export default withNamespaces()(AboutmeForm);
