export const reducer = (state = "", action) => {
  switch (action.type) {
    case "value":
      console.log(action);
      return state;

    default:
      return state;
  }
};
