const timeStampFunc = (timestamp) => {
  // timestamp가 찍으면 1660885610000 12344667780000
  // totaldiff =asfgvvd / 1000*60*60*24
  const currDate = new Date().getTime();
  let totalDiff = currDate - timestamp * 1000;
  console.log(totalDiff);
  const day = Math.floor(totalDiff / (1000 * 60 * 60 * 24));
  console.log(day);
  totalDiff -= day * 1000 * 60 * 60 * 24;
  const hour = Math.floor(totalDiff / (1000 * 60 * 60));
  console.log(hour);
  totalDiff -= hour * 1000 * 60 * 60;
  const minute = Math.floor(totalDiff / (1000 * 60));
  console.log(minute);
  totalDiff -= minute * 1000 * 60;
  const second = Math.floor(totalDiff / 1000);
  console.log(second);
  const text = day
    ? `${day} 일`
    : hour
    ? `${hour} 시간`
    : minute
    ? `${minute} 분`
    : `${second} 초`;
  return { day, hour, minute, second, text };
};

export { timeStampFunc };
