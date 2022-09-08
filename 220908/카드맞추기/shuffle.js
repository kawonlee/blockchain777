function shuffle(arr, count) {
  if (!arr?.length || typeof arr != "object") {
    alert("배열만!");
    return "이상한 거 넣지 말고 배열만 넣으라고!";
  }

  //셔플 함수 (교수님이 만들어주심)
  for (let i = 0; i < count; i++) {
    const first = parseInt(Math.random() * arr.length);
    const second = parseInt(Math.random() * arr.length);
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  return arr;
}
