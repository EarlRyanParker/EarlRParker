"use strict";

//Select Modal Container
const modal = document.querySelector(".modal");
const showModal = document.querySelector(".nav-btn");
const closeModalWindow = document.querySelector(".close-modal");
//Remove hidden class showing the
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Add hidden class hiding the modal window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showModal.addEventListener("click", openModal);
closeModalWindow.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
