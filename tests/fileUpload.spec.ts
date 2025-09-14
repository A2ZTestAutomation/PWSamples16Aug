import { test, expect } from '@playwright/test'

const filePath1 = './files/elemscreenshot.png'
test.describe.configure({ mode: 'serial' });
test.describe('File Upload / download', () => {
    test('File upload ', { tag: '@Smoke' }, async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload')

        const fileChooserPromise = page.waitForEvent('filechooser')
        await page.locator('#file-upload').click()
        const filechooser = await fileChooserPromise

        await filechooser.setFiles(filePath1)
        await page.locator('#file-submit').click()
        await page.waitForTimeout(1000)
    })

    test('File download ', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')
        const downloadPromise = page.waitForEvent('download')
        await page.getByRole('link', { name: 'test-upload.txt', exact: true }).click()
        const download = await downloadPromise
        await download.saveAs('./downloadFiles/test-upload.txt')

    })
})