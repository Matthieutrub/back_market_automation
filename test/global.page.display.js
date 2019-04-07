describe('Website need to be correctly display', async  () => {
    let page;

    before(async () => { /* before hook for mocha testing */
        page = await browser.newPage();
        await page.goto('https://www.backmarket.fr/register');
        await page.setViewport( { width: 1920, height: 1040} );
    });

    after(async function () { /* after hook for mocah testing */
        await page.close();
    });

    it('should display title', async () => {
        const titleSelector = "//h1[contains(., 'Ola, qui va là ?')]";

        const title = await page.$x(titleSelector);

        expect(title).to.be.not.null;
        expect(title.length).to.equal(1);
    });
    it('should display two frames for register and login', async () => {
        const loginFramesSelector = '.omb_login';

        const loginFrames = await page.$$(loginFramesSelector);

        expect(loginFrames).to.be.not.null;
        expect(loginFrames.length).to.equal(2);
    });
});
