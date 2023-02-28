import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <NotFoundBox>
      <div>
        <img src="/Img/notfound.gif" />
      </div>
      <div>
        <div>Search not found</div>
        <div>Oops! Error! Warning!</div>
        <Link to={"/"}>
          <button className="home-btn">Back Home</button>
        </Link>
      </div>
    </NotFoundBox>
  );
};

export default NotFoundComponent;

const NotFoundBox = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 700px;
    margin: 10px;
    filter: grayscale(90%);
  }

  .home-btn {
    background-color: #0784c3;
    color: white;
    border: none;
    border-radius: 5px;
    width: 90px;
    height: 30px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  & > div:nth-child(2) {
    text-align: center;
    & > div:nth-child(1) {
      color: #0784c3;
      font-size: 50px;
    }

    & > div:nth-child(2) {
      color: red;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;
