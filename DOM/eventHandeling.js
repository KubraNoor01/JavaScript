let addbtn = document.getElementById("add");
let deletebtn = document.getElementById("delete");
let tasklist = document.getElementById("tasklist");

addbtn.addEventListener("click", function () {
  let task = prompt("Enter your task:");

  if (task === null || task.trim() === "") {
    alert("Type something!");
  } else {
    let list = document.createElement("li");
    list.innerText = task;
    tasklist.appendChild(list);
  }
});

deletebtn.addEventListener("click", function () {
  if (tasklist.lastChild) {
    tasklist.removeChild(tasklist.lastChild);
  }
});
