export default (state = {}, action) => {
 //console.log("REDUCER ABOUTME", state, action);

  if (!action.meta) {
    return state;
  }
  if (action.meta.form !== "aboutme" || action.payload === undefined) {
    return state;
  }

  switch (action.meta.field) {
    case "dd":
    case "mm":
    case "yy":
    case "gender":
    case "where": {
     //console.log("0000", action.meta.field, action.payload);
      //return { ...state, [action.meta.field]: action.payload };
    }
  }
  return state;
};
