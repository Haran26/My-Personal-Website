const bodyElement = document.querySelector("body");
const menuToggle = document.querySelector(".hamburger-menu");
const heroElement = document.querySelector(".hero");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", function () {
  bodyElement.classList.toggle("is-open");
  heroElement.classList.add("is-open");
});

navList.addEventListener("click", function (e) {
  let clickedElement = e.target;

  if (clickedElement.classList[0] === "nav-link") {
    bodyElement.classList.remove("is-open");
  }
});

//Add eventListener to the window object to close nav when we click outside
window.addEventListener("click", function (e) {
  let clickedElement = e.target;

  if (clickedElement.matches(".is-open")) {
    bodyElement.classList.remove("is-open");
    heroElement.classList.remove("is-open");
  }
});

var tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "#f4f4f4";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, "#2f2f2f");
