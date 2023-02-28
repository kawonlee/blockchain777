import styled from "styled-components";

import EtherImg from "../../../Img/ethereum-original.svg";
import Map from "../../../Img/footer-back.png";
const FooterComponent = () => {
  const Company = [
    "Company",
    "About Us",
    "Brand Assets",
    "Contact Us",
    "Careers",
    "Terms of Service",
    "Bug Bounty",
  ];
  const Community = [
    "Community",
    "API Documentataion",
    "Knowledge Base",
    "Network Status",
    "Newsletters",
    "Disqus Comments",
  ];
  const Products = [
    "Products & Services",
    "Advertise",
    "Explorer-as-a-Service(EaaS)",
    "API Plans",
    "Priority Support",
    "Blockscan",
    "Blockscan Chat",
  ];
  return (
    <FootBox>
      <FooterBox>
        <div>
          <div>
            <img src={EtherImg} alt="footer-logo" />{" "}
            <span>Powered by Ethereum</span>
          </div>
          <div className="text">
            Ethereum is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </div>
          <div>
            <img src={Map} alt="map" />
          </div>
        </div>
        <div className="text">
          {Company?.map((item, idx) => {
            return <div key={`list1${idx}`}>{item}</div>;
          })}
        </div>
        <div className="text">
          {Community?.map((item, idx) => {
            return <div key={`list2${idx}`}>{item}</div>;
          })}
        </div>
        <div className="text">
          {Products?.map((item, idx) => {
            return <div key={`list3${idx}`}>{item}</div>;
          })}
        </div>
      </FooterBox>
      <div className="line"></div>
      <div className="etherscan">
        <span>Etherscan ⓒ 2023 (F1)</span>
      </div>
    </FootBox>
  );
};

export default FooterComponent;

const FootBox = styled.div`
  width: 90%;
  background-color: #dee2e6;
  padding: 20px 0;
  margin: 0 auto;

  .line {
    border: 1px solid #adb5bd;
    padding: 0.1px;
    background-color: #adb5bd;
    width: 95%;
    margin: 0 auto;
    border-radius: 5px;
  }

  .etherscan {
    font-size: 12px;
    width: 95%;
    margin: 10px auto;
  }
`;

const FooterBox = styled.div`
  display: flex;

  .text {
    font-size: 13px;
    & > div {
      margin: 15px 0;
    }
  }

  & > div:first-child {
    width: 50%;
    & > div {
      padding: 0 10px;
      display: flex;
      align-items: center;
    }
  }

  & > div:nth-child(2) {
    width: 15%;
  }

  & > div:nth-child(3) {
    width: 15%;
  }

  & > div:nth-child(4) {
    width: 20%;
  }

  & > div > div:first-child {
    & > img {
      width: 25px;
      margin: 0 10px 0 0;
    }
    font-weight: 500;
    font-size: 18px;
  }

  & > div > div:last-child {
    & > img {
      width: 280px;
    }
  }
`;
