// Task 1
const header = document.getElementById("header");
header.textContent = "Hello World!";

// Task 2
const items = document.getElementsByClassName("text-item");
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "red";
}

// Task 3
const listItems = document.getElementsByTagName("li");
listItems[2].textContent = "I am the chosen one";

// Task 4
const div = document.querySelector("#dv");
div.innerHTML = "<button>Click Me</button>";

// Task 5
const spans = document.querySelectorAll("#container span");
spans.forEach((span, index) => {
  span.textContent = "Span " + (index + 1);
});