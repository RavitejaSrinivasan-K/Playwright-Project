

import {test , expect} from "@playwright/test";


test("Handling Single DropDown" , async ({page})=>{

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll
    await page.locator('[id="country"]').scrollIntoViewIfNeeded()

    //Assert
    await page.locator('[id="country"]').waitFor({state : 'visible'})

    //Select drop down

    //1 Visible Text
    await page.locator('[id="country"]').selectOption("India")
    await page.waitForTimeout(2000)

    //2 Label
    await page.locator('[id="country"]').selectOption({label : "China"})
    await page.waitForTimeout(2000)
    //3 Value
    await page.locator('[id="country"]').selectOption({value : "australia"})
    await page.waitForTimeout(2000)
    //4 Index
    await page.locator('[id="country"]').selectOption({index : 3})
    await page.waitForTimeout(2000)

    //Assert the options
    await expect(page.locator('[id="country"]>option')).toHaveCount(10)

    expect((await page.$$('[id="country"]>option')).length ).toBe(10)
})



test("Handling Multi DropDown " , async ({page})=>{

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll
    await page.locator('[id="colors"]').scrollIntoViewIfNeeded({timeout : 2000})

    //Assert
    await expect(page.locator('[id="colors"]')).toBeVisible()

    //appracoh 1
    await page.locator('[id="colors"]').selectOption(["Red" , "Green" , "Yellow" ,"Red" , "Green"])
    await page.waitForTimeout(5000)

    //De select
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(5000)

    //Duplicate
    await page.locator('[id="colors"]')
    .selectOption([{label : "Red"} , {value : "green"} , {label : "Yellow"} , {index : 4} , {index: 6}])
    await page.waitForTimeout(5000)

})



test.only("Handling Dynamic DropDown" , async ({page})=>{

    //browser launch
    await page.goto('https://ticketnew.com/movies/chennai')

    //Click on Search
    await page.click('//div[@id="headerEle"]//div//child::div[contains(@class,"dds-flex dds-flex-1 dds-justify")]//child::div[@class="dds-flex dds-items-center dds-gap-5 dds-flex-1 dds-justify-end"]//div//a//div[contains(text(),"Search")]')
    await page.waitForTimeout(5000)


    //Fill man
    await page.fill('(//input[contains(@class,"dds-rounded-lg dds-outline-none dds-transition-all")])[2]' , "man")
    await page.waitForTimeout(5000)


    //Select a movie from list
  const movieList =  await page.$$('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]")]//h5')

  for (const element of movieList) {
        const text = await element.innerText()

        if(text == "Manithan Deivamagalam"){
            await element.click()
            break;
        } 
  } 


  await page.waitForTimeout(5000)

})



