import { test, expect } from '@playwright/test'

test('Sample Input Test', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/samplepagetest/')
    await expect(page).toHaveTitle(/GlobalSQA/)
})

test('Sample Locator Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('link', { name: 'PlaywrightPractice' }).click()
    // await page.locator('#username').fill('Test User')
    await page.getByLabel('Username:').fill('Test User')

    const inputTxt = await page.locator('#username').inputValue()
    expect(inputTxt).toEqual('Test User')

    // await page.getByRole('button', { name: 'START' }).click()
    await page.getByText('START').click()
    const btnTxt = await page.getByRole('button', { name: 'STOP' }).textContent()
    expect(btnTxt).toEqual('STOP')

    await page.getByRole('textbox', { name: 'Enter your full name' }).fill('My Name is TestUser')
    // await page.getByPlaceholder('Enter your full name').fill('My Name is TestUser')

})

test('Locators Using filters', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const listItems = page.locator('div#PageList2  ul li')
    // console.log('Getting text of all LIs', await listItems.allTextContents())
    console.log('Getting text of all LIs', await listItems.allInnerTexts())
    console.log(await listItems.count())

    // Method1 - to get all text and select particular value
    for (let i = 0; i <= await listItems.count(); i++) {


        const itemTxt = await listItems.nth(i).textContent()
        console.log("Each item's Text : " + itemTxt);
        if (itemTxt?.includes("Blog")) {
            console.log('Expected Text is ....', itemTxt)

            await listItems.nth(i).click()
            expect(page).toHaveTitle(/Blog/)
            break
        }
    }
    // Method2 - to get all text
    // const texts = await listItems.evaluateAll(list =>
    //     list.map(element => element.textContent));
    // console.log("All Text Contents from Map: " + texts)

    //Method3 - Using navigation methods to select an element
    // await listItems.last().click()
    // await listItems.first().click()
    // await listItems.nth(2).click()

    //Method4 - Using filter to select an element
    // await listItems
    //     .filter({ hasText: 'PlaywrightPractice' })
    //     .click()
})

test('Key press Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('link', { name: 'PlaywrightPractice' }).click()
    const inpTxt = page.getByLabel('Username:')
    // await inpTxt.fill('Test User')
    // await inpTxt.fill('WElcome', {force:true})

    await inpTxt.pressSequentially('Test User', { delay: 500 })
    await inpTxt.pressSequentially(' welcome')
    await inpTxt.press('PageDown')
})


