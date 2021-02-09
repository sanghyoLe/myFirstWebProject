const title = document.body.querySelector('#color');
const body = document.getElementsByTagName('body');
const question = document.querySelector('.question');
const CLICKED_CLASS = "color";
const CLICKED2_CLASS = "click";
var color;

function RandomColor() {
    color = (Math.floor(Math.random() * 0xfffff))
}
var bgColor = title.bgColor;

function colorChange() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
        title.style.background = "#" + color;

    } else {

        title.className = '';
        title.style.background = '';

    }

}
setInterval(RandomColor, 100);

function nameQ() {
    var name = prompt("제작자의 이름은?");
    if (name === "이상효") {
        console.log(name);
        alert("정답!");
        return;
    } else {
        alert("땡! 제작자의 이름은 이상효입니다");
    }
}

question.addEventListener('click', nameQ);
title.addEventListener('mouseenter', colorChange);