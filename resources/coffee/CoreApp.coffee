config = ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: 'partial/blog/home.html',
      controller: 'BlogHomeCtrl'
    .when '/category/:category',
      templateUrl: 'partial/blog/list.html',
      controller: 'BlogCategoryCtrl'
    .when '/tag/:tag',
      templateUrl: 'partial/blog/list.html',
      controller: 'BlogTagCtrl'
    .when '/blog/@:author',
      templateUrl: 'partial/blog/list.html',
      controller: 'BlogAuthorCtrl'
    .when '/@:author',
      templateUrl: 'partial/author/detail.html',
      controller: 'AuthorDetailCtrl'
    .when '/:slug',
      templateUrl: 'partial/blog/single.html',
      controller: 'BlogSingleCtrl'

angular.module('rBlogApp', [
  'ngRoute',
  'BlogController'
])
.config(config)