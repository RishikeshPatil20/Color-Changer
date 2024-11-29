const boxElements = document.querySelectorAll(".box");

const bodyElement = document.body;

boxElements.forEach((box) => {
  // apply event listener on each box
  box.addEventListener("click", (event) => {
    const color = event.target.id;
    console.log(box.getAttribute("class"));
    bodyElement.style.backgroundColor = color;
  });
});
