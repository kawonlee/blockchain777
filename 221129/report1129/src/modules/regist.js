const TYPE = {
  REGIST: "main/regist",
};

const regist = (input) => ({
  type: TYPE.REGIST,
  payload: { input },
});

export const action = { regist };

export const initialize = [{ userId: "lkw", userPw: "1234" }];

export const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.REGIST:
      return [...state, payload.input];
    default:
      return state;
  }
};
