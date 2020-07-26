function sayHello(name, age){
    // console.log('hello', name , "you have", age);
    // console.log(`Hello ${name} you are ${age} years old`)

    return  `Hello ${name} you are ${age} years old`;
}


// sayHello("philo",54);

const greetPhilo = sayHello("philo",44)
console.log(greetPhilo);
//console 이라는 객체의 log라는 함수 

const calculator = {
    plus : function(a,b){
        return a + b;
    },
    minus : function(a,b){
        return a - b;
    }     
}

const result = calculator.plus(5,80)
//calculator 라는 객체에 2개의 인자를 가지는 plus라는 함수 
console.log(result)
