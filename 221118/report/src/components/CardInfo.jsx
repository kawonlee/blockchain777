import React from "react";
import styled from "styled-components";

export default function CardInfo({ title, boardtitle, img, artistName, date }) {
  //const title = props.title
  console.log(title);
  console.log(boardtitle.length);
  const titlediv = (
    <div className="title">
      <div className="title-item">{title}</div>
      <div>more</div>
    </div>
  );

  const boardArr = boardtitle.map((item, index) => {
    return (
      <StyledBoard key={`${index}-1`}>
        <div key={`${index}-2`}>{item}</div>
        <div key={`${index}-3`}>{date[index]}</div>
      </StyledBoard>
    );
  });

  return (
    <div className="card-info">
      {titlediv}
      {boardArr}
    </div>
  );
}

const StyledBoard = styled.div`
  & > div {
    color: gray;
    font-size: 10px;
  }
`;

// 조건 ? 참 : 거짓
// const a = 5 > 3 ? "true" : "false"
