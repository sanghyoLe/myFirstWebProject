const body =  document.querySelector("body");
const IMG_NUMBER =12;
function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER) +1;
    return number;
    
}


function bgChange(imgNumber){
    const image= new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add('BgImage');
    body.appendChild(image);
    
}

function init(){
    const randomNumber = getRandom();
    bgChange(randomNumber);
}
init();