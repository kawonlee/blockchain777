const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "input/input":
      return [...state, payload.input];
    case "input/output":
      let tempState = [...state];
      tempState.pop();
      console.log(tempState);
      //   [...state].filter((item) => payload.input != item)

      return [...state].slice(0, state.length - 1);
    default:
      return state;
  }
};
export default reducer;
