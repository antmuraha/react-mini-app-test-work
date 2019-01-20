import React from "react";

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

const SuccessfulForm = ({ classes }) => (
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
      onClick={onPress}
    >
      Go to Dashboard
      <ArrowForward className={classes.extendedIcon} />
    </Button>
  </div>
);

let onPress = () => {
  alert("successful");
};

export default withStyles(styles)(SuccessfulForm);
