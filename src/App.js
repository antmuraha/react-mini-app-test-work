import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./App.css";

import AppHistory from "./components/AppHistory";
import Progress from "./components/Progress";
import Footer from "./components/Footer";
import Content from "./components/Content";

class App extends React.Component<Props> {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      title: this.props.route === "successful" ? "Thank you!" : "Singup"
    };
  }
  componentDidMount() {
    //alert("DID");
    this.setState({
      title: this.props.route === "successful" ? "Thank you!" : "Singup"
    });
  }

  numberPage(route) {
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
    }
  }
  render() {
    const page = this.numberPage(this.props.route);
    // ? Why rendering Progress
    return (
      <div className="App">
        <h3>{this.state.title}</h3>
        <Progress pages={3} page={page} />
        <Content />
        <Footer page={page} />
        <AppHistory />
      </div>
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
  console.log(":mapDispatchToProps");
  return {
    //actionGotoTest: bindActionCreators(actionGotoTest, dispatch)
  };
}
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
