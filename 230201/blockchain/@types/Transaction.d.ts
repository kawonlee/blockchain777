declare interface ITxOut {
  // transaction의 결과(output)
  address: string;
  amount: number;
}

declare interface ITxIn {
  // transaction에서 사용되는 잔액(input)
  txOutId: string; // transaction의 hash
  txOutIndex: number; // transaction의 몇번째 output인지
  signature?: string; // ?를 붙이면 없을 수 있다. 없으면 undefined = string | undefined;
  // null이면 빈칸일 시 빨간 줄이 뜬다.
  // - undefined는 값이 정의되지 않은 빈값 , null은 값이 비어있다고 정의된 값
  // | 는 비트연산자 중 or를 뜻한다.
  //  - 연산에 있어서 2진수로 바꿔서 연산한다.
  //  - 1011101 | 11011011
  //    -01011101
  //    -11011011 두개 자릿수 맞춰주고 비교 => 결과 11011111 값이 나온다.
  // - 게임에서 상태이상을 따질 때 기절, 출혈, 감전, 화상, 마비,공중에뜸, 중독 등이 있을 때 기절은1, 출혈은 10, 감전은 100, 화상은 1000 ....
  // - 000110 << 출혈과 감전
  // - 감전 걸린 상태(000100) | 출혈이 추가(000010) => 000110, 감전과 출혈이 걸렸다.
}

declare interface ITransaction {
  txIns: Array<ITxIn>;
  txOuts: Array<ITxOut>;
  hash: string; // TxHash || TxID 로 불린다.
}

declare interface IUnspentTxOut {
  address: string;
  amount: number;
  txOutId: string; // transaction의 hash
  txOutIndex: number; // transaction의 몇번째 output
}
