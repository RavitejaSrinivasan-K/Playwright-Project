
import {test , expect} from "@playwright/test"


test("Handling Mouse Hover" , async ({page})=>{

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Hover
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)

    //Laptop
    await page.locator('a:has-text("Laptops")').click()
    await page.waitForTimeout(2000)

})



test("Handling Double Click" , async ({page})=>{

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll
    await page.locator('[id="field1"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Clear
    await page.locator('[id="field1"]').clear()
    await page.waitForTimeout(2000)

    //Fill
    await page.locator('[id="field1"]').fill("Raviteja")
    await page.waitForTimeout(2000)

    //Double Click
    await page.locator('text=Copy Text').dblclick()
    await page.waitForTimeout(2000)
})


test("Handling Right Click" , async ({page})=>{

    //browser launch
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    //wait
    await page.waitForTimeout(3000)
    await page.locator('span:has-text("right click me")').click({button : 'right'})

    //Dialog
    await page.on("dialog" , async a =>{
        expect(a.message()).toContain('clicked')
        await page.waitForTimeout(1500)
        await a.accept()
    }) 

    //Click
   await page.click('//span[text()="Quit"]')
   await page.waitForTimeout(3000)

})



test("Handling Drag and Drop" , async ({page})=>{

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll
    // await page.locator('[id="draggable"]').scrollIntoViewIfNeeded()

    await page.mouse.wheel(0, 1500)
    await page.waitForTimeout(2000)

    //Source 
    const source = page.locator('[id="draggable"]')

    //Target
    const target = page.locator('[id="droppable"]')


    //Appraoch - 1
    // await page.dragAndDrop('[id="draggable"]' , '[id="droppable"]')

    //Approach - 2
    // await source.dragTo(target)

    //Apprach - 3
    await source.hover()
    await page.mouse.down()
    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(3000)


})



test("Handling KeyBoard Actions" , async ({page})=>{

    //browser launch
    await page.goto('https://gotranscript.com/text-compare')

    //Mouse
    await page.mouse.wheel(0, 300)
    await page.waitForTimeout(2000)

    //Fill
    await page.locator('[name="text1"]').fill("JavaScript with Playwright")
    await page.waitForTimeout(2000)

    //Control + KeyA
    await page.keyboard.press('Control+KeyA')
    await page.waitForTimeout(2000)

    //Control + C
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(2000)

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.waitForTimeout(2000)

    //Control + V
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(2000)

    for(let i=1; i <= 2; i++){
        await page.keyboard.press('Tab')
    }

    await page.waitForTimeout(2000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(6000)

    //Captcha
    //await page.pause()

})





