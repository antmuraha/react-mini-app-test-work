export default (state = {route:"signup"}, action) => {
  //console.log("REDUCER HISTORY", state, action);
  switch (action.type) {
    case "ROUTING": {
      return { ...state, route: action.route };
    }
  }
  return state;
};
