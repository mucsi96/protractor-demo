var chai = require('chai'),
    expect = chai.expect,
    desktop = true,
    SmashingMagazineHomepage = require('./smashingmagazine-homepage.po'),
    smashingMagazineHomepage,
    helpers = require('../../spec_helpers/index');



module.exports = function () {
    this.Given(/^that I am on desktop$/, function (done) {
        desktop = true;
        done();
    });

    this.Given(/^that I have gone to the Smashing Magazine page$/, function (done) {
        smashingMagazineHomepage = new SmashingMagazineHomepage(desktop);
        smashingMagazineHomepage.get();
        done();
    });

    this.When(/^I click the 'Books' button$/, function (done) {
        smashingMagazineHomepage.booksButton.getWebElement().then(function () {
            smashingMagazineHomepage.booksButton.click();
            done();
        });
    });

    this.Then(/^the URL should end with "([^"]*)"$/, function (text, done) {
        console.log('waiting for redirect');
        helpers.waitForURLToEndWithText(text, done);
    });

    this.Given(/^that I am on mobile$/, function (done) {
        desktop = false;
        done();
    });

    this.When(/^I click the sandwitch button$/, function (done) {
        smashingMagazineHomepage.sandwitchButton.click();
        done();
    });
};