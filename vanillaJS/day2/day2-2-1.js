const titlename = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClassname = titlename.className;
    
    // (1)
    // if (currentClassname !== CLICKED_CLASS){
    //     titlename.className = CLICKED_CLASS;
    // } else {
    //     titlename.className ="";
    // }

    // (2)
    // if (currentClassname !== CLICKED_CLASS){
    //     titlename.classList.add(CLICKED_CLASS);
    // } else {
    //     titlename.classList.remove(CLICKED_CLASS);
    // }
    // but 위 코드는 한개의 클래스만 체크할 수 있다. 클래스가 추가되어 class= "btn cliked"가 되면 cliked를 제거 할 수 없다.  
}

function handleClick2(){
    // const hasClass = titlename.classList.contains(CLICKED_CLASS);
    // // true/ false 를 반환한다.
    // if(hasClass){
    //     titlename.classList.remove(CLICKED_CLASS);
    // }else {
    //     titlename.classList.add(CLICKED_CLASS);
    // }

    titlename.classList.toggle(CLICKED_CLASS);

}



function init(){
    titlename.addEventListener("click",handleClick2)
}

init();

