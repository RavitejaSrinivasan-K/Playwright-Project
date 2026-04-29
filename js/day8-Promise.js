
//PROMISE is a OBJECT
/*
# Promise will handle Asynchronous operations like
 - API Calls, File Loading, Time Delay Easier. 
# Think of a promise is a placeholder, That value will be available in the future.
# It will run 3 states : RESOLVE, REJECT, PENDING
*/

let prom1 = new Promise((resolve, reject)=>{

    let paymentStatus = false

    if(paymentStatus){
        resolve()
    }else{
        reject()
    }
})

// console.log(prom1)

//HOISTING
prom1.then(success).catch(failed).finally(()=> console.log("This is Final"))

function success(){
    console.log("I got a payment!")
}

function failed(){
    console.log("I did not recieved")
}




//APPRAOCH - 2
let prom2 = new Promise((resolve, reject)=>{

    let paymentStatus = true

    if(paymentStatus){
        resolve("Thank you promise")
    }else{
        reject("Rejected")
    }
})


prom2.then((res)=> console.log(res))

.catch((rej)=> console.log(rej))






//PROMISE ALL
Promise.all([
    Promise.resolve("Start") , 
    Promise.reject("Middle") ,
    Promise.resolve("END")
]).then((res)=> console.log(res)).catch((er)=> console.log(er))




//PROMISE ALL SETTLED
Promise.allSettled([
    Promise.resolve("Morning") ,
    Promise.reject("Evening")
]).then((res)=> console.log(res)).catch((er)=>console.log(er))




//PROMISE RACE
Promise.race([
    new Promise((res)=> setTimeout(res, 1500, "Race1")) ,
    new Promise((res, rej)=> setTimeout(rej, 3000, "Race2")) , 
    new Promise((res)=> setTimeout(res, 2000, "Race3"))
]).then((res)=> console.log(res)).catch((er)=> console.log(er))




