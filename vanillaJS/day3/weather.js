
const API_KEY = "9384223b41e0469ed2a199a3da98431a"
const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}
function handleGeoSucces(position){
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    //변수객체의 변수명과  key  이름이 같을 때 위와같이 입력할 수 있다 .(원래는 latitude : latitude , longitude : longitude)

    saveCoords(coordsObj)
}
function handleGeoError(){
    console.log("Cant access geo location")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    // geolocation은 obj임 , navi안에 여러가지 api가 있음 , 또 geolocation은 여러가지 함수를 가진다 ~ 
    // API (Application Programming Interface)는 다른서버로부터 손쉽게 데이터를 가져올 수 있는 수단 (특정 웹사이트로부터 데이터를 얻는것)
    // getCurrentPosition은 두개의 요구조건
}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null ){
    askForCoords();
    }else {
        //getWeather
    }
}



function init(){
loadCoords();
}

init();