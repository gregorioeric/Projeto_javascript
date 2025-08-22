const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const modalLogin = document.querySelector("#modal-login");
const modalRegister = document.querySelector("#modal-register");
const btnCancelLogin = document.querySelector("#btn-cancel-login");
const btnCancelRegister = document.querySelector("#btn-cancel-register")

btnLogin.addEventListener("click", (e) => {
  modalLogin.classList.remove("hide-modal");
  modalLogin.classList.add("show-modal");
})

btnRegister.addEventListener("click", (e) => {
  modalRegister.classList.remove("hide-modal");
  modalRegister.classList.add("show-modal");
})

btnCancelLogin.addEventListener("click", (e) => {
  modalLogin.classList.remove("show-modal");
  modalLogin.classList.add("hide-modal");
})

btnCancelRegister.addEventListener("click", (e) => {
  modalRegister.classList.remove("show-modal");
  modalRegister.classList.add("hide-modal");
})