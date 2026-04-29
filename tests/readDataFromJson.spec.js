import {test , expect} from "@playwright/test"

import {sauceDemo} from "../testData/testData2.json"


 sauceDemo.forEach((dt , index)=> {

test(`Reading Data From Json ${++index}` , async ({page})=>{

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill(dt.username)
    await page.getByPlaceholder('Password').fill(dt.password)

    await page.click('[id="login-button"]')    
    
    if(await expect(await page.locator('[data-test="title"]')).toBeVisible()){
        console.log("Successfully LoggedIn")
    }else if(await expect(page.locator('[data-test="error"]')).toBeVisible()){
        console.log("Locked User")
    }else{
        console.log("Empty User")
    }
})
})





