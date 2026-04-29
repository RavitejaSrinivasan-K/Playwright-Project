
//1 BASIC 

var arr = [10, 20, 30, 40]

var [a, b, c, d] = arr

console.log(a)
console.log(b)
console.log(c)



//2 SKIP
var arr = [100, 200, 300, 400, 500]

var [a, , c , , e] = arr

console.log(a)
console.log(b)
console.log([a, , c , , e])




//3 REST ...

var arr = [101, 202, 303, 404, 505, 606, 707]

var [a, b, c, d, ...e] = arr

console.log(a)
console.log(b)
console.log(e)



//SPEARD ...
console.log(...e)




//4 SWAP
let abc = 111 
let xyz = 222 ;

[abc, xyz] = [xyz, abc]


console.log(abc)



//ERROR

try{

    let min = "@#&$*%V"

    if( min <= 17 && min >= 1){
        throw "Invalid Input"
    }else if(min === ""){
        throw "Kindly enter required field"
    }else if( isNaN(min)){
        throw "MisMatch Values"
    }else{
        console.log("Thank you!")
    }

}catch(err){
    console.log(err)
}


// ReferenceError
// TypeError
// SyntaxError

