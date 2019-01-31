import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import history from "./history";

export default combineReducers({
  history,
  form: formReducer.plugin({
    signup: (state, action) => {
      //console.log("combineReducers", state, action);
      // <----- 'login' is name of form given to reduxForm()
      switch (action.type) {
        case "@@redux-form/CHANGE===========":
          return {
            ...state,

          };
        default:
          return state;
      }
    }
  })
});
