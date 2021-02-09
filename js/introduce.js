const body = document.querySelector('body');
const none = "none";
const show = "show"
function handercolor(){
  body.classList.add(show);
}   

body.addEventListener('mouseenter',handercolor);
