import { test, expect } from '@playwright/test'


test('Auto Wait', async ({ page }) => {
    // test.setTimeout(15000)
    await page.goto('http://uitestingplayground.com/ajax')
    await page.locator('#ajaxButton').click()

    const txtElem = page.locator('.bg-success')
    // txtElem.waitFor({ state: 'visible', timeout: 16000 })

    const txtMsg = await txtElem.textContent()
    // console.log(txtMsg)
    // await expect(txtElem).toHaveText('Data loaded with AJAX get request.', { timeout: 20000 })

    await expect(txtElem).toHaveText('Data loaded with AJAX get request.')
    await page.waitForTimeout(5000)
})