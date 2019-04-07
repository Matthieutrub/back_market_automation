function delay(time) {
   return new Promise(function(resolve) {
       setTimeout(resolve, time)
   });
}

describe('Make sure that we can authenticate when we enter the correct information', async  () => {
    let page;
    const usernameSelector = "#id_username";
    const passwordSelector = "#id_password";
    const buttonSelector = "//button[contains(., 'Welcome back !')]";
    const usernameText = "test.trublin@gmail.com"
    const passwordText = "ceciestunmotdepasse"

    beforeEach(async () => { /* before hook for mocha testing */
        page = await browser.newPage();
        await page.goto('https://www.backmarket.fr/register');
        await page.setViewport( { width: 1920, height: 1040} );
    });

    afterEach(async function () { /* after hook for mocah testing */
        await page.close();
    });

    it('can be authenticate with the use of the keyboard', async () => {

        page.click(usernameSelector);
        await delay(500)
        await page.keyboard.type(usernameText);
        await page.keyboard.type(String.fromCharCode(13));
        await delay(500)
        await page.keyboard.type(passwordText);
        await page.keyboard.type(String.fromCharCode(13));
        await delay(5000)
    });

    it('can be authenticate with the use of the cursor', async () => {

        page.click(usernameSelector);
        await delay(500)
        await page.keyboard.type(usernameText);
        await delay(500)
        page.click(passwordSelector);
        await delay(500)
        await page.keyboard.type(passwordText);
        await delay(500)
        const [confirmButton] = await page.$x(buttonSelector);
        if (confirmButton) {
            await confirmButton.click();
        }
        await delay(5000)
    });

});
