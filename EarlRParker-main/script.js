"use strict";

//Select Modal Container
const modal = document.querySelector(".modal");
const showModal = document.querySelector(".nav-btn");
const closeModalWindow = document.querySelector(".close-modal");
//Remove hidden class showing the
const openModal = function () {
  modal.classList.remove("hidden");
};

//Add hidden class hiding the modal window
const closeModal = function () {
  modal.classList.add("hidden");
};

showModal.addEventListener("click", openModal);
closeModalWindow.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Email Implementation
const sendMail = function () {
  var name = document.getElementById("fromname").value;
  var message = document.getElementById("message").value;
  var email = document.getElementById("email").value;

  emailjs.send("service_gopb0sl", "template_zuaqfvd", {
    from_name: name,
    message: message,
    email: email,
  });

  closeModal();
};

const sendButton = document.querySelector(".btn2");
sendButton.addEventListener("click", sendMail);

//Mobile Menu Implementation
const menuBtn = document.querySelector(".mobile-menu-btn");
const introContainer = document.querySelector(".mobile-intro-container");
const openMenu = function () {};

menuBtn.addEventListener("click", openMenu);
