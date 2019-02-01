// @flow
import React from "react";
import i18n from "./i18n";
import { withNamespaces } from "react-i18next";

class SwithLocale extends React.Component {
  changeLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }
  render() {
    const App = this.props.app;
    return (
      <React.Fragment>
        <App />
        Language
        <select onChange={event => this.changeLanguage(event)}>
          <option value="en">EN</option>
          <option value="ua">UA</option>
          <option value="ru">RU</option>
        </select>
      </React.Fragment>
    );
  }
}

export default SwithLocale;
