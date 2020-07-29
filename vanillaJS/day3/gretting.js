const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
    // querySelector 찾은것의 첫번째 것을 가져옴
    // querySelectorAll 해당하는 모든걸 가져옴. array

    // console.log(input)
    // = <input type="text" placeholder="what is your name?"> 

    const User_LS = "currentUser",
        SHOWING_ON = "showing";
    //이렇게 하는 이유 직접적으로 넣으면 값을 변경할 때 일일이 다 찾아가서 바꿔야하지만 이런식으로 넣어주면 선언할 때의 값만 바꿔주면 된다.  

function saveName(text){
    localStorage.setItem(User_LS,text);
}

function handleSubmit(event){
    // event.preventDefault(); 
    // input을 입력하고 enter를 치면 새고가 되면서 값이 날라가지만 위의 코드를 입력하면 enter를 눌러도 새고가 되지 않고 값이 날라가는걸 막는다.
    const currentValue = input.value; 
    paintGreeting(currentValue);
    saveName(currentValue);
    
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",handleSubmit);
    //form이 있기에 submit
}
function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerHTML = `Hello ${text}`
    //이건 불러온것일뿐 실제로 저장한건 X 
}

function loadName(){
    const currentUser = localStorage.getItem(User_LS);
    //  local Storage : 작은 정보를 유저 컴퓨터에 저장하는것  localStorage.setItem("a",true) , localStorge.getItem("a"), true
    if(currentUser == null ){
        askForName();
    }else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();

