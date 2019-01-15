import React, { Component } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import "./App.css";

import Progress from "./components/Progress";
import Footer from "./components/Footer";
import Content from "./components/Content";

let AppHistory = ({ history }) => {
  history.listen((location, action) => {
    // location is an object like window.location
    console.log("----", action, location.pathname, location.state);
  });

  return <React.Fragment />;
};
AppHistory = withRouter(AppHistory);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Signup" };
  }
  render() {
    return (
      <div className="App">
        <h3>{this.state.title}</h3>
        <Progress pages={3} page={1} />
        <Content />
        <Footer />
        <AppHistory />
      </div>
    );
  }
}

export default App;
