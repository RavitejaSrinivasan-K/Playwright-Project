//Single Comment Line


/**
 * Multiple
 * Lines
 * Comment
 */


//1 FIXED VALUES
console.log(83589)      //NUMBER
console.log('qwerty 1234567 !@#$%^')      //STRING
console.log(true)       //BOOLEAN

console.log( [101, 20.234, "Playwright" , false] )     //ARRAY
console.log( {name : "tej" , day : 2 , course : true} )      //OBJECT



//2 VARIABLE VALUES -
//VAR - Function scope
var a = 10

var a = 20      //Re-Declaration is allowed

a = 30          //Re-Assignment is allowed
console.log(a)



//LET - Block Scope
let b = 100

// let b = 200     //Re-Declaration is not allowed

b = 300            //Re-Assignment is allowed
console.log(b)



//CONST - Block & Immutable 
const c = 1000   

// const c = 2000        //Re-Declaration is not allowed

// c = 3000              //Re-Assignment is not allowed
console.log(c)



//DATA TYPES
//PRIMITIVE (IMMUTABLE) - CANNOT BE CHANGE - STACK MEMORY

//Number
var num = 786
console.log(typeof num)


//String
var str = "Javascript"
console.log(typeof str)


//Boolean
var boo = true
console.log(typeof boo)


//Null
var n = null
console.log(typeof n)


//Undefined
var u
console.log(typeof u)


//Special  Values
//NAN - Not A Number
var an = 'hello' * 3      
console.log(typeof an , an)


//INFINITY
var ai = 1000 ** 1000
console.log(ai)



//NON - PRIMITIVE (Mutable) - CAN BE CHANGE - HEAP MEMORY

//Array
var arr = [10, 20, "playwright" , false]
console.log(typeof arr)


//Object
var obj = { company : "TechM" , empId : 786 , job : false}
console.log(typeof obj)


//Function

function greet(){
    console.log("Hello World!")
}

greet()
greet()
greet()
console.log(typeof greet)











