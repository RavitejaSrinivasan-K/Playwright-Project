
import {test , expect} from "@playwright/test"


test("Validating Title & Url" , async function({page}){

    //browser launch
    await page.goto("https://www.demoblaze.com/");

    //Title & URL
    const pageTitle = await page.title();
    console.log(await pageTitle)

    console.log(await page.url());


    //ASSERTION
    await expect(page).toHaveTitle('STORE')

    await expect(page).toHaveURL("https://www.demoblaze.com/")


    //Click on login linkText
    await page.locator('#login2').click()

    //Username
    await page.locator('[id="loginusername"]').fill("Raviteja18")

    //Password
    await page.fill("id=loginpassword" , "Trend@123")

    //LoginBtn
    await expect(page.locator('[onclick="logIn()"]')).toBeVisible()
    await page.locator('[onclick="logIn()"]').click()

    //Hardwait
    // await page.waitForTimeout(5000)
   
    //Validate dashBoard
    // await expect(page.locator('[id="nameofuser"]')).toBeVisible()

    await page.locator('[id="nameofuser"]').waitFor({state : "visible"})

   const userName = await page.locator('[id="nameofuser"]').textContent()
   await expect(userName).toContain("Raviteja")


   //Multiple WebElements
   const productList =  await page.$$("//div//h4//a")

   for (const element of productList) {
      const text = await element.textContent()
      console.log(text)
   }

   

})





