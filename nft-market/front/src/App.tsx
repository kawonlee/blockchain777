import { Mint } from "./components/Mint";
import { List } from "./components/List";
import { useWeb3 } from "./modules/useWeb3";

function App() {
  const { web3, chainId, account, logIn } = useWeb3();
  return (
    <div>
      <div>
        {account && web3 ? (
          <div>
            <div>ChainId : {chainId}</div>
            <div>Account : {account}</div>
            <Mint web3={web3} account={account} />
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                logIn();
              }}
            >
              MetaMask Log In
            </button>
          </div>
        )}
      </div>
      <List account={account} />
    </div>
  );
}

export default App;

// minting -> 토큰을 생성한다.
// 코인 = 독립된 블록체인 네트워크(메인넷)을 소유한 경우
// 토큰 = 독립된 블록체인 네트워크를 소유하지 않은 경우
