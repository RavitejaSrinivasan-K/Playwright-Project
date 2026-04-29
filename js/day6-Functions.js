
//1 Basic Function / Declaration Function

//without param
function greet(){
    console.log("Hello World!")
}

greet()
greet()


//with paramater
function isEven(num){
    return num == 20
}

console.log(isEven(10))
console.log(isEven(20))


//multi param
function isPositive(a, b, c){
    return a + b + c
}

console.log(isPositive(10, 5, 25))


//default
function defalt(name = "Ai"){
    console.log("Hi" , name)
}

defalt()
defalt("Ram")




//2 Expression Function

//without param
let a1 = function(){
    console.log("This is Expression Function")
}

a1()


//with param
let a2 = function(num){
    console.log(num * 5)
}

a2(10)


//multi param
let a3 = function(l, h, b){
    return l * h * b
}

console.log(a3(100, 200, 300))


//default
let a4 = function(name = "Guest User"){
    console.log("Hi", name)
}

a4()
a4("Raj")



//3 ARROW FUNCTION

//without 
let b1 = () => {
    console.log("This is Arrow Function!")
}

b1()


//with param
let b2 = (a) => console.log(a * 20)

b2(10)


//multi param
let b3 = (l,h,b) => {
    return l + h - b
}

console.log(b3(100, 120, 50))


// ex ; - without return keyword
// b3 = (l, h, b) => l + h + b


//default
let b4 = (name = "Arrow") => console.log("Hi" , name)

b4()
b4("Arjun")



//HOISTING

// console.log(a)

// var a = 100

abc()

function abc(){
    console.log("Hoisting")
}


function abc(){
    console.log("This is Hoisting...")
}



//4 Anonymous Function

console.log("START")

setTimeout( ()=>{
console.log("MIDDLE")
} , 2000  )

console.log("END")



//5 CALL BACK

function redmi(){
    console.log("Indias Best Seller")
}

function vivo(call){
    console.log("Indias 200Mp Camera")
}

vivo(redmi())



function jack(val , name){
    console.log("Hi " ,val )
    name()
}

function john(){
    console.log("This CallBack")
}

jack('Rose' , john)





//6 IIFE - Immediate Invoked Function Expression

// (function(){
//     let secretKey = "Test@123"
//     console.log("SecretKey is Hidden")
// })()



//7 RECURSION

//5! => 5* 4* 3* 2* 1!

function fact(num){

    if(num == 1){
        return 1
    }

    return num * fact(num-1)

}

console.log(fact(5))

//num 5 * (5-1)4 = 20
//num 20 * (4-1)3 = 60
//num 60 * (3-1)2 = 120
//num 120 * (2-1)1 = 120




//8 ASYNC FUNCTION  



  