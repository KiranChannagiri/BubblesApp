let circles = document.querySelectorAll(".circle");
let arrows = document.querySelectorAll(".fa-solid");
let color = ["blue", "green", "red", "gold"];
circles.forEach((circle, index) => {
  circle.style.backgroundColor = color[index];
  circle.addEventListener("click", (event) => {
    let elemnt = event.target.nextElementSibling;
    elemnt.classList.add("active");
  });
});
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  arrows.forEach((arrow) => {
    arrow.classList.remove("active");
  });
});
