import React from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

import {
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { withTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import indigo from "@material-ui/core/colors/indigo";

class WithTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: false,
      themes: {
        theme1: {
          palette: {
            primary: {
              main: indigo[700]
            }
          },
          typography: {
            useNextVariants: true
          }
        },
        theme2: {
          palette: {
            primary: {
              main: green[700]
            }
          },
          typography: {
            useNextVariants: true
          }
        }
      }
    };
    this.switchTheme = this.switchTheme.bind(this);
  }
  switchTheme() {
    this.setState({ theme: !this.state.theme });
  }
  createTheme() {
    return createMuiTheme(
      this.state.theme ? this.state.themes.theme1 : this.state.themes.theme2
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={this.createTheme()}>
        <React.Fragment>
          {this.props.children}
          <button className={classes.buttonTheme} onClick={this.switchTheme}>
            THEME
          </button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default withTheme()(withStyles(styles)(WithTheme));
