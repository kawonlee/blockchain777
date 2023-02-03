import { SHA256, lib } from "crypto-js";
import elliptic from "elliptic";

// 데이터(지갑 계정)을 저장하기 위해서
import fs from "fs";
import path from "path";

// 지갑 계정을 저장할 위치
const addressDir: string = path.join(__dirname, "../walletData");

const ec = new elliptic.ec("secp256k1");

class Wallet implements IWallet {
  // interface = 규칙, 틀 같은거 Wallet이 IWallet처럼 생겨먹었는지 비교
  public address: string;
  public publicKey: string;
  public privateKey: string;
  public balance: number;

  constructor(_privateKey: string = "") {
    this.privateKey = _privateKey || this.getPrivateKey();
    this.publicKey = this.getPublicKey();
    this.address = this.getAddress();
    this.balance = 0;

    const fileName = path.join(addressDir, this.address);
    fs.writeFileSync(fileName, this.privateKey);
  }

  public getAddress(): string {
    return this.publicKey.slice(26);
  }

  public getPrivateKey(): string {
    return lib.WordArray.random(32).toString().toUpperCase();
  }

  public getPublicKey(): string {
    return ec
      .keyFromPrivate(this.privateKey) // 이 부분 중요함
      .getPublic() // 공개키를 가져온다.
      .encode("hex", true)
      .toUpperCase();
  }

  static getList(): string[] {
    const files: string[] = fs.readdirSync(addressDir);
    return files;
  }
  // interface는 최소에 대한 조건. 클래스 만들때 interface에 없는거 추가해도댐

  static getWalletPrivateKey(_address) {
    const filePath = path.join(addressDir, _address);
    const fileContent = fs.readFileSync(filePath);
    return fileContent.toString();
  }
  static createSign(_data) {
    const hash = SHA256(_data.sender.publicKey + _data.received + _data.amount)
      .toString()
      .toUpperCase();
    const privateKey = Wallet.getWalletPrivateKey(_data.sender.address);
    const keyPair = ec.keyFromPrivate(privateKey);
    return keyPair.sign(hash, "hex");
  }
}

export default Wallet;
