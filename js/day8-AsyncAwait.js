
//Async is a keyword. It will make a function and return a promises.
//Used in top of the function
//Await is a keyword. It will pause the execution of promises untill resolve or reject.


async function fetchData(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            // resolve("This is Async!") , 
            reject(new Error("Network Isse"))
        } , 3000)
    })
}

// console.log(fetchData())

async function display(){
    console.log("Hi")

    try{

        const dt = await fetchData()
        console.log(dt)

    }catch(err){
        console.log(err)
    }

    console.log("Bye!")
}


display()





