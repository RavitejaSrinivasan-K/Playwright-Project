
import {test, expect} from "@playwright/test"

let page 

test.beforeEach(async ({browser})=>{

    const context = await browser.newContext()  //INCOGNITO WINDOW 
     page = await context.newPage()   //TAB

       //Browser launch
   await page.goto('https://www.demoblaze.com/')

   //Login Click
   await page.click('[id="login2"]')

   //Credentials
   await page.locator('[id="loginusername"]').fill('Raviteja18')
   await page.fill('[id="loginpassword"]' , 'Trend@123')

   //LognBtn
   await page.click('button:has-text("Log in")')
   await page.waitForTimeout(3000)


})

test.afterEach(async ({})=>{
  await  page.screenshot({path : "images/" + "demoBlaze.png"})
})


test("Print the Products" , async ({})=>{

     await page.waitForSelector('[class="hrefch"]')

  const productsList = await page.$$('[class="hrefch"]')
  for (const element of productsList) {
    const text = await element.textContent()
    console.log(text)
  }

  await page.waitForTimeout(3000)

})

test("Add to Cart" , async ({})=>{
    
     await page.locator('//a[text()="Sony xperia z5"]').click()

  await page.waitForURL('https://www.demoblaze.com/prod.html?idp_=6')

  //Event
  page.once("dialog" , async a=>{
    await expect(a.message()).toContain("Product added")
    await a.accept()
  })

  await page.click('text=Add to cart')
  await page.waitForTimeout(3000)

})

test("Check Out" , async ({})=>{
    
     await page.locator('[id="cartur"]').waitFor({state : 'visible'})

  await page.click('[id="cartur"]')

  await page.locator('[data-target="#orderModal"]').waitFor()
  await page.click('[data-target="#orderModal"]')

  //Fill details
  await page.fill('[id="name"]' , "Raviteja")
  await page.fill('[id="country"]', 'India')
  await page.fill('[id="city"]' , 'Chennai')
  await page.fill('[id="card"]' , '12345678')
  await page.fill('[id="month"]' , 'July')
  await page.fill('[id="year"]' , '2028')

  await page.click('[onclick="purchaseOrder()"]')
  await page.waitForTimeout(3000)

})



