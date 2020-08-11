const body = document.querySelector("body");


const IMG_NUMBER = 3;


function paintImge(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    // 주의! ''가 아니라 `` 임
    image.classList.add("bgImage");
    body.appendChild(image)
}

function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER)
    return number;
    //Math.floor (버림), Math.ceil (올림)
}

function init(){
    const randomNum = genRandom();
    paintImge(randomNum);
}

init();
