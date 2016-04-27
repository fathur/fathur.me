
var BlogHomeCtrl,BlogListCtrl,BlogSingleCtrl,apiUrl;apiUrl="http://api.rohman.lo/v1",BlogHomeCtrl=function($scope,$http){$http.get(apiUrl+"/blog/home").success(function(data){return $scope.articles=data})},BlogListCtrl=function($scope){$scope.age=829},BlogSingleCtrl=function($scope,$http,$routeParams){$http.get(apiUrl+"/blog/",{params:{slug:$routeParams.slug}}).success(function(data){return $scope.article=data})},angular.module("BlogController",["gist-embed","ngSanitize"]).controller("BlogListCtrl",BlogListCtrl).controller("BlogSingleCtrl",BlogSingleCtrl).controller("BlogHomeCtrl",BlogHomeCtrl);
var config;config=function($routeProvider){return $routeProvider.when("/",{templateUrl:"partial/home-front.html",controller:"HomeFrontCtrl"}).when("/:slug",{templateUrl:"partial/phone.html",controller:"BlogListCtrl"}).when("/:categorySlug/:articleSlug",{templateUrl:"partial/phone.html",controller:"BlogListCtrl"})},angular.module("rBlogApp",["ngRoute","BlogController","HomeController"]).config(config);
var HomeFrontCtrl;HomeFrontCtrl=function($scope){$scope.articles=[{slug:"artikel-pertama",title:"Satu",content:"yee"},{slug:"artikel-kedua",title:"Dua",content:"horeee"}]},angular.module("HomeController",[]).controller("HomeFrontCtrl",HomeFrontCtrl);
var config;

config = function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'partial/blog/home.html',
    controller: 'BlogHomeCtrl'
  }).when('/category/:category', {
    templateUrl: 'partial/blog/list.html',
    controller: 'BlogCategoryCtrl'
  }).when('/tag/:tag', {
    templateUrl: 'partial/blog/list.html',
    controller: 'BlogTagCtrl'
  }).when('/blog/@:author', {
    templateUrl: 'partial/blog/list.html',
    controller: 'BlogAuthorCtrl'
  }).when('/@:author', {
    templateUrl: 'partial/author/detail.html',
    controller: 'AuthorDetailCtrl'
  }).when('/:slug', {
    templateUrl: 'partial/blog/single.html',
    controller: 'BlogSingleCtrl'
  });
};

angular.module('rBlogApp', ['ngRoute', 'BlogController']).config(config);

//# sourceMappingURL=CoreApp.js.map
