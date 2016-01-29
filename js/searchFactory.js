githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  var github_access_token = '13b6c52059b2423d29d101c94d87f25284e1875e';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': github_access_token
        }
      });
    }
  };
}]);
