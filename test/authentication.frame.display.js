describe('Authentication frame need to be correctly display', async  () => {
    let page;

    before(async () => { /* before hook for mocha testing */
        page = await browser.newPage();
        await page.goto('https://www.backmarket.fr/register');
        await page.setViewport( { width: 1920, height: 1040} );
    });

    after(async function () { /* after hook for mocah testing */
        await page.close();
    });

    it('should display sub-title', async () => {
        const subtitleSelector = "//h3[contains(., 'Déjà Backer ?')]";

        const subtitle = await page.$x(subtitleSelector);

        expect(subtitle).to.be.not.null;
        expect(subtitle.length).to.equal(1);
    });
    it('should display the form properly', async () => {
        const usernameSelector = "#id_username";
        const passwordSelector = "#id_password";
        const buttonSelector = "//button[contains(., 'Welcome back !')]";

        const emailTextExpected = 'Adresse email';
        const passwordTextExpected = 'Mot de passe';

        const usernameField = await page.$(usernameSelector);
        const passwordField = await page.$(passwordSelector);
        const confirmButton = await page.$x(buttonSelector);

        expect(usernameField).to.be.not.null;
        expect(passwordField).to.be.not.null;
        expect(confirmButton.length).to.equal(1);

        const emailText = await page.evaluate(() =>     document.getElementById('id_username').placeholder)
        const passwordText = await page.evaluate(() =>     document.getElementById('id_password').placeholder)


        expect(emailText).to.equal(emailTextExpected)
        expect(passwordText).to.equal(passwordTextExpected)
    });
    it('should display the link to password reset', async () => {
        const resetSelector = "//a[contains(., 'Mot de passe oublié ?')]";

        const resetLink = await page.$x(resetSelector);

        expect(resetLink).to.be.not.null;
        expect(resetLink.length).to.equal(1);
    });
});
