import React from "react";
import { connect } from "react-redux";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Done from "@material-ui/icons/Done";
import ArrowForward from "@material-ui/icons/ArrowForward";

const styles = theme => ({
  fab: {
    display: "flex",
    margin: theme.spacing.unit,
    background: "green",
    width: "100px",
    height: "100px"
  },
  doneIcon: {
    marginRight: theme.spacing.unit,
    color: "white"
  },
  content: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    margin: "20px",
    "justify-content": "space-evenly",
    height: "100%"
  },
  margin: {
    margin: "20px"
  }
});

class SuccessfulForm extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  prepareData() {
    let d = this.props.forms;
    return {
      user_date: {
        email: d.signup.values.email,
        password: d.signup.values.password,
        data_of_birth: `${d.aboutme.values.d}/${d.aboutme.values.m}/${
          d.aboutme.values.y
        }`, // !!! convert to number format
        gender: d.aboutme.values.gender,
        how_hear_about_us:
          typeof d.aboutme.values.where !== "number"
            ? null
            : d.aboutme.values.where
      }
    };
  }
  onPress() {
    console.info("Successful", this.prepareData());
    alert("Successful. You look logs.");
  }
  render() {
   //console.log("SuccessfulForm", this.props);
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <Fab
          color="primary"
          variant="round"
          size="large"
          className={classNames(classes.fab, classes.margin)}
        >
          <Done classes={styles.doneIcon} />
        </Fab>
        <Button
          color="primary"
          variant="outlined"
          className={classNames(classes.button, classes.margin)}
          onClick={this.onPress}
        >
          Go to Dashboard
          <ArrowForward className={classes.extendedIcon} />
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("SuccessfulForm:mapStateToProps", state);
  return {
    forms: state.form
  };
}

// Defining mapDispatchToProps as plain object
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SuccessfulForm));
