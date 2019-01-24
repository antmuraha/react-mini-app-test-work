import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import ArrowForward from "@material-ui/icons/ArrowForward";

const styles = theme => ({
  nav: {
    display: "flex",
    "justify-content": "space-between",
    flex: "1 1 auto",
    "flex-direction": "row",
    "align-items": "flex-end"
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class Buttons extends React.PureComponent {
  buttonNext() {
    if (this.props.page === 1) {
      return "/aboutme";
    } else {
      if (this.props.page === 2) {
        return "successful";
      } else {
        return "/";
      }
    }
  }
  render() {
    let buttonHidden = { opacity: 0, pointerEvents: "none" };

    //console.log("Render Footer");
    const { classes, onSubmit } = this.props;
    return (
      <nav className={classes.nav}>
        <Button
          style={
            this.props.page === 1 || this.props.page === 3 ? buttonHidden : {}
          }
          component={Link}
          to="/"
          color="primary"
          className={classes.button}
        >
          Back
        </Button>

        <Button
          style={this.props.page === 3 ? buttonHidden : {}}
          component={Link}
          to={this.buttonNext()}
          color="primary"
          className={classes.button}
          onClick={onSubmit}
          disabled={this.props.disabled}
        >
          Next
          <ArrowForward className={classes.extendedIcon} />
        </Button>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  //console.log("Footer:mapStateToProps", state);
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

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Buttons)
);
