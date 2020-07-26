console.log(document) 

const realTitle = document.getElementById("title");
console.log(realTitle);
realTitle.innerHTML = "sunday";
// realTitle.style.color ="red";
//document object module 자바스크립트는 html태그를 가져다가 객체로 만든다.
// 문자열 " ", '' 까먹지 말기 
console.dir(title);

document.title = "HERE"; 
// 매개변수를 가질 수 있는건 함수만 document.title("HERE") <- 처럼 쓰는 것  BUT title 은 함수가 아님 ㅇㅇ...


const content = document.querySelector(".hello");
//querySelector는 노드의 첫번째 자식을 반환한다. 
// = document로 가서 모든 자식들 중에서 해당 선택자를 찾는다 . 

content.style.color = "red";

//자바스크립트는 웹에서 일어나는 이벤트에 반응하기 위해서 ~ 

function handleResize(event){
    // console.log("I have been resized");
    console.log(event);
}

window.addEventListener("resize", handleResize);
// //addEventListener(a,b) a가 발생하면 b를 호출한다 이때 handleResize() 이렇게 넣어주면 resize를 먹이지 않아도 바로 호출이 되기 때문에
// // 뒤에 있는 ()를 빼고 입력해야한다. 
// // resize 할 때 마다 event가 console.log에 찍힌다  handleResize(event) 이렇게 인자를 주지 않아도! 
// // ex) Event {isTrusted: true, type: "resize", target: Window, currentTarget: Window, eventPhase: 2, …} 



function handleClick(){
    // console.log("I have been resized");
    content.style.color = "blue";
}

content.addEventListener("click", handleClick);
//addEventListener(a,b) a가 발생하면 b를 호출한다 이때 handleResize() 이렇게 넣어주면 resize를 먹이지 않아도 바로 호출이 되기 때문에
// 뒤에 있는 ()를 빼고 입력해야한다. 


const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick2(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR)
        title.style.color = OTHER_COLOR;
    else 
        title.style.color = BASE_COLOR;
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick2);
}

init();