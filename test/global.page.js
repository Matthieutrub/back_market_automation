describe('test global page display', async  () => {
    let page;

    before(async () => { /* before hook for mocha testing */
        page = await browser.newPage();
        await page.goto('https://www.backmarket.fr/register');
        await page.setViewport( { width: 1920, height: 1040} );
    });

    after(async function () { /* after hook for mocah testing */
        await page.close();
    });

    it('should display title', async () => { /* simple test case */
        const titleSelector = 'h1.a-title.h5.first-title';
        const loginFramesSelector = '.omb_login';

        title = await page.$(titleSelector);
        loginFrames = await page.$$(loginFramesSelector);

        console.log(title)
        console.log(loginFrames)

        expect(title).to.be.not.null;
        expect(loginFrames).to.be.not.null;
    });
});
