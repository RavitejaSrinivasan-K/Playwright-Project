
import {test , expect} from "@playwright/test"

test("Handling Frame" , async function({page}){

    //browser launch
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Count of Frames
   const framesCount = await page.frames()
   console.log(framesCount.length)

   //Appraoch 1
   const frame1 = page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"})

   await frame1.locator('[type="text"]').fill("JavaScript")
   await page.waitForTimeout(3000)

   //Appraoch - 2
   await page.frameLocator('[src="frame_2.html"]').locator('[type="text"]').fill('Playwright')
   await page.waitForTimeout(3000)


})


test.only("Handling Inner Frame" , async ({page})=>{

    //browser launch
    await page.goto('https://ui.vision/demo/webtest/frames/')
    await page.waitForTimeout(3000)

    //Frame 3
    const frame3 = page.frameLocator('[src="frame_3.html"]')

//  await frame3.contentFrame()
//  .locator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').contentFrame().locator('[class="AB7Lab Id5V1"]').nth(1).click()


await frame3.frameLocator('//iframe[contains(@src,"https://docs.google.com/forms/")]').locator('[id="mG61Hd"]').locator('[class="AB7Lab Id5V1"]').nth(1).click()




//Appraoch 2
// const frame4 = page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"})

//     const childFrames = frame4.childFrames()
//     console.log(await childFrames.length)

//     await childFrames[0].locator('[class="AB7Lab Id5V1"]').nth(1).click()
//    await page.waitForTimeout(3000)
//    await childFrames[0].locator('[class="uHMk6b fsHoPb"]').last().click()
//    await page.waitForTimeout(3000)


})





