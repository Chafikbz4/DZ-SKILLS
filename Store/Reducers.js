// Reducer for userData
const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { userDataReducer };
