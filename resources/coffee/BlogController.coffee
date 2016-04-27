apiUrl = 'http://api.rohman.lo/v1'

BlogHomeCtrl = ($scope, $http) ->

  $http.get(apiUrl + '/blog/home').success((data) ->
    $scope.articles = data
  );

  return

BlogListCtrl = ($scope) ->
  $scope.age = 829
  return

###
  Retrieve single blog from url slug
###
BlogSingleCtrl = ($scope, $http, $routeParams) ->

  $http.get(apiUrl + '/blog/', {
    params: {
      slug: $routeParams.slug
    }
  }).success((data) ->
    $scope.article = data
  );

  return

angular.module('BlogController', ['gist-embed','ngSanitize'])
  .controller('BlogListCtrl', BlogListCtrl)
  .controller('BlogSingleCtrl', BlogSingleCtrl)
  .controller('BlogHomeCtrl', BlogHomeCtrl)

