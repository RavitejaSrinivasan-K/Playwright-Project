
//ARRAY METHOD
//Index starts from 0,1,2,3,...
//Length starts from 1,2,3,...

// var arr = new Array(4)

var arr = [10, 20, 30, 40, 50]

console.log(arr)
console.log(arr[3])
console.log(arr[10])


//PUSH
arr.push(600, 700, true , "java")
console.log(arr)

//POP
arr.pop()
console.log(arr)


//SHIFT
arr.shift()
console.log(arr)

//UNSHIFT
arr.unshift(100, 101, 200, 201)
console.log(arr)


//TO STRING
var arr = ["javascript" , 100, false]

var str = arr.toString()
console.log(str)



//SLICE - Based On starting index between ending index +1
var arr = [100, 200, 300, 400, 500, 600, 700]

var str = arr.slice(2 , 5)
console.log(str)


//REVERSE
var arr = [101, 202, 303, 404, 505]
console.log(arr.reverse())


//JOIN
var arr = [100, 200, 300, 400]

console.log(arr.join(' + '))


//CONCAT
var arr1 = [1, 2, 3]
let arr2 = ["java" , "javascript" , "playwright"]
const arr3 = [true, false]

console.log( arr2.concat(arr1, arr3) )



//MAP - transfermatter
var arr = [4, 9, 16, 25, 36, 49.754]

var str = arr.map(Math.sqrt)
console.log(str)


var str = arr.map(function(coupon){
    return coupon + 20
})

console.log(str)



//FILTER - 
var arr = [1, 2, 3, 4, 5, 6]

var str = arr.filter(function(num , ind){
    return num % 2 !== 0
})

console.log(str)



//REDUCE
var arr = [10, 20, 30, 40]

var str = arr.reduce(function(num1 , num2){
    return num1 + num2
} , 10 )

//num1 0 + num2 10 = 10
//num1 10 + num2 20 = 30
//num1 30 + num2 30 = 60
//num1 60 + num2 40 = 100

console.log(str)



//SPLICE - Based on starting index , Delete count , ...Values
var arr = [100, 200, 300, 400, 500, 600, 700]

//remove
arr.splice(2, 3)
console.log(arr)

//update
arr.splice(2, 2 , 10, "javascript" , true)
console.log(arr)

//add
arr.splice(2, 0, 101, 202, 303)
console.log(arr)



//VALUES
var arr = [10, "java" ,"javascript", 20 , true]

var str = arr.values()

for (const val of str) {
    console.log(val)
}



//FOR EACH

arr.forEach(function(v , i , a){
    console.log(v , i , a)
})



//SORT
var arr = [11, 2, 9, 21, 7, 45, 32, 18]

var asc = arr.sort(function(num1 , num2){
    return num1 - num2
})

console.log(asc)


//num1 11 - num2 2 = 9
//num1 11 - num2 9 = 2
//num1 11 - num2 21 = -10

var desc = arr.sort(function(num1 , num2){
    return num2 - num1
})

console.log(desc)

