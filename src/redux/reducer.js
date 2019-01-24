import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import history from "./history";

export default combineReducers({
  history,
  form: formReducer
});
