const postList = document.getElementById("list");
function getList() {
  postList.innerHTML = "";
  axios.get("/api/list").then((data) => {
    data.data.list.forEach((text) => {
      const tempElem = document.createElement("li");
      tempElem.innerHTML = `${text}`;
      postList.append(tempElem);
    });
  });
}
getList();

document.forms["write"].onsubmit = function (e) {
  e.preventDefault();
  //   axios
  //     .post("/api/add", {
  //     })
  //     .then((data) => {
  //       getList();
  //     });
};

document.getElementById("submit").onclick = function () {
  axios
    .post("/api/add", {
      head: document.forms["write"]["head"].value,
      post: document.getElementById("post").value,
    })
    .then((data) => {
      getList();
    });
};
