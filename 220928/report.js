// 다트 게임
// 우석이 버전
function solution(dartResult) {
  let answer = [];
  const SDT = {
    S: 1,
    D: 2,
    T: 3,
  };
  // 1S2D*3T
  dartResult.split("").forEach((item, index) => {
    if (item === "*") {
      answer[answer.length - 1] *= 2;
      if (answer.length > 1) answer[answer.length - 2] *= 2;
    } else if (item === "#") answer[answer.length - 1] *= -1;
    else if (Object.keys(SDT).includes(item))
      answer[answer.length - 1] = Math.pow(
        answer[answer.length - 1],
        SDT[item]
      );
    else if (item === "1" && dartResult[index + 1] === "0") answer.push(10);
    else if (dartResult[index - 1] !== "1") answer.push(+item);
  });
  return answer.reduce((prev, curr) => prev + curr, 0);
}

// function solution(dartResult) {
//     // 정규표현식
//     let answer = [];
//     const SDT = {
//         S : 1,
//         D : 2,
//         T : 3
//     }
//     dartResult.match(/\d+\S[\*|\#]*/g).forEach((item, idx) => {
//         item = item.match(/\d+|\S|[\*|\#]/g);
//         answer.push(Math.pow(item[0], SDT[item[1]]));
//         if(item[2] === "*"){
//             answer[idx] *= 2;
//             if(answer.length > 1) answer[idx -1] *= 2;
//         }
//         if(item[2] === "#") answer[idx] *= -1;
//     })
//      return answer.reduce((prev, curr) => prev + curr, 0);
// }
