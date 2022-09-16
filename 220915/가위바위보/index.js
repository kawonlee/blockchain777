const mainImage = document.getElementById("computer-img");

const imageArr = ["./num1.jpg", "./num2.jpg", "./num3.jpg"];

let imageIndex = 0;

changeImage = function () {
  mainImage.setAttribute("src", imageArr[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArr.length) {
    imageIndex = 0;
  }
};

setInterval(changeImage, 1000);
