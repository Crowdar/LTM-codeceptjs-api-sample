const assert = require('assert');

Feature('Test Manager sections');

function navigate(I, baseUrl, container) {
    I.amOnPage(baseUrl);
    I.maximizeWindow();
    I.seeElement(container);
}

async function verifySection(I, sectionXPath, sectionContentXpath, expectedTitle) {
    I.click(sectionXPath);
    const titleText = await I.grabTextFrom(locate({ xpath: sectionContentXpath }));
    assert.equal(titleText.trim(), expectedTitle.trim());
}

Scenario('as a client, I need to see Get Started documentation', ({ I }) => {
    navigate(I, 'https://lippia.io/', '#lp-home');
    I.click(".lp-a-home");
    I.seeElement("#lp-get-started-container");
});

Scenario('as a client, I need to see About Lippia section', async ({ I }) => {
    navigate(I, 'https://lippia.io/', '#lp-home');
    await verifySection(I, '//li[@id="dropDown-managment"]/a[text()="About Lippia"]', '//div[@id="lp-about-us"]//h1', "About Lippia");
});

Scenario('as a client, I need to see Test Manager section', async ({ I }) => {
    navigate(I, 'https://lippia.io/', '#lp-home');
    await verifySection(I, '//li[@id="dropDown-managment"]/a[text()="Test Manager"]', '//div[@id="lp-test-manager"]//h1', "Lippia Test Manager");
});

