import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import signup from "./signup";
import aboutme from "./aboutme";
import successful from "./successful";
import history from "./history";

export default combineReducers({
//  signup,
//  aboutme,
//  successful,
  history,
  form: formReducer
});
