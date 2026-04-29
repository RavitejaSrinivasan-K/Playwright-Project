//CONDITIONAL STATEMENTS

//IF , ELSE IF , ESLE , SWITCH , BREAK , CONTINUE , RETURN


let marks = 35

if(marks <= 100 && marks >= 80){
    console.log("GRADE : A")
}

else if(marks <= 79 && marks >= 60){
    console.log("GRADE : B")
}

else if(marks <= 59 && marks >= 35){
    console.log("GRADE : C")
}

else{
    console.log("FAILED")
}



//SWITCH

let day = 3

switch(day){

    case 1: 
    console.log("Monday")
    break

    case 2:
    console.log("Tuesday")
    break

    case 3:
    console.log("Wednessday")
    break

    case 4:
    console.log("Thursday")
    break

    case 5:
    console.log("Friday")
    break

    default :
    console.log("Happy Its Weekend!")
    break

}



//LOOPS - FOR , WHILE , DO WHILE 

//FOR - Initialization ; Condition ; Incre/Decre
console.log("---FOR---")

for(let i=1 ; i <= 10 ; ++i){
    console.log(i)
}



console.log("---WHILE---")
//WHILE - 
// Initialization ;
//  Condition ;
//  Incre/Decre

let j = 1

while(j <= 10){
    console.log(j)
    j++
}




console.log("---DO WHILE---")
// Initialization ;
//  Incre/Decre
//  Condition ;

let k = 1

do{
    console.log(k)
    k++
}
while(k <= 10)





// FOR METHODS 

console.log("---FOR OF---")

//FOR OF 
let arr = [100, 200, "javascript" , true]

for (const val of arr) {
    console.log(val)
}



//FOR EACH 
console.log("---FOR EACH---")

arr.forEach(function(v , i , a){
    console.log(v , i , a)
})




//FOR IN 
console.log("---FOR IN---")

var obj = {company : "TechM" , empId : 786 , job : false}

for (const key in obj) {
    // console.log(key)
    // console.log(obj[key])
    console.log(key , "=" , obj[key])
}



console.log("---CONTINUE---")
//CONTINUE

for(let a=1; a<=10 ; a++){

    if(a == 6){
        continue
    }
    console.log(a)
}


console.log("---NESTED LOOP---")
//NESTED LOOP
for(let i=1 ; i <= 5 ; i++){

    for(let j=1 ; j <= 5; j++){
        console.log(i , "==" , j)
    }
}



//STAR
for(let i=1 ; i <= 5 ; i++){

    let row = " "
    for(let j= 1 ; j <= 5; j++){
        row = " *" + row
       console.log(row) 
    }
     
}

