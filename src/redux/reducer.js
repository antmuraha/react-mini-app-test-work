import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import history from "./history";

export default combineReducers({
  history,
  form: formReducer.plugin({
    signup: (state, action) => {
      console.log("combineReducers", state, action);
      // <----- 'login' is name of form given to reduxForm()
      switch (action.type) {
        case "AUTH_LOGIN_FAIL":
          return {
            ...state,
            values: {
              ...state.values,
              password: undefined // <----- clear password value
            },
            registeredFields: {
              ...state.registeredFields,
              password: undefined // <----- clear field state, too (touched, etc.)
            }
          };
        default:
          return state;
      }
    }
  })
});
