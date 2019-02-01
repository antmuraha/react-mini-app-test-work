import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import WithTheme from "./components/WithTheme";
import "./translation/i18n";
import SwitchLocale from "./translation/SwitchLocale";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import initStore from "./redux/initStore";

const store = initStore();

render(
  <Provider store={store}>
    <WithTheme>
      <SwitchLocale app={App} />
    </WithTheme>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
