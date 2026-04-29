
import {test} from "@playwright/test"


test.describe("Grouping 1" , async ()=>{

test("Login Valid" , async ()=>{
    console.log("VALID")
})

test("Login InValid" , async ()=>{
    console.log("IN VALID")
})

test("Login Empty" , async ()=>{
    console.log("EMPTY")
})

test("Login Valid & Invalid" , async ()=>{
    console.log("VALID & INVALID")
})

})



test.describe("Grouping 2" , async ()=>{

    
test("Form Age (min)" , async ()=>{
    console.log("MIN")
})

test("Form Age (Just Below)" , async ()=>{
    console.log("JUST BELOW")
})

test("Form Age (Max)" , async ()=>{
    console.log("MAX")
})

test("Form Age (Just Above)" , async ()=>{
    console.log("JUST ABOVE")
})


})


