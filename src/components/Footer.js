import React from "react";
import { Link } from "react-router-dom";
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

function Footer(props) {
  const { classes } = props;
  return (
    <footer>
      <nav>
        <Button
          component={Link}
          to="/aboutme"
          color="primary"
          className={classes.button}
        >
          Back
        </Button>

        <Button
          component={Link}
          to="/"
          color="primary"
          className={classes.button}
        >
          Next
          <SvgIcon>
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
          </SvgIcon>
        </Button>
      </nav>
      <Link to="/">temp 1</Link>
      <Link to="/aboutme">temp 2</Link>
      <Link to="/successful">temp 3</Link>
    </footer>
  );
}

export default withStyles(styles)(Footer);
