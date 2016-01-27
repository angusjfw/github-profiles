describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));
  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('intialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});

describe('when searching for a user', function() {
  beforeEach(module('GitUserSearch'));
  var httpBackend;
  var ctrl;
  var fakeSearch;
  var scope;
  beforeEach(function(){
    module(function ($provide) {
     fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);
      $provide.factory('Search', function(){
        return fakeSearch;
      });
    });
  });

  beforeEach(inject(function ($q, $rootScope) {
    scope = $rootScope;
    fakeSearch.query.and.returnValue($q.when(fakeData));
  }));

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));
  var fakeData = {
    data : {
      items: [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "url": "https://github.com/tansaku"
      }
      ]
    }
  };

  it('displays search results', function() {
    ctrl.searchTerm = 'hello';
    ctrl.doSearch();
    scope.$apply();
    console.log(ctrl.searchResult);
    expect(ctrl.searchResult.items).toEqual(fakeData.data.items);
  });
});
