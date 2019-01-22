import React from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { routingTo } from "../actions/history";

class AppHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
   //console.log("AppHistory", this.props);
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
    if (this.props.history.location.pathname !== "/") {
      this.state.redirect = true;
    }
  }

  componentWillMount() {
    this.props.routingTo(this.props.history.location.pathname);
  }

  render() {
    const hist = this.state.redirect ? <Redirect to="/" /> : <React.Fragment />;
    return hist;
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
 //console.log(":mapDispatchToProps");
  return {
    //actionGotoTest: bindActionCreators(actionGotoTest, dispatch)
  };
}
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppHistory));
