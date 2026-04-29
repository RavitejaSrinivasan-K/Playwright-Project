

import {test , chromium , firefox, webkit} from '@playwright/test'


test("Handling Window" , async ({})=>{

   const browser =  await chromium.launch({slowMo : 1500, channel : "chrome", headless : false})  //Browser
   const context = await browser.newContext({permissions : ['geolocation' , 'camera'] })     //Window
   const page1 = await context.newPage()      //Tab
//    const page2 = await context.newPage()    

    //Launch
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Click on Link
//    const [newPage] = await Promise.all([
//         context.waitForEvent('page') ,
//         page1.click('text=OrangeHRM, Inc')
//     ])

   await page1.click('text=OrangeHRM, Inc')

  const newPage = await context.waitForEvent('page') 

    await newPage.locator('[name="EmailHomePage"]').fill('raviteja@gmail.com')

    await newPage.click('[onclick="buttonClick()"]')

    await newPage.reload()
    await newPage.goBack()

    await page1.bringToFront()
   
    await page1.getByPlaceholder('Username').fill('Admin')
    await page1.getByPlaceholder('Password').fill('admin123')
    await page1.getByRole('button' , {name : " Login "}).click()
})














