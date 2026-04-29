
import {test , expect} from "@playwright/test"


test("Handling Web Table" , async ({page})=>{

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")


    //Scroll
    await page.locator('[id="productTable"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Table Columns
   const tableColumns =  await page.$$('[id="productTable"] thead tr th')
   console.log(tableColumns.length)

   //Table Rows
  const tableRows = await page.locator('[id="productTable"]>tbody>tr')
  console.log(await tableRows.count())


  //1 Select a Product

  const selectedProd = await tableRows.filter({
        has : page.locator('td') ,
        hasText : "Tablet" , 
    })

    await selectedProd.locator('input').click()
    await page.waitForTimeout(3000)


  //2 Select Multiple Products
  async function multiProd(prodName) {

      const selectedProd = await tableRows.filter({
        has : page.locator('td') ,
        hasText : prodName , 
    })

    await selectedProd.locator('input').click()
  } 

  await multiProd("Smartphone")
  await multiProd('Wireless Earbuds')
  await page.waitForTimeout(3000)


  //3 Print products from page 1

  for(let i=0; i < await tableRows.count() ; i++){      //row    i=0; i < 5 ; i++
    const tds = await tableRows.nth(i).locator('td')       // nth(0).td
    // console.log(await tds.allInnerTexts()) 

    for(let j=0; j < await tds.count() ; j++){        //columns   //j=0; j < 20 ; j++
      const text = await tds.nth(j).textContent()        //n(0).text
      console.log(await text)
    }
  }

  console.log("==========-=-=-==========")


  //4 Print products from all pages 
  const pages = await page.locator('[id="pagination"] li a')
  console.log(await pages.count())


  for(let k=0; k < await pages.count(); k++){

    if(k > 0){
      await pages.nth(k).click()
    }

    for(let i=0; i < await tableRows.count() ; i++){      //row
    const tds = await tableRows.nth(i).locator('td') 
    // console.log(await tds.allInnerTexts())

    for(let j=0; j < await tds.count() ; j++){        //columns
      const text = await tds.nth(j).textContent()
      console.log(await text)
    }
  }

  }


})

























