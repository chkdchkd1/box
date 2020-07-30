const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS="toDos";
const toDos = [];



function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //JSON.stringify 는 자바스크립트의 object를 string으로 바꿔준다
    //jSON = JavaScript Object Notation : 데이터를 전달 할 때 자바스크립트가 그걸 다를 수 있도록 object로 바꿔주는 기능 ob->string ->ob

    // localStorage.setItem(TODOS_LS,toDos);
    //localStorage에는 자바스크립트의 데이터를 저장 할 수 없다. 오직 String만 저장 할 수 있음
    //ex) localStorage에 key값을 hello value 값을 true (boolean의 true)을 넣으면 반환하는건 문자열 "true" 이다  
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = " X " ;
    const span = document.createElement("span");
    const newId = toDos.length +1 ;
    span.innerHTML = text ; 
    li.appendChild(span)
    li.appendChild(delBtn)
    li.id = newId
    // span과 delBtn을 li의 자식으로 요소를 안에 넣는거 
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };

    toDos.push(toDoObj);
    saveToDos();
    
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
         const parsedToDos = JSON.parse(loadedToDos);
        //String -> object (밑에 forEach~ 함수를 실행하기 위해서 )
        console.log(loadedToDos);
        console.log(parsedToDos);

        //localStorge에 기존에 저장된걸 화면에 출력해야함 
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
        // parsedToDos.forEach(something);  위와 같은 코드, 단지 하나로 합친것일뿐 
        // forEach는 array를 위한 function

    } 
}

// function something(toDo){
//      paintToDo(toDo.text);
// }

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit)
}
    init();