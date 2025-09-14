import { test, expect } from '@playwright/test'

test.use({ viewport: { width: 1400, height: 980 } })
test('Sample Input Test', async ({ page }) => {
    await page.goto('https://www.example.com/')
    // await expect(page).toHaveScreenshot()
    expect(await page.textContent('h1')).toMatchSnapshot('/example.txt')


})