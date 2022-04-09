const {test, expect}= require('@playwright/test')

test('Drop down', async ({browser})=>{

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://demoqa.com/browser-windows')

    const [newPage] = await Promise.all([context.waitForEvent('page'), page.click('#tabButton')])

    console.log(await newPage.locator('#sampleHeading').textContent())

})