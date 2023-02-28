import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navi = useNavigate();
  const HeaderTitle = [
    "Home",
    "Blockchain",
    "Tokens",
    "NFTs",
    "Resources",
    "Developers",
    "More",
  ];
  return (
    <HeadMain>
      <HeadIcon>
        <div>
          <span>ETH Price: $1,643.49(-3.76%)</span>
          <span>
            <img src="/Img/mainIcon.png" />
            Gas: 22Gwei
          </span>
        </div>
        <div>
          <div>
            <img src="/Img/sun.png" />
          </div>
          <div>
            <img src="/Img/ethIcon.svg" />
          </div>
        </div>
      </HeadIcon>
      <HeaderBox>
        <Link to={"/"}>
          <img src="/Img/logo-etherscan.svg" alt="logo" />
        </Link>
        <div>
          {HeaderTitle?.map((item, idx) => {
            return (
              <span
                key={`header${idx}`}
                onClick={() => {
                  if (item === "Home") navi("/");
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </HeaderBox>
    </HeadMain>
  );
};

export default HeaderComponent;

const HeadMain = styled.div`
  width: 90%;
  padding: 0 5%;
  /* padding을 주는 경우 background를 width %에 상관없이 전체 덮을 수 있다. */
`;

const HeadIcon = styled.div`
  @keyframes bling {
    0% {
      color: aqua;
    }
    15% {
      color: blue;
    }
    30% {
      color: yellowgreen;
    }
    45% {
      color: blueviolet;
    }
    60% {
      color: coral;
    }
    75% {
      color: hotpink;
    }
    90% {
      color: gold;
    }
    100% {
      color: aqua;
    }
  }
  display: flex;
  justify-content: space-between;
  border: 1px solid #e9ecef;
  padding: 10px 20px;

  img {
    width: 25px;
    height: 25px;
    padding: 5px;
  }

  & > div:nth-child(1) {
    display: flex;
    animation: bling 4s infinite linear;
    & > span {
      display: flex;
      align-items: center;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    column-gap: 10px;
    & > div {
      border: 1px solid #e9ecef;
      border-radius: 5px;
    }
  }
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e9ecef;
  padding: 10px 20px;

  & a > img {
    width: 150px;
  }

  & > div > span {
    margin: 0px 15px;
    font-weight: 500;
    cursor: pointer;

    &:not(:first-child) {
      text-decoration: line-through;
      text-decoration-color: tomato;
      text-decoration-thickness: 2px;
    }
  }
`;
