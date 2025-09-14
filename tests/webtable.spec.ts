import { test, expect } from '@playwright/test'


test('Web Table Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables')
    const allRows = await page.locator('table#table1 tbody tr').all()
    console.log('No. of rows ', allRows.length)
    expect(allRows.length).toEqual(4)
    allRows.forEach(async (row) => {
        const cols = row.locator('td')
        console.log('Column Count in a row', await cols.count())
        expect(cols).toHaveCount(6)
    })

    //To get data from a particular row
    const table1 = await page.locator('table#table1 tbody')
    const rowTxts = await table1.locator('tr')
        .nth(2).locator(':scope').allTextContents()
    rowTxts.forEach((txt) => {
        console.log(txt)
    })

    const empData = table1.getByRole('row', { name: 'Frank' })
    const texts = await empData.evaluateAll(cols =>
        cols.map(element => element.innerHTML))
    console.log('All text contents from map', texts)


})