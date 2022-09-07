const cardNum = [];

for (let i = 0; i < 8; i++) {
  cardNum.push(i + 1);
  cardNum.push(i + 1);
}

console.log(cardNum);
// 1~8사이의 숫자 2세트 총 16장 셋팅 코드

for (let i = 0; i < 30; i++) {
  const card1 = parseInt(Math.random() * cardNum.length);
  const card2 = parseInt(Math.random() * cardNum.length);
  const temp = cardNum[card1];
  cardNum[card1] = cardNum[card2];
  cardNum[card2] = temp;
}
console.log(cardNum);
//카드 섞기(무작위로 30번 돌림)

let card1 = document.getElementById("card1");
card1.innerHTML = cardNum[0];

let card2 = document.getElementById("card2");
card2.innerHTML = cardNum[1];

let card3 = document.getElementById("card3");
card3.innerHTML = cardNum[2];

let card4 = document.getElementById("card4");
card4.innerHTML = cardNum[3];

let card5 = document.getElementById("card5");
card5.innerHTML = cardNum[4];

let card6 = document.getElementById("card6");
card6.innerHTML = cardNum[5];

let card7 = document.getElementById("card7");
card7.innerHTML = cardNum[6];

let card8 = document.getElementById("card8");
card8.innerHTML = cardNum[7];

let card9 = document.getElementById("card9");
card9.innerHTML = cardNum[8];

let card10 = document.getElementById("card10");
card10.innerHTML = cardNum[9];

let card11 = document.getElementById("card11");
card11.innerHTML = cardNum[10];

let card12 = document.getElementById("card12");
card12.innerHTML = cardNum[11];

let card13 = document.getElementById("card13");
card13.innerHTML = cardNum[12];

let card14 = document.getElementById("card14");
card14.innerHTML = cardNum[13];

let card15 = document.getElementById("card15");
card15.innerHTML = cardNum[14];

let card16 = document.getElementById("card16");
card16.innerHTML = cardNum[15];
