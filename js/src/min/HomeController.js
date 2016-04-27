var HomeFrontCtrl;

HomeFrontCtrl = function($scope) {
  $scope.articles = [
    {
      slug: 'artikel-pertama',
      title: 'Satu',
      content: 'yee'
    }, {
      slug: 'artikel-kedua',
      title: 'Dua',
      content: 'horeee'
    }
  ];
};

angular.module('HomeController', []).controller('HomeFrontCtrl', HomeFrontCtrl);

//# sourceMappingURL=HomeController.js.map
