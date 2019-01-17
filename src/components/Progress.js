import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {

  }
};

class LinearDeterminate extends React.Component {
  constructor(props) {
    super(props);
    //alert(this.props.page);
    this.state = {
      completed: this.calc()
    };
  }

  calc(page) {
    return (100 / this.props.pages) * this.props.page;
  }

  render() {
    const { classes } = this.props;
    return (
      <LinearProgress
        className={classes.root}
        variant="determinate"
        value={this.calc()}
      />
    );
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinearDeterminate);
