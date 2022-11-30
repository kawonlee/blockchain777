// 로그인한 유저의 정보
const TYPE = {
  LOGIN: "userInfo/login",
  LOGOUT: "userInfo/logout",
};

const logIn = (userId, userPw, userDB) => ({
  type: TYPE.LOGIN,
  payload: { userId, userPw, userDB }, // << userId: userId와 차이가 없다. 자체를 키로 받고 입력된 값을 값으로 받는다.
});

const logOut = () => ({
  type: TYPE.LOGOUT,
});

export const action = { logIn, logOut };

// export const initialize = {userInfo : {userId: "", userName: ""}}
export const initialize = { userId: "", userName: "" };
// 로그인 했을 때 아이디와 이름을 저장하겠다.

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    case TYPE.LOGIN:
      console.log(payload.userDB);
      const tempUser = payload.userDB.find(
        (item) => item.userId === payload.userId
      );
      if (tempUser && tempUser.userPw === payload.userPw)
        return {
          userId: tempUser.userId,
          userName: tempUser.userName,
        };
      else return state;
    case TYPE.LOGOUT:
      return initialize;
    default:
      return state;
  }
};
