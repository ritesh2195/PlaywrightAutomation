const {test, expect}= require('@playwright/test')

test('Drop down', async ({browser})=>{

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://demoqa.com/checkbox')

    //await page.locator('.rct-checkbox').click()

    await expect(page.locator('.rct-checkbox')).toBeChecked()

})