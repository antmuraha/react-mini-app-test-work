import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { change, registerField } from "redux-form";

import {
  getDataFromsState,
  saveDataToLocaleStorage,
  removeDataLocaleStorage,
  getDataInLocaleStorage,
  isDataInLocaleStorage
} from "./storage/saveLocal";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "./components/styles";

import AppHistory from "./components/AppHistory";
import Progress from "./components/Progress";
import Content from "./components/Content";

import { FormsContext } from "./components/context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.getTitle()
    };
    this.saveToStorage = this.saveToStorage.bind(this);
    this.initDataFromStorage = this.initDataFromStorage.bind(this);
    this.key_ls = "forms_data";
    this.first_load = true;
    this.dispatchApp = false;
    this.remember = false;
  }

  getTitle() {
    return this.props.route === "successful" ? "Thank you!" : "Singup";
  }
  componentDidMount() {
    this.setupBeforeUnloadListener();
  }
  numberPage() {
    let { route } = this.props;
    switch (route) {
      case "signup": {
        return 1;
      }
      case "aboutme": {
        return 2;
      }
      case "successful": {
        return 3;
      }
      default: {
        console.error("Not defined route", route);
      }
    }
  }

  initDataFromStorage(dispatch) {
    if (this.first_load) {
      this.first_load = false;
      this.dispatchApp = dispatch;
      //this.setupBeforeUnloadListener();
      if (isDataInLocaleStorage(this.key_ls)) {
        let data = getDataInLocaleStorage(this.key_ls);
        for (let x in data) {
          let data2 = data[x];
          for (let x2 in data2) {
            this.dispatchApp(registerField(x, x2, "Field"));
            this.dispatchApp(change(x, x2, data2[x2]));
          }
        }
        this.dispatchApp(registerField("signup", "remember", "Field"));
        this.dispatchApp(change("signup", "remember", true));
        this.dispatchApp(registerField("aboutme", "remember", "Field"));
        this.dispatchApp(change("aboutme", "remember", true));
        this.remember = true;
      }
    }
  }

  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", event => {
      event.preventDefault();
      event.returnValue = "1111111111";
      return this.saveToStorage(null, true);
    });
  };

  saveToStorage(event, auto) {
    // HARD CODE How to get dispatch here ???
    if (!auto && !event) {
      return 0;
    }
    let checked = false;
    if (auto) {
      if (this.remember) {
        checked = true;
      }
    } else {
      this.remember = event.target.checked;
      checked = event.target.checked;
    }
    this.dispatchApp(registerField("aboutme", "remember", "Field"));
    this.dispatchApp(change("aboutme", "remember", event, checked));
    if (checked) {
      let data = getDataFromsState(this.props.state);
      saveDataToLocaleStorage(this.key_ls, data);
    } else {
      removeDataLocaleStorage(this.key_ls);
    }
  }

  render() {
    const page = this.numberPage();
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.app}>
          <h3 className={classes.title}>{this.getTitle()}</h3>
          <Progress pages={3} page={page} />
          <FormsContext.Provider
            value={{
              page,
              saveToStorage: this.saveToStorage,
              initDataFromStorage: this.initDataFromStorage
            }}
          >
            <Content />
          </FormsContext.Provider>
          <AppHistory />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  //console.log("App:mapStateToProps", state);
  return {
    state,
    route: state.history.route
  };
}

// Defining mapDispatchToProps as plain object
const mapDispatchToProps = {};
// OR as Function
/*
function mapDispatchToProps(dispatch) {
 //console.log(":mapDispatchToProps");
  return {
    //actionGotoTest: bindActionCreators(actionGotoTest, dispatch)
  };
}
*/

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withStyles(styles)(App);
