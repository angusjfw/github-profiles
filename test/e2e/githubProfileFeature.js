describe('GitUserProfiles', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title tag', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it ('it has a visible title', function() {
    expect(element(by.className('page-header')).getText()).toEqual('GitHub Profiles');
  });

  it('finds profiles with most relevant first', function() {
    searchBox.sendKeys('Adzz');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('Adzz');
  });
});
