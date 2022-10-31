const crypto = require("crypto-js");

// 해시 알고리즘의 경우 단방향 암호화 방식이다.
console.log(crypto.SHA256("apsdafakl").toString());
// 어느정도 길이가 되면서 적당히 중복이 되지 않기 때문에 제일 많이 사용한다.

// 0e3fcad4e2dd1bdcb0b4a855ed878f8634fc0bc8b10da1cafa5b73896c45174b
console.log(crypto.MD5("12345").toString());
//827ccb0eea8a706c4c34a16891f84e7b
console.log(crypto.SHA1("34225").toString());
// add1d26cbc5dd6aee17b52187e6a535211e010be
console.log(crypto.SHA512("asdapskdapsk").toString());
// 160f8dd4a0c9f299867e528a30949afc8dc4424a0578b00a893bc7cf8f4b155d1c3198b3396a66dffdb733cc031d2b246f042b14350d6f282128ec254e0cabad

console.log(crypto.RIPEMD160("10008").toString());
// 0f98b25810f6987d12017c7799437a14cef40281

const tempAES = crypto.AES.encrypt("kkkkkkkeeeeee", "key").toString();
console.log("encrypt :" + tempAES);

console.log(
  `decrypt :${crypto.AES.decrypt(tempAES, "key").toString(crypto.enc.Utf8)}`
);
