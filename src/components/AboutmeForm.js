import React from "react";
import { reduxForm, formValueSelector, Field } from "redux-form";
import { connect } from "react-redux";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { PageContext } from "./context";
import Buttons from "./Buttons";
import styles from "./styles";
import { required } from "./validate";

import RenderFullDate from "./FullDate";
import RenderRadio from "./Radio";
import RenderSelect from "./Select";

class AboutmeForm extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("AboutmeForm::shouldComponentUpdate", nextProps, nextState);
    // fix re-rendering form
    return false;
  }
  render() {
    console.log("AboutmeForm");
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
        <Buttons page={page} onSubmit={onSubmit} />
      </form>
    );
  }
}
AboutmeForm.contextType = PageContext;
AboutmeForm = withStyles(styles)(AboutmeForm);

AboutmeForm = reduxForm({
  form: "aboutme",
  destroyOnUnmount: false,
  initialValues: {
    d: "",
    m: "",
    y: "",
    gender: false,
    where: false
  }
  //validate
})(AboutmeForm);

const selector = formValueSelector("aboutme");
AboutmeForm = connect(state => {
  const values = selector(state, "d", "m", "y", "gender", "where");
  return { data_form: values };
})(AboutmeForm);

export default AboutmeForm;
