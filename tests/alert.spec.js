const {test} = require('@playwright/test')

test('Alert Handling', async({browser})=>{

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    page.on('dialog', (dialog)=>{

        console.log(dialog.message())

        dialog.accept()
    })

    await page.click('#confirmbtn')

})