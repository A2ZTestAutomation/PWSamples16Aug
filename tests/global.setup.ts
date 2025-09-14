import { test as setup, expect } from '@playwright/test'
import { STORAGE_STATEFILE } from '../playwright.config'

setup('Login into App', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.waitForTimeout(3000)
    await page.locator('#loginusername').fill('Anandhi')
    await page.locator('#loginpassword').fill('Anandhi')
    await page.getByRole('button', { name: 'Log in' }).click()
    await expect(page.locator('#nameofuser')).toBeVisible()
    await page.context().storageState({ path: STORAGE_STATEFILE })
})