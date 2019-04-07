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

        subtitle = await page.$x(subtitleSelector);

        expect(subtitle).to.be.not.null;
        expect(subtitle.length).to.equal(1);
    });
    it('should display the form properly', async () => {
        const usernameSelector = "#id_username";
        const passwordSelector = "#id_password";
        const buttonSelector = "//button[contains(., 'Welcome back !')]";

        username = await page.$(usernameSelector);
        password = await page.$(passwordSelector);
        button = await page.$x(buttonSelector);

        expect(username).to.be.not.null;
        expect(password).to.be.not.null;
        expect(button.length).to.equal(1);
    });
    it('should display the link to password reset', async () => {
        const resetSelector = "//a[contains(., 'Mot de passe oublié ?')]";

        reset = await page.$x(resetSelector);

        expect(reset).to.be.not.null;
        expect(reset.length).to.equal(1);
    });
});
