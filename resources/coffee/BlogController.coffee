

BlogHomeCtrl = ($scope) ->
  $scope.articles = [{
    slug: 'artikel-pertama',
    title: 'Satu',
    excerpt: 'yee'
  },{
    slug: 'artikel-kedua',
    title: 'Dua'
    excerpt: 'horeee'
  }]
  return

BlogListCtrl = ($scope) ->
  $scope.age = 829
  return

BlogSingleCtrl = ($scope) ->
  $scope.article = {
    slug: 'artikel-pertama'
    title: 'artikel pertama'
    excerpt: 'afaf sadfdsa f',
    content: 'Sed lobortis erat vitae nisl vulputate semper. Morbi vel dolor vitae purus aliquam efficitur eu ut nisl. Nullam at euismod est. Quisque sit amet velit est. Vivamus imperdiet diam eget massa congue pharetra. Donec maximus hendrerit quam, quis interdum sapien efficitur ut.'
  }

angular.module('BlogController', ['gist-embed'])
  .controller('BlogListCtrl', BlogListCtrl)
  .controller('BlogSingleCtrl', BlogSingleCtrl)
  .controller('BlogHomeCtrl', BlogHomeCtrl)

