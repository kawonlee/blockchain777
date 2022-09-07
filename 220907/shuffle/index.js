const cards = [];

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
console.log(cards);

//카드 1~8까지 쌍으로 8페어 16장

for (let i = 0; i < 1; i++) {
  const firstCard = parseInt(Math.random() * cards.length); // ex) 1
  //   const firstCard = parseInt(Math.random() * 15 + 1); // ex) 1

  // 첫번째 카드 선택
  console.log("firstCard : ", firstCard);
  const secondCard = parseInt(Math.random() * cards.length); //ex) 6
  // 두번째 카드 선택
  console.log("secondCard : ", secondCard);
  const temp = cards[firstCard]; // < 1
  // temp =1 / cards[firstCard] = 4
  // 첫번째 카드를 임시 저장
  console.log("temp : ", temp);
  console.log("cards[firstCard] : ", cards[firstCard]);
  cards[firstCard] = cards[secondCard]; // <<4
  // cards[firstCard] =4 / cards[secondCard] = 4
  // 첫번째 카드 자리에 두번째 카드를 저장
  console.log("cards[firstCard] : ", cards[firstCard]);
  console.log("cards[secondCard] : ", cards[secondCard]);
  cards[secondCard] = temp;
  // 두번째 카드 자리에 temp를 저장
  // cards[secondCard] =1 / temp = 1
  console.log("cards[secondCard] : ", cards[secondCard]);
  console.log("temp : ", temp);
}
console.log(cards);
console.log(cards.length);

function shuffle(arr) {
  if (!arr?.length || typeof arr != "object") {
    alert("배열만!");
    return "이상한 거 넣지 말고 배열만 넣으라고!";
  }

  //셔플 함수 (교수님이 만들어주심)
  for (let i = 0; i < 100; i++) {
    const first = parseInt(Math.random() * arr.length);
    const second = parseInt(Math.random() * arr.length);
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  return arr;
}
