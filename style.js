// Task 1 style
document.getElementById("header").style.backgroundColor = "lightblue";

// Task 3 style
document.getElementsByTagName("li")[2].style.fontSize = "20px";

// Task 4 style
document.querySelector("#dv button").style.backgroundColor = "green";

// Task 5 style
const spans = document.querySelectorAll("#container span");
spans.forEach(span => {
  span.style.border = "2px solid green";
  span.style.margin = "5px";
  span.style.display = "inline-block";
  span.style.padding = "5px";
});