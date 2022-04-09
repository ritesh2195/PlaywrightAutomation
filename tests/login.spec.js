const{test, chromium, expect} = require('@playwright/test')

test('Login Test', async ({browser})=>{

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("http://automationpractice.com/index.php")

    await page.click('"Sign in"')

    await page.locator('#email').type('rrm21@gmail.com')

    await page.locator('#passwd').type('password')

    await page.click('"Sign in"')

    console.log(page.title())
})