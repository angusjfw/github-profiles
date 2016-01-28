describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  it('intialises with an empty search result and term', function() {
    var ctrl;
    inject(function($controller) {
      ctrl = $controller('GitUserSearchController');
    });
      
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
    var httpBackend, fakeSearch, fakeData, scope;

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

    fakeData = {
      data: {
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
});
