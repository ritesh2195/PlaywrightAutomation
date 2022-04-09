const {test}= require('@playwright/test')

test('Drop down', async ({browser})=>{

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://demoqa.com/select-menu')

    const dropdown = page.locator('#oldSelectMenu')

    await dropdown.selectOption('2')

    await dropdown.selectOption([{index: 3}])

    await page.pause()
})