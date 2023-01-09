// 테스트 함수들을 실행하는데 묶어서 실행할 수 있다.
const merkle = require("./merkleTree");
// describe : 테스트들의 묶음(그룹화가 가능함)
describe("테스트들의 묶음 단위 내용", () => {
  // 각각의 테스트들을 여기에 작성해주면 된다.
  // 테스트 단위
  it("테스트의 내용.", () => {
    console.log("나 처음써봄");
  });
  it("테스트의 내용2.", () => {
    console.log("나 처음써봄2");
  });
  it("테스트의 내용3.", () => {
    console.log("나 처음써봄3");
  });
  it("테스트의 내용4.", () => {
    console.log("나 처음써봄4");
  });
  it("테스트의 내용.", () => {
    // expect 함수로 비교 함수들을 사용할 수 있게 해준다.
    // expect의 매개변수로 비교할 값을 넣어주고 toBe함수의 매개변수로 앞의 값과 비교할 값을 넣어준다.
    expect(merkle.libMerkle(merkle.data)).toBe(
      merkle.createMerkle(merkle.data)
    );
  });
});
