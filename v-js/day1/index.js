const a = 221;
// constant 상수 변하지 않는 수 
// 기본적으로 변수를 선언할 땐 const를 쓸 것 , 필요할 때 까지는 let을 쓰지말 것 
let b = a - 5;
//let은 값을 다른 값으로 바꿀 수 있음
//var는 바꿀 수 있는 값인지 아닌지 중요 X 3년전에는 var만 쓸 수 있었음 

// a  = 4;
// Uncaught TypeError: Assignment to constant variable. (상수에 대입X )
console.log(b);


// Array
const daysOfWeek = ["Mon", "Tue","Wed","Thu","Fri","Sat","Sun"]
console.log(daysOfWeek);
console.log(daysOfWeek[1]); 


//Object
const jsInfo = {
    name:"js",
    age:55,
    gender:"Female",
    isLive:true,
    favDrink : ["tsingtao","stellar","Hwayo"],
    favTime : [
        {
            name:"dawn", 
            lively:true
        }, 
        {
            name:"morning", 
            lively:false
        }
    ]
}

console.log(jsInfo);
console.log(jsInfo.isLive);

jsInfo.isLive = false;

console.log(jsInfo.isLive);

