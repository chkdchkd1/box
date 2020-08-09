const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS="toDos";
let toDos = [];



function deleteToDo(event){
    // console.log(event.target.parentNode);
    // console.dir(event.target.parentNode);
    // 그냥 event로 걸면 어떤 버튼이 클릭되었는지 알 수 없다. console.log(event.target):  <button> X </button>
    /* dir 객체는 dir, 나머지는 log로 로깅하면 편합니다. DOM 객체를 로깅해보겠습니다.
    console.log(document.body);  <body>...</body>
    DOM 객체의 메서드가 뭐가 있는지 보고싶은데 태그만 보입니다. 이럴 때 dir을 쓰면 됩니다. */
 
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function filterFn(toDo){
        // filter는 forEach에서 function을 실행하는 것 같이 각각의  item 같이실행된다 
        // filterFn을 체크해서 true인 item으로 새로운 array를 만든다. 
        // filter(객체)
        // console.log(toDo.id , li.id);
    return toDo.id !== parseInt(li.id);
    // 배열에 저장되어 있는 id와 li의 id..! 헷갈리지 말것! 
    // li.id는 string 이기에 int로 바꾸어 주어야한다. ( "1" )
    // 내가 지우고 싶은걸 제외한걸 담아 array로 만든게 cleanToDos
    });

    toDos = cleanToDos
    // 이전의 것을 새로운것으로 바꿈.. but 처음에 toDos를 const로 했기때문에 바꿀 수 없다
    //  그래서 let 으로 바꿔야한다 (const는 변하지 않는 상수 )
    saveToDos();
}

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
    delBtn.addEventListener("click",deleteToDo)
    const span = document.createElement("span");
    span.innerHTML = text ;
    const date = document.createElement("span");
    let registerDate = new Date();
    registerDate = getFormatDate(registerDate);
    date.innerText = registerDate;
    li.appendChild(span)
    li.appendChild(date)
    li.appendChild(delBtn)
    const newId = toDos.length+1 ;
    // 아직 toDos에 안넣었기 때문에 toDos.length는 0임 근데 첫번째 넣을경우 1번이 들어가야하니까 +1
    li.id = newId
    // span과 delBtn을 li의 자식으로 요소를 안에 넣는거 
    toDoList.appendChild(li);
    const toDoObj = {
        date : registerDate,
        text : text,
        id : newId
    };

    toDos.push(toDoObj);
    saveToDos();
    
}


function getFormatDate(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return  ' (' + year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second + ')';    //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

function paintToDo2(toDo){

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = " X " ;
    delBtn.addEventListener("click",deleteToDo)
    const span = document.createElement("span");
    span.innerHTML = toDo.text ;
    const registerDate = document.createElement("span");
    registerDate.innerText = toDo.date;
    li.appendChild(span)
    li.appendChild(registerDate)
    li.appendChild(delBtn)
    const newId = toDos.length+1 ;
    // 아직 toDos에 안넣었기 때문에 toDos.length는 0임 근데 첫번째 넣을경우 1번이 들어가야하니까 +1
    li.id = newId
    // span과 delBtn을 li의 자식으로 요소를 안에 넣는거 
    toDoList.appendChild(li);
    const toDoObj = {
        date : toDo.date,
        text : toDo.text,
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
            paintToDo2(toDo);
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


