describe('GitUserProfiles', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it ('it has a visible title', function() {
    expect(element(by.className('page-header')).getText()).toEqual('GitHub Profiles');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('angusjfw');
    searchButton.click();

    expect(element(by.binding('user.login')).getText()).toEqual('angusjfw');
  });
});
