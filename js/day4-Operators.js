//OPERATORS

//1 Arithmetic
var a = 10
var b = 20

var c = a + b
console.log(c)

var c = a - b
console.log(c)

var c = a * b
console.log(c)

var c = a / b
console.log(c)       //QUOTIENT 

var c = a % b
console.log(c)       //REMINDER

var c = a ** b
console.log(c)       //POWER ROOT
   


//2 ASSIGNMENT =
var a = 20
var b = 10

a = a + b
console.log(a)     //a = 20 + 10 = 30

a = a - b
console.log(a)     // a = 30 - 10 = 20

a = a * b  
console.log(a)     // a= 20 * 10 = 200

a /= b 
console.log(a)      //a = 200 / 10 = 20

a %= b 
console.log(a)      //a = 20 % 10 = 0

a **= b  
console.log(a)      //a = 0 * 0 * 0 * upto 10 times
 



//3 COMPARISON

var a = 100
var b = "100"

console.log( a == b )      //It will check loosely content value
console.log( a === b )     //It will check strictly typeof value

console.log( a < b ) 
console.log( a <= b ) 

console.log( a > b ) 
console.log( a >= b ) 

console.log( a != b ) 
console.log( a !== b ) 




//4 LOGICAL 
// && AND , || OR , NOT !

let input = 36
if( input >= 18 && input <= 56 ){
    console.log("Eligible")
}
else {
    console.log("Not Eligible")
}



input = 18
if(input == "18" || input === "18"){
    console.log(true)
}


// false = 0 , true = 1
// undefined  not a value
// null not a value
// 0 not a value

let age  = 0

if(age){
    console.log("Value")
}
else{
    console.log("Not a Value")
}




//5 UNARY
//PRE - INCREMENT / DECREMENT
var a = 100

console.log( ++a )
console.log( ++a )
console.log( --a )


//POST - INCREMENT / DECREMENT
var b = 2000

console.log( b++ )
console.log(b)

console.log( b-- )
console.log(b)



//6 TERNARY ?
let abc = 23

let x = (abc == 18 ) ?  true  :  (abc == "23") ? "Yes" : "No"
console.log(x)










