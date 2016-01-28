githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    if (!self.searchTerm || self.searchTerm === '') {
      self.searchResult = {
        items: {}
      };
    }
    else {
      Search.query(self.searchTerm)
        .then(function(response) {
          self.searchResult = response.data;
        });
    }
  };
}]);
