export default (state={}, action) => {
  console.log("REDUCER ABOUTME", state, action);

  if (!action.meta) {
    return state;
  }
  if (action.meta.form !== "aboutme") {
    return state;
  }

  switch (action.meta.field) {
    case "date":
    case "gender":
    case "where": {
      return { ...state, [action.field]: action.payload };
    }
  }
  return state;
};
