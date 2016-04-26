var BlogListCtrl;BlogListCtrl=function($scope){$scope.age=829},angular.module("BlogController",[]).controller("BlogListCtrl",BlogListCtrl);
var config;config=function($routeProvider){return $routeProvider.when("/",{templateUrl:"partial/home-front.html",controller:"HomeFrontCtrl"}).when("/:slug",{templateUrl:"partial/phone.html",controller:"BlogListCtrl"}).when("/:categorySlug/:articleSlug",{templateUrl:"partial/phone.html",controller:"BlogListCtrl"})},angular.module("rBlogApp",["ngRoute","BlogController","HomeController"]).config(config);
var HomeFrontCtrl;HomeFrontCtrl=function($scope){$scope.articles=[{title:"Satu"},{title:"Dua"}]},angular.module("HomeController",[]).controller("HomeFrontCtrl",HomeFrontCtrl);
var config;

config = function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'partial/home-front.html',
    controller: 'HomeFrontCtrl'
  }).when('/:slug', {
    templateUrl: 'partial/phone.html',
    controller: 'BlogListCtrl'
  }).when('/:categorySlug/:articleSlug', {
    templateUrl: 'partial/phone.html',
    controller: 'BlogListCtrl'
  });
};

angular.module('rBlogApp', ['ngRoute', 'BlogController', 'HomeController']).config(config);

//# sourceMappingURL=CoreApp.js.map
