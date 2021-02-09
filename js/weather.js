const weather = document.querySelector(".js-weather");
const API_KEY = "9436ac718ffe22cb4200dd2c2fc31952";
const COORDS ='coords'

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `기온 : ${temp}`;
    }
);}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function Succecs(position){
    const latitude =position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWaether(latitude,longitude);
}
function geoError()
{
    console.log("error");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(Succecs, geoError)
}
function loadCoords(){
    const loadedCoords =localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords= JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}



function init(){
    loadCoords();
}
init();