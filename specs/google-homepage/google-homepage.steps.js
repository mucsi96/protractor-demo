var helpers = require('../../spec_helpers/index'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    prot = protractor.getInstance(),
    GoogleHomepage = require('./google-homepage.po.js');

chai.use(chaiAsPromised);

module.exports = function() {
    var googleHomepage = new GoogleHomepage();

    this.Given(/^that I have gone to the Google page$/, function (done) {
        googleHomepage.get();
        done();
    });

    this.When(/^I add "([^"]*)" to the search box$/, function (text, done) {
        googleHomepage.searchField.sendKeys(text);
        done();
    });

    this.When(/^click the Search Button$/, function (done) {
        googleHomepage.searchButton.click();
        done();
    });

    this.Then(/^"([^"]*)" should be mentioned in the results$/, function (text, done) {
        helpers.waitForTitleToContainText(text, done);
    });
};

