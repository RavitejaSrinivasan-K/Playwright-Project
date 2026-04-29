

import {test} from "@playwright/test"


test("Test1 ", {tag : "@smoke"} ,async ({})=>{
    console.log('SMOKE')
})

test("Test2 @sanity", async ({})=>{
    console.log('SANITY')
})

test("Test3 @reg", async ({})=>{
    console.log('REG')
})

test("Test4 @smoke@sanity", async ({})=>{
    console.log('SMOKE with SANITY')
})

test("Test5 @sanity@reg", async ({})=>{
    console.log('SANITY with REG')
})

test("Test6 @smoke@reg", async ({})=>{
    console.log('SMOKE with REG')
})


/**
 * npx playwright test --grep "@smoke"  //WHERE and ALL SMOKE AVAILABLE
 * npx playwright test --grep "@smoke" --grep-invert "@sanity"   //SMOKE AND REG
 * npx playwright test --grep "@smoke" --grep-invert "@sanity|@reg"  //Only SMOKE
 * npx playwright test --grep "@smoke" --grep-invert "@sanity&@reg"  //SMOKE, SANITY, REG
 */

