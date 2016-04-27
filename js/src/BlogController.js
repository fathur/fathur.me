var BlogHomeCtrl, BlogListCtrl, BlogSingleCtrl, apiUrl;

apiUrl = 'http://api.rohman.lo/v1';

BlogHomeCtrl = function($scope, $http) {
  $http.get(apiUrl + '/blog/home').success(function(data) {
    return $scope.articles = data;
  });
};

BlogListCtrl = function($scope) {
  $scope.age = 829;
};


/*
  Retrieve single blog from url slug
 */

BlogSingleCtrl = function($scope, $http, $routeParams) {
  $http.get(apiUrl + '/blog/', {
    params: {
      slug: $routeParams.slug
    }
  }).success(function(data) {
    return $scope.article = data;
  });
};

angular.module('BlogController', ['gist-embed', 'ngSanitize']).controller('BlogListCtrl', BlogListCtrl).controller('BlogSingleCtrl', BlogSingleCtrl).controller('BlogHomeCtrl', BlogHomeCtrl);

//# sourceMappingURL=BlogController.js.map
