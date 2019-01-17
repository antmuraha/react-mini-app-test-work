import React from "react";

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
  }
});

const SuccessfulForm = ({ classes }) => (
  <React.Fragment>
    <Fab color="primary" variant="round" size="large" className={classes.fab}>
      <Done classes={styles.doneIcon} />
    </Fab>
    <Button color="primary" variant="outlined" className={classes.button} onClick={onPress}>
      Go to Dashboard
      <ArrowForward className={classes.extendedIcon} />
    </Button>
  </React.Fragment>
);

let onPress = () => {
  alert("successful");
};

export default withStyles(styles)(SuccessfulForm);
