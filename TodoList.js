var t1 = document.getElementById("textbox");
var list = document.getElementById("List-container");

function addTask() {
  if (t1.value === '') {
    alert("You Must Write Something!");
  } else {
    var li = document.createElement("li");
    li.innerHTML = t1.value;
    list.appendChild(li);

    var closeButton = document.createElement("span");
    closeButton.innerHTML = "\u00d7"; // Unicode character for 'X'
    li.appendChild(closeButton);
  }
  t1.value = "";
  saveData();
}

list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function againOpen() {
  list.innerHTML = localStorage.getItem("data");
}

againOpen();