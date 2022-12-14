"use strict";

const btnGroup = document.querySelectorAll(".btn");
const modalEl = document.getElementById("modal");
const btnClose = document.getElementById("btn-close");

// btnGroup is a node list means, it is an array of node element

function closeModal() {
  modalEl.classList.remove("open");
  modalEl.classList.add("close");
  document.querySelector(".overlay").classList.remove("overlay-open");
}
btnGroup.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalEl.classList.remove("close");
    modalEl.classList.add("open");
    document.querySelector(".overlay").classList.add("overlay-open");
  });
});

btnClose.addEventListener("click", () => {
  closeModal();
});
// to close the model when clicked outside the box also,
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    closeModal();
  }
});

// keyboard events
// if we want to close the model if clicked on Escape button,
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
