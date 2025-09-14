import { test, expect } from '@playwright/test'


test('Handle iFrame and Tooltip', async ({ page }) => {
    await page.goto('https://jqueryui.com/tooltip/')

    const frame1 = page.frameLocator('.demo-frame')
    const inpAge = frame1.locator('#age')
    await inpAge.hover()

    //Method 1
    const toolTxt = await frame1.getByRole('tooltip').textContent()
    expect(toolTxt).toEqual('We ask for your age only for statistical purposes.')

})