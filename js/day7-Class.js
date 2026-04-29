
//OBJECT

//  APPRAOCH - 1

let obj1 = {
    name : "Ravi" , 
    age : 23 ,
    course : true ,

    abc : function(){
        console.log("Hello World!")
    },

    object1 : {company : "TechM" , empId : 786 , job : false}
}


console.log(obj1)

//DOT NOTATION
console.log(obj1.name)

//BRACE NOTATION
console.log(obj1['age'])

//CHAINING
console.log(obj1.object1.empId)


//ADD
obj1.xyz = [10, 20, 30]
console.log(obj1)

//UPDATE
obj1.name = "Tej"
console.log(obj1)

//REMOVE
delete obj1.course
console.log(obj1)




//APPRAOCH - 2
let obj2 = new Object()

obj2.name = "Eswar"
obj2.age = 18
obj2.course = true
obj2.abc = function(){
    console.log("This is Object")
}
obj2.arr = [101, 102, 103]
obj2.object2 = {company : "Apple" , empId : 123, Job : true}


console.log(obj2)

console.log(obj2.name)






//CLASS - BASE , PARENT , SUPER
//Class - is a Template / BluePrint of properties and methods.
//Constructor - is a special method. use to store objects
//THIS - is a keyword. use to access current class properties and methods actions.

class User1 {      //PascalCase

    constructor(user) {      //camelCase
        this.user = user
        this.amount = 10000
    }

    logIn(name){      //camelCase
        console.log("Hi", name  ,"Welcome")     //localVariable
        return this
    }

    logOut(){
        console.log("Thank you for visit", this.user)    //globalVariable
    }

    payment(){
        console.log("We Recieved", this.amount ,"from you")     //fixedVariable
    }
}


const p1 = new User1("Ravi")

p1.logIn("Vikram")

p1.logIn("Sarath")

p1.payment()

p1.logOut()






//CLASS - DEVIRED, CHILD, SUB
//STATIC - is a keyword. use to access unique / same value instance.
//static - variable , method. It will access class itself not object instace

//EXTENDS is a keyword. use to access parent class objects
//SUPER is a keyword. use to access parent class properties and methods


class User2 extends User1{

    static usersCount = 0

    constructor(){
        super()
        this.count = 0
        User2.usersCount++
    }

    fectchData(){
        console.log(`Your Web App UserId's Count : ${++this.count}`)
    }

   static display(){
    console.log("Your Total email id's count :" , User2.usersCount)
    }

}

const p2 = new User2()

p2.fectchData()
p2.fectchData()
p2.fectchData()


User2.display()
User2.display()


const p3 = new User2()
User2.display()

const p4 = new User2()
User2.display()
User2.display()

p4.logIn("Gokul").payment()






/**
 * In JS, OOP has 4 main pillars:

 1.Encapsulation
      - Wrapping data + methods together inside a class.

 2.Abstraction
      - Hide internal implementation.

 3.Inheritance
      - One class inherits properties & methods from another.

 4.Polymorphism
      - Same method name, different behavior.
      1. Method OverLoading - not possible 
      2. Method OverRiding 


1.  Constructor
      - A constructor is a special function used to create and initialize objects.

*/




















