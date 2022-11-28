const reducer = (state = 0, action) => {
  console.log(state, action);
  const { type, payload } = action;
  switch (type) {
    case "count1/plus":
      return state + payload.input;
    // count1/plus 형식처럼 /로 나누면
    // 앞에 count1이 store내의 state 자체를 의미하게 된다.
    // reducer가 가져오는 state는 store내의 count1이 된다.
    case "count1/minus":
      return state - payload.input;
    // ...state << 기존의 state를 넣는다.
    // count1 : state.count1 + payload.input << count1 프로퍼티에 payload로 받은 input 프로퍼티를 더한다.
    // count1이 있는 경우 뒤에 해당 내용으로 덮어쓰고 없는 경우 state에 추가해준다.

    default:
      return state;
  }
};

export default reducer;
