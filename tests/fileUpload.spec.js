
import {test , expect} from "@playwright/test"
// import path from 'path' 


test("Handling Single File " , async ({page})=>{

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll
    await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Single File
    await page.locator('[id="singleFileInput"]')
    .setInputFiles("C:/Users/Dell/Desktop/Assessments_Files/Assessment-py.txt")
    await page.waitForTimeout(5000)

    
    //Multiple Files
    await page.locator('[id="multipleFilesInput"]')
    .setInputFiles([
        'C:/Users/Dell/Documents/Raviteja_Docs.xlsx' ,'C:/Users/Dell/Documents/JavaScript_Learning.docx'
    ])
    await page.waitForTimeout(5000)


})




















