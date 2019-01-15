import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
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

class Footer extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
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
    let buttonHidden = { opacity: 0, "pointer-events": "none" };

    console.log("Render Footer");
    const { classes } = this.props;
    return (
      <footer>
        <nav>
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
          >
            Next
            <SvgIcon>
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </SvgIcon>
          </Button>
        </nav>
      </footer>
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
  console.log(":mapDispatchToProps");
  return {
    //actionGotoTest: bindActionCreators(actionGotoTest, dispatch)
  };
}
*/

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Footer)
);
/*
withStyles(styles)(Footer)
*/