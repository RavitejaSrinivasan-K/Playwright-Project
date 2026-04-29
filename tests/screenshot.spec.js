

import {test , expect} from "@playwright/test"


test("Take Normal Page" , async ({page})=>{

    //browser launch
    await page.goto('https://www.amazon.in/')

    //Load
    await page.waitForTimeout(3000)

    //Screenshot
    await page.screenshot({path : "images/" + "BasicPage.png"})
})


test("Take Locator Element" , async ({page})=>{

    //browser launch
    await page.goto('https://www.amazon.in/')

    //Load
    await page.waitForTimeout(3000)

    //Screenshot
    await page.locator('[id="nav-logo-sprites"]')
    .screenshot({path : "images/" + Date.now() +"LocatorElement.jpg"})
})


test("Take Full Page" , async ({page})=>{

    //browser launch
    await page.goto('https://www.amazon.in/')

    //Load
    await page.waitForTimeout(3000)

    //Screenshot
    await page.screenshot({path : "images/" + "FullPage.jpeg" , fullPage : true})
})



