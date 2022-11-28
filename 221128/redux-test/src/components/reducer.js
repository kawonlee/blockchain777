export const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return { test: state.test + "1" };

    case "double":
      return { test: state.test + "2" };
    case "test":
      return { test: state.test + " failed" };
    default:
      return state;
  }
};
