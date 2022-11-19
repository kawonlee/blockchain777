import React from "react";
import styled from "styled-components";

export default class BtnComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Numpad
        className="num-pad"
        onClick={() => this.props.onClick(+this.props.item)}
      >
        {this.props.item}
        <div>
          <a>a</a>
        </div>
        <div></div>
        <a>a</a>
      </Numpad>
    );
  }
}

const Numpad = styled.div`
  width: 100px;
  height: 100px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  background-color: cornflowerblue;
  color: white;
  cursor: pointer;
  div {
    width: 10px;
    height: 10px;
    background-color: aqua;
    &:nth-child(2) {
      background-color: blue;
    }
    a {
      color: green;
    }
  }
  &:nth-child(2n) {
    background-color: pink;
  }
`;
// &: 현재 선택자(태그)
