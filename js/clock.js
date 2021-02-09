const clockcontainter = document.querySelector('#js-clock');
const clockTitle = clockcontainter.querySelector('h1');

function  getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    const sec = date.getSeconds();
    var color = Math.floor(Math.random()*0xff);
    var color1 = Math.floor(Math.random()*0xff);
    var color2 = Math.floor(Math.random()*0xff);
    clockTitle.style.color = '#'+ color +color1 +color2;
    
    clockTitle.innerText =  (hour < 10 ? '0' + hour : hour)
                         + ':' + (min < 10 ? '0' + min : min)
                         + ':' + (sec < 10 ? '0' + sec : sec) ;
    

}

function init(){
getTime();
}
init();
setInterval(init,100);