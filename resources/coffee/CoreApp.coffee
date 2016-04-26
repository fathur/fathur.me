config = ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: 'partial/home-front.html',
      controller: 'HomeFrontCtrl'
    .when '/:slug',
      templateUrl: 'partial/phone.html',
      controller: 'BlogListCtrl'
    .when '/:categorySlug/:articleSlug',
      templateUrl: 'partial/phone.html',
      controller: 'BlogListCtrl'

angular.module('rBlogApp', [
  'ngRoute',
  'BlogController',
  'HomeController'
])
.config(config)