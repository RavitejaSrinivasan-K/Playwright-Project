
//npm i dotenv

import {test , expect} from "@playwright/test";

const data = [
    {
    user : process.env.USER_NAME,
    pass : process.env.PASSWORD 
    },
    {
    user : process.env.INVALID_USER,
    pass : process.env.INVALID_PASS
    },
    {
    user : process.env.EMPTY_USER,
    pass : process.env.EMPTY_PASS

    }]


    data.forEach((dt , index)=>{
        
test(`Reading data from env file ${++index}` , async ({page})=>{

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill(dt.user)
    await page.getByPlaceholder('Password').fill(dt.pass)

    await page.click('[id="login-button"]')    
})
    })




