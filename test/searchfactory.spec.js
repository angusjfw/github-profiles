describe('factory: Search', function() {
  var search, httpBackend;
  var items = [
  {
    "login": "tansaku",
    "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
    "html_url": "https://github.com/tansaku"
  }, 
  {
    "login": "stephenlloyd",
    "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
    "html_url": "https://github.com/stephenlloyd"
  }
  ];

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search, $httpBackend) {
    search = Search;
    httpBackend = $httpBackend;
    httpBackend
      .expectGET("https://api.github.com/search/users?access_token=" +
          github_access_token + "&q=hello")
      .respond({ items: items });
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

   it('returns search results', function() {
    search.query('hello')
      .then(function(response) {
        expect(response.data.items).toEqual(items);
      });
    httpBackend.flush();  
  });
});
