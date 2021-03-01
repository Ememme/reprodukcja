import "./style.css";

const PIXEL_COLOR = "#e44d4d";

const fakeCanvas = document.querySelectorAll(".fake-canvas .pixel");
const originalCanvas = document.querySelectorAll(".original-canvas .pixel");

originalCanvas.forEach((element, index) => {
  if (element.classList.contains("pixel-dot")) {
    fakeCanvas[index].classList.add("pixel-dot");
  }
});

/*
Difference between NodeCollection and HTML
- performance based on selecting classes vs children
- my gotchas: 
  - selecting row instead of single cell and complicating the code
  - NodeList vs HTMLCollection 
  - running forEach on a non-iterable item
  */
