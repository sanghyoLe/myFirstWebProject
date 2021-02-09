var form = document.querySelector(".js-form");
const input = form.querySelector("input");
const name = document.querySelector(".name");
const button2 = document.querySelector(".btn1");

const trans = "trans";
const none = "none";
const USER_LS = "currentUser";
const show = "show";
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function del(text) {
  localStorage.removeItem(USER_LS, text);
  window.location.reload();
}
button2.addEventListener("click", del);
function handerform(event) {
  event.preventDefault();
  const value = input.value;
  printName(value);
  saveName(value);
}
function askforName() {
  form.classList.add(show);
  form.classList.remove(show);
  button2.classList.add(none);
  form.addEventListener("submit", handerform);
}
function printName(text) {
  button2.classList.add(show);
  form.classList.remove(show);
  form.classList.add(none);
  name.classList.add(show);
  name.innerText = `어서오세요 ${text}님`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askforName();
  } else {
    printName(currentUser);
  }
}
function init() {
  loadName();
}

init();
