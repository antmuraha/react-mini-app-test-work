import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "./components/styles";

import AppHistory from "./components/AppHistory";
import Progress from "./components/Progress";
import Content from "./components/Content";

import { PageContext } from "./components/context";

class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      title: this.getTitle()
    };
  }

  getTitle() {
    return this.props.route === "successful" ? "Thank you!" : "Singup";
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
  render() {
    const page = this.numberPage();
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.app}>
          <h3 className={classes.title}>{this.getTitle()}</h3>
          <Progress pages={3} page={page} />
          <PageContext.Provider value={{ page }}>
            <Content />
          </PageContext.Provider>
          <AppHistory />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  //console.log("App:mapStateToProps", state);
  return {
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
