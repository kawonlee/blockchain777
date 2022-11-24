import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* Link = a태그 대신 사용한다. a태그를 사용하는 것은 외부 웹페이지에 접근할 때 사용한다. ex) localhost -> naver.com */}
      <Link to="/">Home </Link>| <Link to="login">Log in</Link> |{" "}
      <Link to="log/in">Log in 2</Link> |<Link to="log/out">Log out 2</Link>
    </div>
  );
}
