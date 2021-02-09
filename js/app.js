
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const default_color = "#2c2c2c";
canvas.width = 500; 
canvas.height = 500;
ctx.fillStyle ="white";
ctx.fillRect(0,0,500,500);
ctx.fillStyle = default_color;
ctx.strokeStyle = default_color;
ctx.lineWidth = 2.5;




let painting = false;
let filling =false;
function stopPainting(){
    painting =false;
}
function onMousemove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function startPainting(){
    painting = true;
}

function onMouseup(event){
    
    stopPainting();
}
function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
function handleRangeChange(){
    ctx.lineWidth = event.target.value;
}
function handleModeclick(){
if( filling == true){
    filling = false;
    mode.innerText = "Fill";
    
}
else{
    filling = true;
    mode.innerText = "Paint";
    }
}
function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0,0,500,500); }
}
function handleCanvasRc(evnet)
{
    event.preventDefault();
}
function handleSaveBtn(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href =image;
    link.download = "Picture";
    link.click();

}

if(canvas){
    canvas.addEventListener("mousemove", onMousemove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
    canvas.addEventListener("contextmenu",handleCanvasRc);
}
Array.from(colors).forEach(color => 
    color.addEventListener('click', changeColor));

if(range){
    range.addEventListener('input',handleRangeChange)
}
if(mode){
    mode.addEventListener('click',handleModeclick);
}
if(saveBtn){
    saveBtn.addEventListener('click',handleSaveBtn);
}