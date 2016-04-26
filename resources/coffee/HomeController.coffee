HomeFrontCtrl = ($scope) ->
  $scope.articles = [{
    title: 'Satu'
  },{
    title: 'Dua'
  }]
  return

angular.module('HomeController', [])
  .controller('HomeFrontCtrl', HomeFrontCtrl)