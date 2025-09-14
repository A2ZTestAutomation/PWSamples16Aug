import { test, expect } from '@playwright/test'


test('Handle Shadow DOM', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const shadowTxt = await page.locator('span#shadow_content').textContent()
    console.log('Shadow TExt...', shadowTxt)
    expect(shadowTxt).toEqual('Mobiles')


    //Nested shadow DOM
    const shadowTxt1 = await page.locator('div#nested_shadow_content').textContent()
    console.log('Shadow TExt...', shadowTxt1)
    expect(shadowTxt1).toEqual('Laptops')
})