
//npm i xlsx

import {test , expect} from "@playwright/test"

import xlsx from 'xlsx'
import path from 'path'

const readXl = path.join("testData/testData3.xlsx")

const workBook = xlsx.readFile(readXl)

const worksheet = workBook.Sheets["Sheet1"]

const data = xlsx.utils.sheet_to_json(worksheet)
console.log(data)



    for(const dt of data){
        
test(`Reading data from excel file ${dt.ID}` , async ({page})=>{

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill(dt.USERNAME)
    await page.getByPlaceholder('Password').fill(dt.PASSWORD)

    await page.click('[id="login-button"]')    
})
    }









