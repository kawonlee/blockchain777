const heapArr = [];

function swap(idx1, idx2) {
  const temp = heapArr[idx1];
  heapArr[idx1] = heapArr[idx2];
  heapArr[idx2] = temp;
}

function heapInsert(item) {
  heapArr.push(item);
  let nowIdx = heapArr.length - 1;
  while (true) {
    // 부모 기준으로 자식은 0기준 1,2 -> 0+1, 0+2 / 1기준 3,4 -> 2+1, 2+2 / 2기준 5,6 -> 4+1, 4+2 / n 기준 n *2 +1(2n+1), n* 2 + 2(2n+2)
    // 자식 기준으로 부모는 n -1 => 2n, 2n+1 -> (n-1) / 2 -> n, n+ 1/2 -> 정수형으로하면 parseInt((n-1) / 2) ex) 3,4의 부모는 1 n-1하면 2,3이 되고
    // 이걸 2로 나누면 1, 1.5가 된다. 이를 parseInt 처리해주면 둘 다 1이므로 부모는 1이다.
    if (nowIdx < 1) return heapArr.length;
    const parentIdx = parseInt((nowIdx - 1) / 2);
    if (heapArr[parentIdx] > heapArr[nowIdx]) {
      // if (heapArr[parentIdx] * -1 > heapArr[nowIdx] * -1) { -> 최대힙 / 이 코드가 헷갈리면 18번줄 부등호를 반대로 바꿔주면된다.
      swap(parentIdx, nowIdx);
      nowIdx = parentIdx;
    } else {
      break;
    }
  }
  return heapArr.length;
}
// 추가했을 때 부모와 비교해서 바꿔준다.

function heapRemove() {
  const temp = heapArr.shift(); // 맨 앞에것을 빼라
  heapArr.unshift(heapArr.pop()); // 맨 뒤에것을 빼서 맨 앞에 넣는다.

  let nowIdx = 0;
  while (true) {
    const leftChild = nowIdx * 2 + 1,
      rightChild = nowIdx * 2 + 2;
    if (
      heapArr[nowIdx] > heapArr[leftChild] ||
      heapArr[nowIdx] > heapArr[rightChild]
    ) {
      if (heapArr[leftChild] > heapArr[rightChild]) {
        swap(nowIdx, rightChild);
        nowIdx = rightChild;
      } else {
        swap(nowIdx, leftChild);
        nowIdx = leftChild;
      }
    } else {
      break;
    }
  }

  return temp;
}

heapInsert(10);
heapInsert(20);
heapInsert(28);
heapInsert(727);
heapInsert(17);
heapInsert(5);
heapInsert(4);
heapInsert(3);
heapInsert(2);
heapInsert(1);
heapRemove(1);
console.log(heapArr);
