import styled from "styled-components";

const BoardComponent = () => {
  return (
    <BoardBox>
      <div className="title-box">
        제목 :
        <input type={"text"} placeholder={"제목을 입력하세요."} />
      </div>
      <div className="text-box">
        <span>내용 : </span>
        <textarea placeholder="내용을 입력하세요." rows={4} cols={50} />
        <button>글 등록</button>
      </div>
    </BoardBox>
  );
};

export default BoardComponent;

const BoardBox = styled.div`
  padding: 20px;
  background-color: mintcream;

  .title-box {
    & > input {
      margin-left: 10px;
      padding: 5px;
    }
    padding-bottom: 15px;
  }

  .text-box {
    display: flex;
    align-items: center;
    justify-contents: center;

    & > span {
      margin-right: 10px;
    }
    & > textarea {
      resize: none;
      margin-right: 10px;
    }
    & > button {
      border: none;
      background-color: royalblue;
      color: white;
      font-size: 15px;
      width: 70px;
      height: 30px;
      font-weight: bold;
      border-radius: 5px;
    }
  }
`;
