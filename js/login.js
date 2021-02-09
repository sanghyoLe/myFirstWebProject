var 출력 = document.querySelector('#완료');
var 글자들 = ['로','그','인','완','료'];
function 완료(글자모음,출력){
    var 글자 = document.createElement('div');
    글자.textContent = 글자모음;
    글자.style.textAlign ="center";
    글자.style.fontSize="50px";
    글자.style.fontFamily="sans-serif";
    글자.style.display = 'inline-block';
    글자.style.border= '1px solid black';
    글자.style.webkitBorderRadius = '80px';
    글자.style.width = '70px';
    글자.style.height = '70px';
    글자.style.marginRight = '10px'; 
    글자.style.background = 'green';
    출력.appendChild(글자);
    출력.classList.add('trans');
    
}

for(var i= 0;i<글자들.length;i++){
    (function 반복(j) {
    setTimeout(function(){
        완료(글자들[j],출력);
            },(50*j)+600);})(i);
}


