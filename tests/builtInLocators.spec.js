
import {test , expect} from "@playwright/test";

 
test("Handling BuiltIn Locators" , async function({page}){

    //browser launch 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //ALT
    const orangeLogo = await page.getByAltText('company-branding')
    await expect(orangeLogo).toBeVisible()

    //PLACEHOLDER
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill("admin123")

    //ROLE
    await page.getByRole('button' , {name : " Login "}).waitFor({state : 'visible'})
    await page.getByRole('button' , {name : " Login "}).click()


    //TEXT
   const userName = await page.locator('[class="oxd-userdropdown-name"]').textContent()
    console.log(userName)
   await expect(page.getByText(userName)).toBeVisible()


   //LABEL
    await expect(page.getByLabel('Sidepanel')).toBeVisible()

   //TITLE
    await page.getByTitle('Help').click()


   //TEST ID
   //Playwright.dev


})



