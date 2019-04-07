function delay(time) {
   return new Promise(function(resolve) {
       setTimeout(resolve, time)
   });
}

describe('Make sure that we can not authenticate without proper information', async  () => {
    let page;
    const usernameSelector = "#id_username";
    const passwordSelector = "#id_password";
    const buttonSelector = "//button[contains(., 'Welcome back !')]";

    beforeEach(async () => { /* before hook for mocha testing */
        page = await browser.newPage();
        await page.goto('https://www.backmarket.fr/register');
        await page.setViewport( { width: 1920, height: 1040} );
    });

    afterEach(async function () { /* after hook for mocah testing */
        await page.close();
    });

    it('can not be authenticate with empty field', async () => {
        const [confirmButton] = await page.$x(buttonSelector);
        if (confirmButton) {
          await confirmButton.click();
        }
    });

    it('can detect wrong email format', async () => {
        var badEmailArray = ['test.trublingmail.com', 'test.trublin@gmail@com', '@gmail.com'];
        const [confirmButton] = await page.$x(buttonSelector);

        badEmailArray.forEach(function(email){
          await page.type(usernameSelector, email);
          await delay(500)
          if (confirmButton) {
            await confirmButton.click();
          }
          await delay(1000)
        });
        
    });

    it('can not be authenticate with the wrong combination', async () => {
      const usernameText = "test.trublin@gmail.com"
      const wrongUsernameText = "trublin@gmail.com"
      const wrongPasswordText = "motdepasse"

      await page.type(usernameSelector, wrongUsernameText);
      await delay(500)
      await page.type(passwordSelector, wrongPasswordText);
      await delay(500)
      const [confirmButton] = await page.$x(buttonSelector);
      if (confirmButton) {
        await confirmButton.click();
      }
      await delay(5000)

      await page.type(usernameSelector, usernameText);
      await delay(500)
      await page.type(passwordSelector, wrongPasswordText);
      await delay(500)
      const [confirmButton] = await page.$x(buttonSelector);
      if (confirmButton) {
        await confirmButton.click();
      }
      await delay(5000)
    });

});
