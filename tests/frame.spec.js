const {test} = require('@playwright/test')

test('Frame Handling', async({browser})=>{

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const frame = page.frameLocator('#courses-iframe')

    await frame.locator('"Courses"').first().click()

})