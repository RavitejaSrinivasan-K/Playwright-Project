
import {test , expect} from "@playwright/test"
import { selectDate } from "../utility/pickDate"

test('Handling Date Picker' , async ({page})=>{

    //browser luanch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll
    await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Click on DatePicker
    await page.locator('[id="datepicker"]').click()
    await page.waitForTimeout(2000)

    //Choose Day, Month, Year
    // let selectedDate = "15"
    // let selectedMonth = "August"
    // let selectedYear = "2028"

    let {date, month, year } = selectDate(5)

    while(true){

        const currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').innerText()

        if(currentMonth === month && currentYear === year.toString()){
            break
        }

        // await page.click('//span[text()="Prev"]')
        await page.click('//span[text()="Next"]')
    }

    await page.waitForTimeout(4000)

    await page.click(`//a[@class="ui-state-default" and text()="${date}"]`)
    await page.waitForTimeout(4000)

})

