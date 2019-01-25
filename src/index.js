import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";
import { withTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";

import App from "./App";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import initStore from "./redux/initStore";

const store = initStore();

class MyComponent extends React.Components {
  constructor(props) {
    super(props);
    this.state = {
      themes: {
        theme1: {
          palette: {
            primary: {
              main: indigo[900]
            },
            secondary: {
              main: green[900]
            },
            error: {
              main: pink[900]
            }
          }
        },
        theme2: {
          palette: {
            primary: {
              main: indigo[500]
            },
            secondary: {
              main: green[500]
            },
            error: {
              main: pink[500]
            }
          }
        }
      }
    };
  }
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={createMuiTheme()}>
        <App />
        <button>Switch</button>
      </MuiThemeProvider>
    );
  }
}

MyComponent = withTheme()(MyComponent);

render(
  <Provider store={store}>
    <MyComponent />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
