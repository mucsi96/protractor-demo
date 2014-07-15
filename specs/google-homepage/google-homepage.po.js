var GoogleHomepage = function() {
    this.searchField = element(By.css('[name="q"]'));
    this.searchButton = element(By.css('[name="btnG"]'));

    this.get = function () {
        browser.get('http://www.google.com');
    };
};

module.exports = GoogleHomepage;