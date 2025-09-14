import { test, expect } from '@playwright/test'

test.describe('PlaceOrder ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.demoblaze.com/')
    })
    test('Add Item', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible()
        await page.getByRole('link', { name: 'Samsung galaxy s6' }).click()
        await page.waitForTimeout(3000)
    })
})