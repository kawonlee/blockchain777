export default function LogOut({ user, setUser }) {
  return (
    <div>
      {!user || `${user} 님 어서오세요`}
      {/* {user ?  `${user} 님 어서오세요` : ""}  */}
      {/* || 는 "또는" 앞에 것이 거짓이면 뒤에 걸 띄운다.(출력한다) */}
      <button
        onClick={() => {
          setUser("");
        }}
      >
        정현이 로그아웃
      </button>
    </div>
  );
}
