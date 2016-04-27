
var BlogHomeCtrl,BlogListCtrl,BlogSingleCtrl;BlogHomeCtrl=function($scope){$scope.articles=[{slug:"artikel-pertama",title:"Satu",excerpt:"yee"},{slug:"artikel-kedua",title:"Dua",excerpt:"horeee"}]},BlogListCtrl=function($scope){$scope.age=829},BlogSingleCtrl=function($scope){return $scope.article={slug:"artikel-pertama",title:"artikel pertama",excerpt:"afaf sadfdsa f",content:"Sed lobortis erat vitae nisl vulputate semper. Morbi vel dolor vitae purus aliquam efficitur eu ut nisl. Nullam at euismod est. Quisque sit amet velit est. Vivamus imperdiet diam eget massa congue pharetra. Donec maximus hendrerit quam, quis interdum sapien efficitur ut."}},angular.module("BlogController",["gist-embed"]).controller("BlogListCtrl",BlogListCtrl).controller("BlogSingleCtrl",BlogSingleCtrl).controller("BlogHomeCtrl",BlogHomeCtrl);
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
