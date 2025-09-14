import { test, expect } from '@playwright/test'


test('Handle Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.screenshot({ path: './files/pagescreenshot.png' })

    //Using callback and checking deep equality from string[]
    await page.selectOption('#country', {
        index: 5
    }).then((dropdownValue) => {
        expect(dropdownValue).toEqual(['australia'])
    })

    await page.locator('#animals').scrollIntoViewIfNeeded()
    await page.locator('#animals').screenshot({ path: './files/elemscreenshot.png' })
    await page.selectOption('#animals',
        [
            { label: 'Cat' },
            { value: 'elephant' },
            { index: 8 }
        ])

    //position the mouse at an element and further scroll using mouse wheel
    await page.getByRole('button', { name: 'Point Me' }).hover()
    await page.mouse.wheel(0, 200)

    await page.waitForTimeout(4000)
    //using javascript scroll to an element
    // await page.getByRole('button', { name: 'START' }).click()
    // await page.getByRole('button', { name: 'STOP' }).evaluate(e => e.scrollTop += 900)
    // await page.waitForTimeout(4000)



})