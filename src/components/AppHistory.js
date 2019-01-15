import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { routingTo } from "../actions/history";

class AppHistory extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      // location is an object like window.location
      this.props.routingTo(location.pathname);
      /*console.log(
        "----",
        this.props,
        action,
        location.pathname,
        location.state
      );*/
    });
  }

  render() {
    return <React.Fragment />;
  }
}

function mapStateToProps(state) {
  //console.log("AppHistory:mapStateToProps", state);
  return {
    route: state.history.route
  };
}

// Defining mapDispatchToProps as plain object
const mapDispatchToProps = { routingTo };
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
)(withRouter(AppHistory));
