export default (state = {}, action) => {
  console.log("REDUCER SIGNUP", state, action);

  if (!action.meta) {
    return state;
  }
  if (action.meta.form !== "signup") {
    return state;
  }

  switch (action.meta.field) {
    case "email":
    case "password":
    case "confirm": {
      return { ...state, [action.meta.field]: action.meta.payload };
    }
  }
  return state;
};
