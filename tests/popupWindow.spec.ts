import { test, expect } from '@playwright/test'


test('Popup Window Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Method 1
    // const [newWindow] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     await page.getByRole('button', { name: 'New Tab' }).click()
    // ])
    // await newWindow.waitForLoadState()
    // expect(newWindow.url()).toContain('pavantestingtools')
    // newWindow.close()

    //Method 2
    // const popupPromise = page.waitForEvent('popup')
    // const popup = await popupPromise;

    page.on('popup', async popup => {
        // await popup.waitForLoadState();
        console.log(await popup.title());

    });
    await page.getByRole('button', { name: 'Popup windows' }).click()

})