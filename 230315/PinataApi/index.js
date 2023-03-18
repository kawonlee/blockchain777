const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const pinFileToIpfs = async () => {
  const formData = new FormData();
  const src = "img/asdf.png";

  const file = fs.createReadStream(src);
  formData.append("file", file);

  const metadata = JSON.stringify({
    name: "my character.png",
  });
  formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", options);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "content-type": `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: "b1f1f1164dd09d7b255b",
          pinata_secret_api_key:
            "73aacbced48397b74e12b4f392242808b08ab56d0c78eb56a463581185253554",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// pinFileToIpfs();
const pinJson = async () => {
  const formdata = {
    pinataMetadata: {
      name: "NFT 1",
    },
    pinataOptions: {
      cidVersion: 0,
    },
    pinataContent: {
      name: "315 NFT",
      description: "피나타 써보는중",
      image:
        "https://gateway.pinata.cloud/ipfs/QmNfeGNmXk8UfiARqFQAgxzAeBc27SKuR29fnQnMNQz8jc",
      attributes: [],
    },
  };

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      formdata,
      {
        headers: {
          "content-type": "application/json",
          pinata_api_key: "b1f1f1164dd09d7b255b",
          pinata_secret_api_key:
            "73aacbced48397b74e12b4f392242808b08ab56d0c78eb56a463581185253554",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// pinJson();

// IpfsHash: 'QmNfeGNmXk8UfiARqFQAgxzAeBc27SKuR29fnQnMNQz8jc',

// backend에서 ipfs에 이미지 저장하는 과정 40번줄까지

// 42번줄부터 backend에서 ipfs에 json저장하는 과정
// IpfsHash: 'QmSE6PVJoFCtLqSmKZnJL7YNuFReeq5gytdZGNXiDXR2T2',
